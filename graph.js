const spark = require('sparkline-canvas')
const moment = require('moment')
const data = require('./sampleData.json')


const graphOpts = {
  width: 730,
  height: 50,
}

const values = data.transactions.map(t=> t.bal)
console.log(values)
const canvas = spark.draw(values, graphOpts)

const target = document.querySelector('table#TransactionTable').parentNode
  

target.prepend(canvas)

