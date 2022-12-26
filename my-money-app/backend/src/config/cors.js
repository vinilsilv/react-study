module.exports = (req, res, next) => {
  res.header('Access-Contorl-Allow-Origin', '*')
  res.header('Access-Contorl-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Contorl-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
}