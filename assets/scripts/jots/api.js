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

const indexJots = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/jots',
    headers: {
      Authorization: `Token token=` + store.user.token
    }
  })
}

// const showJot = function (id) {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/jots/' + id
//   })
// }

const destroyJot = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/jots/' + id,
    headers: {
      Authorization: `Token token=` + store.user.token
    }
  })
}

const updateJot = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/jots/' + store.update,
    data: data,
    headers: {
      Authorization: `Token token=` + store.user.token
    }
  })
}

module.exports = {
  createJot,
  indexJots,
  // showJot,
  destroyJot,
  updateJot
}
