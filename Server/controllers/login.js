const { User } = require("../src/DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  if (!email || !password) {
    return res.status(400).send("Missing data");
  }

  try {
    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    if (user.password !== password) {
      return res.status(403).send("Incorrect password");
    }

    return res.status(200).json({ access: true });
  } catch (error) {
    return res.status(500).json({ message: "Error logging in", error });
  }
};

module.exports = login;
