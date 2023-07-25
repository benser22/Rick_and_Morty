const users = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ access: true });
  } else {
    res.status(403).json({ access: false });
  }
}

module.exports = login;
