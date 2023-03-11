const restful = reuquire('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.userSchema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, min: 6, max: 12, required: true },
})

module.exports = restful.model('User', userSchema)