const spark = require('sparkline-canvas')

const graphOpts = {
  width: 720,
  height: 50,
  lineColor: '#69ca39',
  endColor: '#6fb09f'
}

function graph (timeSeries) {
  const sparkline = spark.draw(timeSeries, graphOpts)
  sparkline.style.padding = "0.5rem 4px .5rem"
  sparkline.style.border = "1px solid #d5d5d5"

  return sparkline
}

module.exports = graph

