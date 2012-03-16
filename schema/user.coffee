mongoose = require("mongoose")
Schema = mongoose.Schema
ObjectId = Schema.ObjectId
mongooseAuth = require("mongoose-auth")
mongooseTypes = require("mongoose-types")

UserSchema = new Schema({})
UserSchema.plugin(mongooseTypes.useTimestamps)
UserSchema.plugin(mongooseAuth, {
    everymodule: {
        everyauth: {
            User: ()->
                return User
        }
    },
    password: {
        loginWith: 'email',
        extraParams: {
            name: String
        },
        everyauth: {
            getLoginPath: '/login',
            postLoginPath: '/login',
            loginView: "login",
            loginLocals: {title: "Log in"},
            getRegisterPath: '/register',
            postRegisterPath: '/register',
            registerView: 'register',
            registerLocals: {title: "Register"},
            loginSuccessRedirect: '/',
            registerSuccessRedirect: '/'
        }
    }
});
UserSchema.pre('init', (next)->
    console.log("user init:",@)
    next()
)
UserSchema.pre('save', (next)->
    console.log("user save:",(if @isNew then "(isNew)" else ""),@)
    next()
)
UserSchema.pre('remove', (next)->
    console.log("user remove:",@)
    next()
)

User = mongoose.model('User', UserSchema)

module.exports = User
