const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.route('get', (req, res, next) => {
  BillingCycle.find({}, (err, docs) => {
    if (!err) {
      res.json(docs)
    } else {
      res.status(500).json({ errors: [err] })
    }
  })
})

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, value) => {
    if(error) {
      res.status(500).json({ errors: [err] })
    } else {
      res.json({value})
    }
  })
})

module.exports = BillingCycle