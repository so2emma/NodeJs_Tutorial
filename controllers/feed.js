exports.getPosts = (req, res, next) => {
  res.status.json({
    posts: [{ title: "First Post", content: "This are some contents" }],
  });
};

exports.createPosts = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  //Create post in db
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      id: new Date().toISOString,
      title: title,
      content: content,
    },
  });
};
