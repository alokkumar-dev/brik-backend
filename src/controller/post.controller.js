const express = require("express");
const router = express.Router();

const Post = require("../model/post.model");

//  post api request

router.post("", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    return res.status(200).send(post);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//  get api request

router.get("/", async (req, res) => {
  try {
    const post = await Post.find().lean().exec();
    return res.status(200).send(post);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//  get api request

// router.get("/:id", async (req, res) => {
//   try {
//     const post = await Post.find({ userId: req.params.id }).lean().exec();
//     return res.status(200).send(post);
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// });

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(post);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//  patch(update) api request

router.patch("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(post);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
