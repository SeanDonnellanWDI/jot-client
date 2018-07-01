'use strict'

const config = require('../config')
const store = require('../store')

const createJot = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + `/jots`,
    data: data,
    headers: {
      Authorization: `Token token=` + store.user.token
    }
  })
}

const indexJots = function (data) {
  return $.ajax({
    url: config.apiUrl + '/jots'
  })
}

module.exports = {
  createJot,
  indexJots
}
