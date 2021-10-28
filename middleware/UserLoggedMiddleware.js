const userModelJSON = require('../models/UserModelJSON');
const UserModelJSON= require ('../models/UserModelJSON');

function UserLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;
    let emailInCookie=req.cookies.userEmail;
    let userInCookie= userModelJSON.userSearchByField('email', emailInCookie);
    if (userInCookie){
        req.session.userLogged = userInCookie;
    }
    if (req.session.userLogged) {
        res.locals.isLogged=true
        res.locals.userLogged = req.session.userLogged
    };


    next();
}

module.exports = UserLoggedMiddleware