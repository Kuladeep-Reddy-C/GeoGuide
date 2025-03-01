import mongoose from "mongoose";

await mongoose.connect("mongodb://localhost:27017/GeoGuide");

const placeSchema = new mongoose.Schema({
    name: String,
    location: String,
    type: String
});

const Place = mongoose.model("Place", placeSchema);

const newPlace = new Place({
    name: "Taj Mahal",
    location: "Agra, India",
    type: "Monument"
});

await newPlace.save();
console.log("Data Inserted!");
mongoose.connection.close();
