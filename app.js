const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
// const Fruit = require("./fruits");
// const Person = require("./people");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB")
.then(() => {
    console.log("Database connection successfully.");
})
.catch((err) => {
    console.log(err);   
});


const fruitSchema = new mongoose.Schema({
    Id: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true,
        min: 10,
        max: 200
    }
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const mango = new Fruit({
    Id: 6,
    Name: "Mango",
    Price: 40
});

mango.save().
then(() => {
    console.log("fruit added successfully.");
})
.catch((err) => {
    console.log(err);   
});

const PersonSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 10,
        max: 60
    },
    hobby: {
        type: String
    },
    favouriteFruit: fruitSchema
}
); 
const Person = mongoose.model("Person", PersonSchema);

// const person = new Person({
//     name: "Jaimin",
//     age: 22,
//     hobby: "Eating fruits",
//     favouriteFruit: pineapple
// });

// insertion in database.
Person.updateOne({name: "Jaimin"}, {favouriteFruit: mango})
.then(() => {
    console.log("updated favourite fruit.");
})
.catch((err) => {
    console.log(err);
})

// Person.deleteOne({name: "Jaimin"}).
// then(() => {
//     console.log("data deleted succefully.");
// })
// .catch((err) => {
//     console.log(err);
// });

// Fruit.updateOne({Name: "Watermalon"}, {Price: 80})
// .then(() => {
//     console.log("Data updated successfully.");
// })
// .catch((err) => {
//     console.log("Error: " + err);
// })

// Fruit.find({})
// .then((data) => {
//     data.forEach(element => {
//         console.log(element.Id + " => " + element.Name + " => " + element.Price);
//     });
//     mongoose.connection.close()
//     .then(() => {
//         console.log("connection close successfully.");
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// })
// .catch((err) => {
//     console.log(err);
// });

Person.find({}).
then((data) => {
    console.log(data);
    mongoose.connection.close();
})
.catch((err) => {
    console.log(err);
});



