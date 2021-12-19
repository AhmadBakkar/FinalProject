const express = require("express")
const app = express()
const mysql = require("mysql");
const cors = require("cors")

app.use(express.json());
app.use(cors());

//Connection to the Database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'usatoleb'
});

//Login Function
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM admin WHERE AdminName = ? and AdminPass = ?", [username, password], (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        else if (result.length > 0) {
            res.send(result);
        }
        else {
            res.send({ message: "Wrong username/password combination" });
        }
    }
    );
});

//Display All Products
app.get("/AllRecord", (req, res) => {   
    const categoryName = req.body.type;
    db.query(`SELECT * FROM laptops Union Select * From tablets`,(err, result) => {
            res.send(result);
    }
    );
});

//Display for laptops menu
app.get("/laptops", (req, res) => {
    db.query("SELECT * FROM laptops",  (err, result) => {
            res.send(result);
    }
    );
});

//Display for laptops menu
app.get("/categories", (req, res) => {
    db.query("SELECT * FROM category_reference",  (err, result) => {
            res.send(result);
    }
    );
});

//Display for tablets menu
app.get("/tablets", (req, res) => {
    db.query("SELECT * FROM tablets",  (err, result) => {
            res.send(result);
    }
    );
});

//Display Data for the graph
app.get("/Data", (req, res) => {
    db.query("SELECT Description,Price FROM laptops UNION SELECT Description,Price FROM tablets",  (err, result) => {
            res.send(result);
    }
    );
});


//Insert Product Function
app.post("/insert", (req, res) => {
    const id = req.body.id;
    const image = req.body.image;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const categoryName = req.body.categoryName;

    db.query(`INSERT INTO ${categoryName} (ImageSrc,Name,Description,Price) VALUES ("${image}","${name}","${description}","${price}")`, (err, result) => {
        console.log(err);
        if (err) {
            res.send({ err: err })
        }
        else {
            res.send({ message: "Inserted!" });
        }   
    });
});

//Delete Product Function
app.post("/delete", (req, res) => {
    const id = req.body.id;
    const image = req.body.image;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const categoryName = req.body.categoryName;

    db.query(`DELETE FROM ${categoryName} WHERE id = "${id}" and Name = "${name}"`, (err, result) => {
        console.log(err);
        if (err) {
            res.send({ err: err })
        }else{
            res.send({message:"Deleted!!"})
        }
    });
});

//Update Product Function
app.post("/update", (req, res) => {
    const id = req.body.id;
    const image = req.body.image;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const categoryName = req.body.categoryName;

    db.query(`UPDATE ${categoryName} set ImageSrc = ? , Name = ? , Description = ?, Price = ? WHERE id = ?`, [image, name,description,price,id], (err, result) => {
        console.log(err);
        if (err) {
            res.send({ err: err })
        }
        else {
            res.send({ message: "Updated!!" });
        }   
    });
});



app.listen(3001, () => {
    console.log("running on port 3001");
}
);