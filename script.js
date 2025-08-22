const form = document.getElementById("userForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    username: form.username.value,
    phone: form.phone.value,
    email: form.email.value,
    password: form.password.value,
  };

  try {
    const res = await fetch("https://college-app-backend.onrender.com/save-user", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});

    const result = await res.json();
    console.log(result);

    msg.textContent = "✅ " + result.message;
    msg.classList.remove("hidden");
    form.reset();
  } catch (error) {
    console.error("Error:", error);
    msg.textContent = "❌ Failed to save data";
    msg.classList.remove("hidden");
  }
});
