const http = require("http");

const server = http.createServer((req, res) => {
  const { headers, url, method } = req;

  console.log(`header =====>`, headers);
  console.log(`url =====> ${url}`);
  console.log(`method =====> ${method}`);

  res.setHeader("content-type", "text/plain");
  res.write("<h1>Welcome to NODEJS hellooo!!</h1>");
  res.end();
});

server.listen(5000, () => {
  console.log("http сэрвэр 5000 порт дээр аслаа...");
});
