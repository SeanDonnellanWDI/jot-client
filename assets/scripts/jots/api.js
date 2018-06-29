'use strict'

const config = require(`../config`)
const store = require(`../store`)

const createJot = function (data) {
  console.log(`data is ` + data)
  console.log(`store.user.token is ` + store.user.token)
  return $.ajax({
    method: `POST`,
    url: config.apiUrl + `/jots`,
    data: data,
    headers: {
      Authorization: `Token token=` + store.user.token
    }
  })
}

// const signIn = function (data) {
//   return $.ajax({
//     method: `POST`,
//     url: config.apiUrl + `/sign-in`,
//     data: data
//   })
// }
//
// const changePassword = function (data) {
//   return $.ajax({
//     method: `PATCH`,
//     url: config.apiUrl + `/change-password`,
//     data: data,
//     headers: {
//       Authorization: `Token token=` + store.user.token
//     }
//   })
// }
//
// const signOut = function () {
//   return $.ajax({
//     method: `DELETE`,
//     url: config.apiUrl + `/sign-out`,
//     headers: {
//       Authorization: `Token token=` + store.user.token
//     }
//   })
// }

module.exports = {
  createJot
  // signIn,
  // changePassword,
  // signOut
}
