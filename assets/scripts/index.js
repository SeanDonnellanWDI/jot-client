'use strict'

// use require with a reference to bundle the file and use it in this file
// // const example = require('./example')
const authEvents = require(`./auth/events`)

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $(`#signUpForm`).on(`submit`, authEvents.onSignUp)
  $(`#signInForm`).on(`submit`, authEvents.onSignIn)
  $(`#changePasswordForm`).on(`submit`, authEvents.onChangePassword)
  $(`#signOutForm`).on(`submit`, authEvents.onSignOut)
})
