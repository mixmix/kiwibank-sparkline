var moment = require('moment')

if (!isKiwibankAccountPage(location)) return 

function isKiwibankAccountPage (loc) {
  return /^https:\/\/www\.ib\.kiwibank\.co\.nz\/accounts\/view/.test(loc)
}

var table = document.querySelector('table#TransactionTable')
var rows = table.querySelectorAll('tr.details')

function parseDate(str) {
  str = str
    .replace(/^\s*/, '')
    .replace(/\s*$/)
    .replace(/'/, '')

  return moment(str, "d mmm 'yy")
}

function parseBal(str) {
  str = str
    .replace(/^\s*\$/, '')
    .replace(/\s*$)/, '')
  
  return Number(str)
}

var data = []

rows.forEach( function(row) {
  var dateStr = row.firstElementChild.textContent
  var balStr = row.querySelector('.balance').textContent

  data.push({
    date: parseDate(dateStr),
    bal: parseBal(balStr) 
  })
})


console.log(JSON.stringify(data, null, 2))




