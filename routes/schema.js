var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dataSchema = new Schema({
    click: Number
});
var champSchema = new Schema({
    image: String,
    title: String,
    id: Number,
    key: String,
    name: String,
    banner: String,
    short: String,
    enemytips: [String],
    strongAgainst:[{"win": Number, "lose": Number, "winRate": Number, "id": Number, "name":String,"short":String}],
    weakAgainst:[{"win": Number, "lose": Number, "winRate": Number, "id": Number, "name":String,"short":String}]
});

var Data = mongoose.model('datas', dataSchema, "datas");
var Champ = mongoose.model('champs', champSchema, "champs")
module.exports = {
  Data: Data,
  Champ: Champ
}
