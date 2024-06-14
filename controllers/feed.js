exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This are some contents",
        imageUrl: "images/duck.jpg",
        creator: {
          name: "Oso Emmanuel",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPosts = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  //Create post in db
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: {name: "Emmanuel"},
      createdAt: new Date()
    },
  });
};
