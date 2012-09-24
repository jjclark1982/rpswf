mongoose = require("mongoose")
Schema = mongoose.Schema
ObjectId = Schema.ObjectId
mongooseTypes = require("mongoose-types")

GameSchema = new Schema({
    players: [ObjectId]
})
GameSchema.plugin(mongooseTypes.useTimestamps)

Game = mongoose.model('Game', GameSchema)

module.exports = Game
