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

const clearJotListMessagesForms = function () {
  $('#newJotEmptyDiv').html('')
  $('#listOfJotsMessage').html('')
  $('#listOfJots').html('')
  document.getElementById('createNewJot').reset()
}

// Show/hide Jot Section

const revealJotSection = function () {
  const jotSection = document.getElementById(`jotSection`)
  jotSection.classList.remove(`hidden`)
}

const hideJotSection = function () {
  const jotSection = document.getElementById(`jotSection`)
  jotSection.classList.add(`hidden`)
}

// Show/hide user auth EXTERNAL

const revealChangePassSignOut = function () {
  revealJotSection()
  const userAuthInternal = document.getElementById(`userAuthInternal`)
  userAuthInternal.classList.remove(`hidden`)
}

const hideChangePassSignOut = function () {
  const userAuthInternal = document.getElementById(`userAuthInternal`)
  userAuthInternal.classList.add(`hidden`)
}

// Show/hide user auth INTERNAL

const revealSignUpSignIn = function () {
  hideJotSection()
  const userAuthExternal = document.getElementById(`userAuthExternal`)
  userAuthExternal.classList.remove(`hidden`)
}

const hideSignUpSignIn = function () {
  const userAuthExternal = document.getElementById(`userAuthExternal`)
  userAuthExternal.classList.add(`hidden`)
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
  clearJotListMessagesForms()
  clearDisplayFields()
  const message = (`<p>Sign out success message</p>`)
  $(`#signOutEmptyDiv`).append(message)
  clearFormFields()
  hideChangePassSignOut()
  revealSignUpSignIn()
  delete store.user
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
