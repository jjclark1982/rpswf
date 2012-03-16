mongoose = require("mongoose")
User = require("./schema/user")
express = require("express")
mongooseAuth = require("mongoose-auth")
stache = require("stache")

mongoose.connect("mongodb://test.modusponens.org/rps")

server = express.createServer()
server.configure(->
    server.set('views', __dirname+"/templates")
    server.set('view engine', 'mustache')
    server.set('view options', {layout: false})
    server.register(".mustache", stache)
    
    server.use(express.static(__dirname+"/static"))
    server.use(express.bodyParser())
    server.use(express.cookieParser())
    server.use(express.session({secret: "eousnteu"}))
    server.use(mongooseAuth.middleware())
)

mongooseAuth.helpExpress(server)
server.listen(7000)


testUsers = ->
    jesse = new User()
    jesse.name = "Jesse"
    jesse.save((err)->
        if err then throw err
    ) if false
    
    User.find({}, (err, docs)->
        console.log("found:",docs)
    )
    
    User.remove({}, (err, count)->
        if err then throw err
    )
    
    setTimeout(->
        mongoose.disconnect()
    , 2000) if false
    
testUsers()
