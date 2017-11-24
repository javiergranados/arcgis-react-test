'use strict'

function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}

function getData (req, res) {
  console.log('GET /api/data')

  let males = []
  let females = []
  for (let i = 1; i <= 100; i++) {
    males.push({gender: 'male', name: `Male ${i}`, lat: getRandomArbitrary(-180, 180), lng: getRandomArbitrary(-180, 180)})
    females.push({gender: 'female', name: `Female ${i}`, lat: getRandomArbitrary(-180, 180), lng: getRandomArbitrary(-180, 180)})
  }

  res.status(200).send({males, females})
}

module.exports = {
  getData
}
