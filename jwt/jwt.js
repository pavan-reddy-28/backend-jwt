const jwt = require('jsonwebtoken')

refreshTokens = []

const generateAccessToken = ( data ) =>{
    const {username } = data
    const token = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
}
