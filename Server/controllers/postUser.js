const { User } = require("../src/DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email o password incorrecto");
  }
  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password }, // Crea el usuario solo si no existe
    });

    // Si el usuario ya existía, se enviará un mensaje indicándolo
    if (!created) {
      return res.status(200).json({ message: "Usuario ya existe", user });
    }

    return res
      .status(201)
      .json({ message: "Usuario creado exitosamente", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al crear el usuario", error });
  }
};

module.exports = postUser;
