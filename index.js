const http = require('http');

const hostname = "localhost";
const port = 5500;

// function displayed on web
const server = http.createServer((req, res) => {
    const {url} = req;
    console.log(url);

    if (url === "/translations"){
        const translations = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five"}
        res.setHeader("Content-Type", "application/json");
        // res.end("Translations Page ")
        res.write(JSON.stringify(translations));
    }
    res.end(" Welcome to Node!");
}); 

// function displayed on console or terminal when "node index" typed
server.listen(port, hostname, () =>{
    console.log(`Server running at ${hostname}:${port}`);
});