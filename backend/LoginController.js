const createError = require("http-errors");
const UserModel = require("./Models/UserModel");
const { v4: uuidv4 } = require("uuid")

exports.index = async function (req, res) {
  try {
    const users = await UserModel.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }
};

exports.login = async function (req, res) {
  console.log("arrived");
  const user = await UserModel.findOne({ userName: req.body.userName });
  console.log(user)

  if (!user) {return res.sendStatus(401);}
  if (req.body.password !== user.password) {return res.sendStatus(403);}

  user.token = uuidv4();

  try {
    await user.save();
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }

  res.send({ token: user.token });
};
