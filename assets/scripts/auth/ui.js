// HEY SEAN!!! Sean, you may edit this file. Don't edit files that don't have this comment at the top. Delete this comment before deliverables are due

'use strict'

const store = require(`../store`)

const clearDisplayFields = function () {
  $(`#signUpEmptyDiv`).html(``)
  $(`#signInEmptyDiv`).html(``)
  $(`#changePasswordEmptyDiv`).html(``)
  $(`#signOutEmptyDiv`).html(``)
}

const clearFormFields = function () {
  document.getElementById(`signUpForm`).reset()
  document.getElementById(`signInForm`).reset()
  document.getElementById(`changePasswordForm`).reset()
}

// organizational gap

const revealChangePassSignOut = function () {
  const changePassSection = document.getElementById(`changePassSection`)
  changePassSection.classList.remove(`hidden`)
  const signOutSection = document.getElementById(`signOutSection`)
  signOutSection.classList.remove(`hidden`)
}

const hideChangePassSignOut = function () {
  const changePassSection = document.getElementById(`changePassSection`)
  changePassSection.classList.add(`hidden`)
  const signOutSection = document.getElementById(`signOutSection`)
  signOutSection.classList.add(`hidden`)
}

const revealSignUpSignIn = function () {
  const signUpSection = document.getElementById(`signUpSection`)
  signUpSection.classList.remove(`hidden`)
  const signInSection = document.getElementById(`signInSection`)
  signInSection.classList.remove(`hidden`)
  delete store.user
}

const hideSignUpSignIn = function () {
  const signUpSection = document.getElementById(`signUpSection`)
  signUpSection.classList.add(`hidden`)
  const signInSection = document.getElementById(`signInSection`)
  signInSection.classList.add(`hidden`)
}

// organizational gap

const signUpSuccess = function (response) {
  clearDisplayFields()
  const message = (`<p>Sign up success message</p>`)
  $(`#signUpEmptyDiv`).append(message)
  clearFormFields()
}

const signUpError = function (error) {
  console.log(`Error in sign up is `, error)
  clearDisplayFields()
  const message = (`<p>Sign up error message</p>`)
  $(`#signUpEmptyDiv`).append(message)
  clearFormFields()
}

const signInSuccess = function (response) {
  clearDisplayFields()
  store.user = response.user
  const message = (`<p>Sign in success message</p>`)
  $(`#signInEmptyDiv`).append(message)
  clearFormFields()
  revealChangePassSignOut()
  hideSignUpSignIn()
}

const signInError = function (error) {
  console.log(`Error in sign in is `, error)
  clearDisplayFields()
  const message = (`<p>Sign in error message</p>`)
  $(`#signInEmptyDiv`).append(message)
  clearFormFields()
}

const changePasswordSuccess = function () {
  clearDisplayFields()
  const message = (`<p>Change password success message</p>`)
  $(`#changePasswordEmptyDiv`).append(message)
  clearFormFields()
}

const changePasswordError = function (error) {
  console.log(`Error in changePassword is `, error)
  clearDisplayFields()
  const message = (`<p>Change Password Error</p>`)
  $(`#changePasswordEmptyDiv`).append(message)
  clearFormFields()
}

const signOutSuccess = function () {
  clearDisplayFields()
  const message = (`<p>Sign out success message</p>`)
  $(`#signOutEmptyDiv`).append(message)
  clearFormFields()
  hideChangePassSignOut()
  revealSignUpSignIn()
}

const signOutError = function (error) {
  console.log(`Error in sign out is `, error)
  clearDisplayFields()
  const message = (`<p>Sign out error message</p>`)
  $(`#signOutEmptyDiv`).append(message)
  clearFormFields()
}

// Organizational gap

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutError
}
