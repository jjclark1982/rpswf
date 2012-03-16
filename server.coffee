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
    #server.set('view options', {layout: false})
    server.set('view options', {inspect: require("util").inspect})
    server.register(".mustache", stache)
    
    server.use(express.static(__dirname+"/static"))
    server.use(express.bodyParser())
    server.use(express.methodOverride())
    server.use(express.cookieParser())
    server.use(express.session({secret: "elumigaretz"}))
    server.use(mongooseAuth.middleware())
)
server.configure('production', ()->
    server.use(express.errorHandler())
)
server.configure('development', ()->
    server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
)



server.get("/test", (req, res)->
    res.send("<pre>"+require("util").inspect(req))
)

server.get("/", (req, res)->
    res.render("index")
)

mongooseAuth.helpExpress(server)
server.listen(7000)
console.log("Express server listening on port %d", server.address().port)


testUsers = ->
    jesse = new User()
    jesse.email = "jesse@modusponens.org"
    jesse.save((err)->
        if err
            console.log("user save err:",err)
        else
            console.log("user saved")
    )
    
    User.find({}, (err, docs)->
        console.log("registered users:",docs)
    )
    
    User.remove({}, (err, count)->
        if err then throw err
    ) if false
    
    setTimeout(->
        mongoose.disconnect()
    , 2000) if false
    
testUsers()
