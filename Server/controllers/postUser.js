const { User } = require("../src/DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Incorrect email or password");
  }
  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password }, 
    });

    if (!created) {
      return res.status(200).json({ message: "The user already exists", user });
    }

    return res
      .status(201)
      .json({ message: "User created successfully", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error creating user", error });
  }
};

module.exports = postUser;
