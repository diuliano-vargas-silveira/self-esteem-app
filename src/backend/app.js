const express = require("express");

const multer = require("multer");
const path = require("path");

var cors = require("cors");

const { PrismaClient } = require("@prisma/client");

const app = express();

app.use(express.json(), cors());
app.use(express.urlencoded({ extended: true }));
app.use("/image", express.static("image"));

const prisma = new PrismaClient();

let imageName = "";

const storage = multer.diskStorage({
  destination: path.join("./image"),
  filename: function (req, file, cb) {
    imageName = Date.now() + path.extname(file.originalname);
    cb(null, imageName);
  },
});

const upload = multer({ storage });

const INSUFICIENT_DATA_ERROR = { error: "Dados incompletos." };
const INTERNAL_SERVER_ERROR = { error: "Ocorreu um erro no servidor" };
const NOT_AUTHORIZED_ERROR = { error: "Email ou senha incorretos" };

app.listen(5000, () => {
  console.log("Server listening on port: 5000");
});

app.get("/status", (req, res) => {
  const status = {
    Status: "Running",
  };

  res.send(status);
});

app.post("/sign-up", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    if (!email || !senha || !nome) {
      return res.status(400).send(INSUFICIENT_DATA_ERROR);
    }

    const usuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha,
        descricao: "Sua descrição aqui.",
      },
    });

    return res.send(usuario);
  } catch (error) {
    return res.status(500).send(INTERNAL_SERVER_ERROR);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).send(INSUFICIENT_DATA_ERROR);
    }

    const login = await prisma.usuario.findFirst({
      where: {
        email,
        senha,
      },
    });

    if (login === null) {
      return res.status(400).send(NOT_AUTHORIZED_ERROR).end();
    }

    return res.send(login);
  } catch (error) {
    return res.status(500).send(INTERNAL_SERVER_ERROR);
  }
});

app.post("/users/:email", async (req, res) => {
  try {
    const { respostasQuiz } = req.body;
    const email = req.params.email;

    const user = await prisma.usuario.findFirst({
      where: { email },
    });

    for (let index = 0; index < 4; index++) {
      await prisma.pergunta.create({
        data: {
          pergunta: respostasQuiz[index].pergunta,
          resposta: respostasQuiz[index].resposta,
          userId: user.id,
        },
      });
    }

    return res.send("sucesso");
  } catch (error) {
    return res.status(500).send(INTERNAL_SERVER_ERROR);
  }
});

app.post("/users", upload.single("foto"), async (req, res) => {
  try {
    const { email, nome, descricao } = req.body;

    const usuario = await prisma.usuario.update({
      where: { email: email },
      data: {
        email,
        nome,
        descricao,
        imagem: imageName,
      },
    });

    return res.send(usuario);
  } catch (error) {
    return res.status(500).send(INTERNAL_SERVER_ERROR);
  }
});

app.get("/users/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const usuario = await prisma.usuario.findFirst({
      where: { email },
      include: { respostas: true },
    });

    usuario.imagem = "http://localhost:5000/image/" + imageName;

    return res.send(usuario);
  } catch (error) {
    return res.status(500).send(INTERNAL_SERVER_ERROR);
  }
});
