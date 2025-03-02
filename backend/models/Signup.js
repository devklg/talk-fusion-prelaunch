const mongoose = require('mongoose');

const statesList = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", 
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", 
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", 
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
  "West Virginia", "Wisconsin", "Wyoming"
];

const countriesList = [
  "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "India", "China", "Japan", "Brazil", "Mexico", "South Africa", "Italy", "Spain", "Netherlands", "Sweden", "Norway", "Denmark", "Switzerland", "Belgium", "Austria", "New Zealand", "Singapore", "Malaysia", "Thailand", "South Korea", "Russia", "Turkey", "Saudi Arabia", "UAE", "Argentina", "Colombia", "Chile", "Peru", "Poland", "Greece", "Portugal", "Czech Republic", "Hungary", "Finland", "Ireland", "Israel", "Philippines", "Vietnam", "Indonesia", "Egypt", "Pakistan", "Bangladesh", "Nigeria", "Ukraine", "Romania", "Serbia", "Croatia", "Slovakia", "Slovenia", "Bulgaria", "Lithuania", "Latvia", "Estonia", "Iceland", "Luxembourg", "Malta", "Cyprus", "Qatar", "Kuwait", "Oman", "Bahrain", "Kazakhstan"
];

const SignupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, enum: statesList, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, enum: countriesList, required: true },
  cell: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  enroller: { type: String, required: true },
  enrollmentPack: { type: String, enum: ["StarterPack $175", "Elite Pack $350", "Pro $700"], required: true },
  signature: { type: String, required: true },
  dateReceived: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Signup', SignupSchema);
