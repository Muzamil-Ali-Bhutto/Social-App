const express = require("express");

const { createPost, likeAndunlikePost, deletePost,getPostOffollowing, updateCaption, commentOnPost, deleteComment } = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated , createPost);
   
router.route("/post/:id").get(isAuthenticated, likeAndunlikePost).put(isAuthenticated , updateCaption).delete(isAuthenticated,deletePost);



router.route("/posts").get(isAuthenticated,getPostOffollowing);

router.route("/post/comment/:id").put(isAuthenticated, commentOnPost).delete(isAuthenticated, deleteComment);

module.exports = router;












