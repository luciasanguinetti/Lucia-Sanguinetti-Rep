const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");

const { TOKEN_SECRET, verifyToken } = require("../middleware/jw-validate");

// Registro con control de nombre, mail y contraseña
router.post("/registro", async (req, res, next) => {
  try {
    const SALT = 10;
    if (req.body.mail && req.body.name && req.body.password) {
      if (/^\S+@\S+\.\S+$/.test(req.body.mail) === false) {
        res
          .status(400)
          .json({ success: false, message: "Formato de mail incorrecto" });
        return;
      }

      // Controlo si ya existe el usuario
      const existeUser = usuarios.find((u) => {
        return u.mail === req.body.mail;
      });

      if (existeUser) {
        return res
          .status(400)
          .json({ success: false, message: "Mail repetido" });
      }

      // Encripto la contraseña
      const salt = await bcrypt.genSalt(SALT);

      const password = await bcrypt.hash(req.body.password, salt);

      const newUser = {
        name: req.body.name,
        mail: req.body.mail,
        password: password,
      };

      usuarios.push(newUser);

      return res.json({ success: true, newUser });
    } else {
      return res.status(400).json({
        success: false,
        message: "Faltan datos (requeridos: mail, name, password)",
      });
    }
  } catch (error) {
    return next(error);
  }
});

// Login del usuario
router.post("/login", async (req, res, next) => {
  try {
    const user = usuarios.find((u) => u.mail === req.body.mail);

    // Verifico que el usuario existe 
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Usuario no encontrado" });
    }

    // Valido la contraseña
    const contrasenhaValidada = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!contrasenhaValidada) {
      return res
        .status(400)
        .json({ success: false, message: "Password inválido" });
    }

    // Creo un token con mi firma y encripto la contraseña
    const token = jwt.sign(
      {
        name: user.name,
        mail: user.mail,
      },
      TOKEN_SECRET
    );

    return res.status(200).json({
      success: true,
      data: user,
      token: token,
    });
  } catch (error) {
    return next(error);
  }
});

// Retorno el objeto usuarios
router.get("/usuarios", verifyToken, (req, res) => {
  return res.send({ error: null, usuarios });
});

module.exports = router;

const usuarios = [
  {
    name: "Lucía",
    mail: "luciasanguinettip@gmail.com",
    password: "$2b$10$f/rpZSwm2YX7sQECj/6eduVGa58jRWGifgAfvsJWjlb1.8W3a5gYa",
  },
];
