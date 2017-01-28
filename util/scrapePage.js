const moment = require('moment')

module.exports = scrapePage
  
function scrapePage () {
  const table = document.querySelector('table#TransactionTable')
  const rows = table.querySelectorAll('tr.details')

  var data = []

  rows.forEach(row => {
    const dateStr = row.firstElementChild.textContent
    const balStr = row.querySelector('.balance').textContent

    data.push({
      date: parseDate(dateStr),
      bal: parseBal(balStr) 
    })
  })

  return data
}


function parseDate(str) {
  str = str
    .replace(/^\s*/, '')
    .replace(/\s*$/)
    .replace(/'/, '')

  return moment(str, "d mmm 'yy")
}

function parseBal(str) {
  str = str
    .replace(/^\s*/, '')
    .replace(/\s*$/, '')
    .replace(/\$/, '')
    .replace(/,/, '')
  
  return Number(str)
}

