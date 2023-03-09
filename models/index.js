const User = require("./User");
const Post = require("./post");
const Comment = require("./comment");
// connect the routes
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {User, Post, Comment}