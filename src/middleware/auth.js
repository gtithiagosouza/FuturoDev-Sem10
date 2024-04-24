// verificar autencidade

const { verify } = require("jsonwebtoken")


async function auth(req, res, next) {

try {
  console.log("entramos no middlew")

  const { authorization } = req.headers

  req['payload'] = verify(authorization, process.env.SECRET_JWT)

  next()


} catch (error) {
  return res.status(401).send({
    message: "autenticação falhou", 
    cause: error.message
    })
  }
}

module.exports = { auth }