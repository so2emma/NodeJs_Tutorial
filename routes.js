const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

  if (url === "/") {
    res.write(
      '<html><head><title>This is the title of the page</title> </head> <body> <form action="/message" method="POST"> <input name="message"> <button type="submit">Submit</button> </form> </body> </html>'
    );
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.end("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, () => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write(
    "<html><head><title>This is the title of the page</title> </head> <body> <h1>I am learning node js</h1> </body> </html>"
  );
  res.end();
};

// module.exports = requestHandler

module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
};
