mongoose = require("mongoose")
Schema = mongoose.Schema
ObjectId = Schema.ObjectId
mongooseTypes = require("mongoose-types")

MessageSchema = new Schema({
    from: {type: ObjectId, index: true}
    to: {type: ObjectId, index: true}
    text: String
})
MessageSchema.plugin(mongooseTypes.useTimestamps)

Message = mongoose.model('Message', MessageSchema)

module.exports = Message
