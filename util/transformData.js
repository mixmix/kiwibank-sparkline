module.exports = transactions => {
  return transactions
    .map(transaction => transaction.bal)
    .reverse()
}

//TODO account for:
// - multiple transactions per day
// - days without transactions
//
