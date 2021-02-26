const { Router } = require("express");
const userRouter = Router();

userRouter.put("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    if (!mongoose.isValidObjectId(userId))
      return res.status(400).send({ err: "404" });
    const { age, name } = req.body;
    if (!age && !name)
      return res.status(400).send({ err: "age or name is required" });
    if (!age && typeof age !== "number")
      return res.status(400).send({ err: "age must be a number" });
    if (name && typeof name.first !== "string" && typeof name.last !== "string")
      return res.status(400).send({ err: "put string" });
    let updateBody = {};
    //
    if (age) updateBody.age = age;
    if (name) updateBody.name = name;
    // age와 name의 값의 유무를 검사

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: { updateBody } },
      { new: true }
    );
    return res.send({ user });
  } catch (error) {
    console.log(error);
    res.status(400).send({ err: "404" });
  }
});

userRouter.delete("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    if (!mongoose.isValidObjectId(userId))
      return res.status(400).send({ err: "404" });
    const user = await User.findOneAndDelete({ _id: userId });
    return res.send({ user });
  } catch (error) {
    console.log(error);
    res.status(400).send({ err: "404" });
  }
});

userRouter.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    if (!mongoose.isValidObjectId(userId))
      return res.status(400).send({ err: "404" });
    const user = await User.findOne({ _id: userId });
    return res.send({ user });
  } catch (error) {
    res.status(400).send({ err: "you have to put right id" });
  }
});

userRouter.get("/", async (req, res) => {
  try {
    const user = await User.find({});
    return res.send({ user });
  } catch (error) {
    console.log(error);
    res.status(400).send({ err: "err!!!!!!!" });
  }
});

userRouter.post("/", async (req, res) => {
  try {
    let { userName, name } = req.body;
    console.log(req.body);
    if (!userName) return res.status(400).send({ err: "username is required" });
    if (!name) return res.status(400).send({ err: "name is required" });
    const user = new User(req.body);
    await user.save();
    return res.send({ user });
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  userRouter,
};
