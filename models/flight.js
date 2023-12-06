const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
      type: String,
      enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    },
    arrival: {
      type: Date,
    },
  }, {
    timestamps: true
  });

const flightSchema = new Schema({
    airline: { 
        type: String,
        enum: ["American", "Southwest", "United"] 
    },
    airport: { 
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
        default: "DEN",
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
    },
    destinations:[destinationSchema],
}, {
    timestamps: true,
  });
// Compiles the schema into a model and exports it
  module.exports = mongoose.model("Flight", flightSchema);