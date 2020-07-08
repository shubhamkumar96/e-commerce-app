const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
        <div>
          <form method="POST">
            <input name="email" placeholder="email" />
            <input name="password" placeholder="password" />
            <input name="passwordConfirmation" placeholder="password confirmation" />
            <button>Sign Up</button>
          </form>
        </div>
  `);
});

app.post("/", (req, res) => {
  req.on("data", (data) => {
    const parsedData = data.toString("utf8").split("&");
    const formData = {};
    parsedData.forEach((pair) => {
      const [key, value] = pair.split("=");
      formData[key] = value;
    });
    console.log(formData);
  });
  res.send("Account Created!!!");
});

app.listen(3000, () => {
  console.log("Listening");
});
