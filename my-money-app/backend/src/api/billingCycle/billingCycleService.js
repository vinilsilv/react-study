const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })
BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('get', (req, res, next) => {
  BillingCycle.find({}, (err, docs) => {
    if (!err) {
      res.json(docs)
    } else {
      res.status(500).json({ errors: [err] })
    }
  }).skip(req.query.skip).limit(req.query.limit)
})

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [err] })
    } else {
      res.json({ value })
    }
  })
})

BillingCycle.route('summary', (req, res, next) => {
  BillingCycle.aggregate([{
    $project: { credit: { $sum: "$credits.value" }, debit: { $sum: "$debits.value" } }
  }, {
    $group: { _id: null, credit: { $sum: "$credit" }, debit: { $sum: "$debit" } }
  }, {
    $project: { _id: 0, credit: 1, debit: 1 }
  }], (error, result) => {
    if (error) {
      res.status(500).json({ errors: [error] })
    } else {
      res.json(result[0] || { credit: 0, debit: 0 })
    }
  })
})

module.exports = BillingCycle