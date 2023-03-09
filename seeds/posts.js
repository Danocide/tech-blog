const { Post } = require('../models')

const postsData = [
    {
        title: "Devout Shoulders",
        contents: "It will help him heal better, he'll have more mana. Only 32.33% repeating of course of survival.",
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postsData);

module.exports = seedPosts;