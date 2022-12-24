const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.Number.min = "Informed '{VALUE}' is less than the min value of '{MIN}'."
mongoose.Error.messages.Number.max = "Informed '{VALUE}' is greater than the max value of '{MAX}'."
mongoose.Error.messages.Number.enum = "'{VALUE}' is not valid for the '{PATH}' attribute."