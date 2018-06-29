'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const jotApi = require(`./api`)
const jotUi = require(`./ui`)

const onCreateJot = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  jotApi.createJot(data)
    .then(jotUi.createJotSuccess)
    .catch(jotUi.createJotError)
}

// const onSignIn = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   jotApi.signIn(data)
//     .then(jotUi.signInSuccess)
//     .catch(jotUi.signInError)
// }
//
// const onChangePassword = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   jotApi.changePassword(data)
//     .then(jotUi.changePasswordSuccess)
//     .catch(jotUi.changePasswordError)
// }
//
// const onSignOut = function (event) {
//   event.preventDefault()
//   jotApi.signOut()
//     .then(jotUi.signOutSuccess)
//     .catch(jotUi.signOutError)
// }

module.exports = {
  onCreateJot
  // onSignIn,
  // onChangePassword,
  // onSignOut
}
