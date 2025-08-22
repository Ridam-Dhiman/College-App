const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Example: Save to file (users.json)
app.post("/save-user", (req, res) => {
  const user = req.body;

  // Append to users.json
  fs.readFile("users.json", "utf8", (err, data) => {
    let users = [];
    if (!err && data) users = JSON.parse(data);

    users.push(user);

    fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error saving user" });
      }
      res.json({ message: "User saved successfully!" });
    });
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
