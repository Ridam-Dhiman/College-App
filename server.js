const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/save-user", (req, res) => {
  const user = req.body;

  console.log("📥 Received Form Data:", user);

  fs.readFile("users.json", "utf8", (err, data) => {
    let users = [];
    if (!err && data) users = JSON.parse(data);

    users.push(user);

    fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).json({ message: "Error saving user" });
      res.json({ message: "User saved successfully!" });
    });
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
