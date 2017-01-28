const scrapePage = require('./util/scrapePage')
const transformData = require('./util/transformData')
const graph = require('./util/graph')

// document.addEventListener("DOMContentLoaded", () => {
  console.log("starting kiwibank-sparkline")

  const rawData = scrapePage()
  const timeSeries = transformData(rawData)

  const sparkline = graph(timeSeries)


  const target = document.querySelector('table#TransactionTable').parentNode
  target.prepend(sparkline)
// })

