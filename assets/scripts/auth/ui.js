'use strict'

const store = require('../store')

const clearDisplayFields = function () {
  $('#signUpEmptyDiv').html('')
  $('#signInEmptyDiv').html('')
  $('#changePasswordEmptyDiv').html('')
  $('#signOutEmptyDiv').html('')
}

const clearFormFields = function () {
  document.getElementById('signUpForm').reset()
  document.getElementById('signInForm').reset()
  document.getElementById('changePasswordForm').reset()
}

const clearJotListMessagesForms = function () {
  $('#newJotEmptyDiv').html('')
  $('#listOfJotsMessage').html('')
  $('#listOfJots').html('')
  document.getElementById('createNewJot').reset()
}

const revealJotSection = function () {
  const jotSection = document.getElementById('jotSection')
  jotSection.classList.remove('hidden')
}

const hideJotSection = function () {
  const jotSection = document.getElementById('jotSection')
  jotSection.classList.add('hidden')
}

const revealChangePassSignOut = function () {
  revealJotSection()
  const userAuthInternal = document.getElementById('userAuthInternal')
  userAuthInternal.classList.remove('hidden')
}

const hideChangePassSignOut = function () {
  const userAuthInternal = document.getElementById('userAuthInternal')
  userAuthInternal.classList.add('hidden')
}

const revealSignUpSignIn = function () {
  hideJotSection()
  const userAuthExternal = document.getElementById('userAuthExternal')
  userAuthExternal.classList.remove('hidden')
}

const hideSignUpSignIn = function () {
  const userAuthExternal = document.getElementById('userAuthExternal')
  userAuthExternal.classList.add('hidden')
}

const signUpSuccess = function (response) {
  clearDisplayFields()
  const message = ('<p>Sign up success</p>')
  $('#signUpEmptyDiv').append(message)
  clearFormFields()
}

const signUpError = function () {
  clearDisplayFields()
  const message = ('<p>Sign up error</p>')
  $('#signUpEmptyDiv').append(message)
  clearFormFields()
}

const signInSuccess = function (response) {
  clearDisplayFields()
  store.user = response.user
  const message = ('<p>Sign in success</p>')
  $('#signInEmptyDiv').append(message)
  clearFormFields()
  revealChangePassSignOut()
  hideSignUpSignIn()
}

const signInError = function () {
  clearDisplayFields()
  const message = ('<p>Sign in error message</p>')
  $('#signInEmptyDiv').append(message)
  clearFormFields()
}

const changePasswordSuccess = function () {
  clearDisplayFields()
  const message = ('<p>Change password success message</p>')
  $('#changePasswordEmptyDiv').append(message)
  clearFormFields()
}

const changePasswordError = function () {
  clearDisplayFields()
  const message = ('<p>Change Password Error</p>')
  $('#changePasswordEmptyDiv').append(message)
  clearFormFields()
}

const signOutSuccess = function () {
  clearJotListMessagesForms()
  clearDisplayFields()
  const message = ('<p>Sign out success message</p>')
  $('#signOutEmptyDiv').append(message)
  clearFormFields()
  hideChangePassSignOut()
  revealSignUpSignIn()
  delete store.user
}

const signOutError = function () {
  clearDisplayFields()
  const message = ('<p>Sign out error message</p>')
  $('#signOutEmptyDiv').append(message)
  clearFormFields()
}

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
