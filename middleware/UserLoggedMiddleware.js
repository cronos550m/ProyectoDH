function UserLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;
    
    next();
}

module.exports = UserLoggedMiddleware