const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const bodyParser = require("body-parser");
// initializes the express application
const app = express();

// (express) uses ejs template engine. it replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. it will use .ejs files saved under views folder (by .render method)
app.set("view engine", "ejs");
// extracts information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// adds folders that express will use
app.use(express.static(__dirname + "/styles"));
app.use(express.static(__dirname + "/scripts"));
app.use(express.static(__dirname + "/images"));

// connects to DB
const db = new sqlite3.Database(
  "./users_db/users.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.log("Error occurred - " + err.message);
    } else {
      console.log("DB connected");
    }
  }
);

// runs server (http://localhost:3000/)
app.listen(3000, () => {
  console.log("Server started");
});

// adds root route: home page (/)
app.get("/", (req, res) => {
  // Find count of users in DB
  const q = "SELECT COUNT(*) AS count FROM users_newletter";
  db.all(q, [], (err, results) => {
    if (err) return console.error(err.message);
    let count = results[0].count;
    res.render("index", { data: count });
  });
});

// adds route for the post request (adding email to the database)
app.post("/", (req, res) => {
  // extracting email using bodyParser
  let email = [req.body.email];
  console.log(email);
  const q = "INSERT INTO users_newletter (email) VALUES (?)";
  db.run(q, email, (err) => {
    if (err) return console.error(err.message);
    res.send();
  });
});

// adds route for About Us (/about)
app.get("/about", (req, res) => {
  const q = "SELECT COUNT(*) AS count FROM users_newletter";
  db.all(q, [], (err, results) => {
    if (err) return console.error(err.message);
    let count = results[0].count;
    res.render("about", { data: count });
  });
});

app.post("/about", (req, res) => {
  // extracting email using bodyParser
  let email = [req.body.email];
  console.log(email);
  const q = "INSERT INTO users_newletter (email) VALUES (?)";
  db.run(q, email, (err) => {
    if (err) return console.error(err.message);
    res.send();
  });
});

// adds route for Books (/books)
app.get("/books", (req, res) => {
  const q = "SELECT COUNT(*) AS count FROM users_newletter";
  db.all(q, [], (err, results) => {
    if (err) return console.error(err.message);
    let count = results[0].count;
    res.render("books", { data: count });
  });
});

app.post("/books", (req, res) => {
  // extracting email using bodyParser
  let email = [req.body.email];
  console.log(email);
  const q = "INSERT INTO users_newletter (email) VALUES (?)";
  db.run(q, email, (err) => {
    if (err) return console.error(err.message);
    res.send();
  });
});

// adds route for Contacts (/contacts)
app.get("/contacts", (req, res) => {
  const q = "SELECT COUNT(*) AS count FROM users_newletter";
  db.all(q, [], (err, results) => {
    if (err) return console.error(err.message);
    let count = results[0].count;
    res.render("contacts", { data: count });
  });
});

// app.get("/test", (req, res) => {
// const q = "SELECT COUNT(*) AS count FROM users_newletter";
// db.all(q, [], (err, results) => {
//   if (err) return console.error(err.message);
//   let count = results[0].count;
//   res.render("test", { data: count });
// });
//   res.render("test", { quote: "AJAX" });
// });

// app.post("/test", (req, res) => {
//   let email = [req.body.email];
//   console.log(email);
//   res.send({ response: "test" });
// });
