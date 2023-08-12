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
      return res.status(200).send(`${user.email} already exists`);
    }

    return res
      .status(201)
      .send(`${user.email} created successfully`);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error creating user", error });
  }
};

module.exports = postUser;
