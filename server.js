const express = require("express");
const app = express();

const mockUserData = [
  { id: 1, name: "Mark" },
  { id: 2, name: "Jill" },
];
app.get("/users", function (req, res) {
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    users: mockUserData,
  });
});

app.get("/users/:id", function (req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "got one user",
    id: req.params.id,
    users: mockUserData.find((user) => user.id == req.params.id),
  });
});

app.listen(8000, function () {
  console.log("server is running");
});
