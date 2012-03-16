mongoose = require("mongoose")
Schema = mongoose.Schema
ObjectId = Schema.ObjectId
mongooseAuth = require("mongoose-auth")

UserSchema = new Schema({})
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
            getRegisterPath: '/register',
            postRegisterPath: '/register',
            registerView: 'register',
            loginSuccessRedirect: '/',
            registerSuccessRedirect: '/'
        }
    }
});

User = mongoose.model('User', UserSchema)

module.exports = User
