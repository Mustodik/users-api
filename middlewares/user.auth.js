function auth(req, res, next){
    let isVerified = true;
    if (isVerified) {
        console.log("logged in successfully")
     next()
    } else{
        console.log("Not authorized")
        throw Error
    }
}

module.exports =auth