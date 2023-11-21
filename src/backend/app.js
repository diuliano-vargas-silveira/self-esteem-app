const express = require("express");

var cors = require("cors");

const { PrismaClient } = require("@prisma/client");

const app = express();

app.use(express.json(), cors());

const prisma = new PrismaClient();

const INSUFICIENT_DATA_ERROR = { error: "Dados incompletos." };
const INVALID_DATA_ERROR = { error: "Id inválido." };
const INTERNAL_SERVER_ERROR = { error: "Ocorreu um erro no servidor" };
const NOT_AUTHORIZED_ERROR = { error: "Email ou senha incorretos" };

app.listen(5000, () => {
  console.log("Server listening on port: 8080");
});

app.get("/status", (req, res) => {
  const status = {
    Status: "Running",
  };

  res.send(status);
});

app.post("/sign-up", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
      return res.status(400).send(INSUFICIENT_DATA_ERROR);
    }

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });

    return res.send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send(INTERNAL_SERVER_ERROR);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send(INSUFICIENT_DATA_ERROR);
    }

    const login = await prisma.user.findFirst({
      where: {
        email: email,
        password: password,
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

app.post("/users/:id", async (req, res) => {
  try {
    const { quizAnswers } = req.body;
    const id = req.params.id;

    if (!id || id < 1) {
      return res.status(400).send(INVALID_DATA_ERROR);
    }

    console.log(quizAnswers);

    return user;
  } catch (error) {
    console.log(error);
    return res.status(500).send(INTERNAL_SERVER_ERROR);
  }
});

app.patch("/users/:email", async (req, res) => {
  try {
    const { email, name, password, description } = req.body;

    const user = await prisma.user.update({
      where: { email: email },
      data: {
        email: email,
        name: name,
        password: password,
        description: description,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    return res.status(500).send(INTERNAL_SERVER_ERROR);
  }
});

app.get("/users/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const user = await prisma.user.findFirst({
      where: { email: email },
      include: { answers: true },
    });

    return user;
  } catch (error) {
    return res.status(500).send(INTERNAL_SERVER_ERROR);
  }
});
