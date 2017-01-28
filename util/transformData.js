module.exports = transactions => {
  var transations = transactions.reverse()

  var currentDay = transactions[0].date.clone()
  var finalDay = transactions[transactions.length-1].date.clone()
  var lastTransactionForDay
  var timeSeries = []

  console.log('first date', transactions[0].date.format())
  while (currentDay.isBefore(finalDay, 'day')) {
    // throw out all but the last transaction for the day
    // or keep using the lastTransactionForDay recorded to fill days
    while (transactions[0].date.isSame(currentDay)) {
      lastTransactionForDay = transactions.shift()
    }

    timeSeries.push(lastTransactionForDay.bal)

    currentDay.add(1, 'day')
  }

  // add the final balance
  timeSeries.push(transactions[transactions.length-1].bal)

  return timeSeries
}

