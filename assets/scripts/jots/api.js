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

const destroyJot = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/jots/' + id,
    headers: {
      Authorization: `Token token=` + store.user.token
    }
  })
}

const updateJot = function (id) {
  return $.ajax({
    method: 'UPDATE',
    url: config.apiUrl + '/jots/' + id,
    headers: {
      Authorization: `Token token=` + store.user.token
    }
  })
}

module.exports = {
  createJot,
  indexJots,
  destroyJot,
  updateJot
}
