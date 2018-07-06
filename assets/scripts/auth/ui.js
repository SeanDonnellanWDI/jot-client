'use strict'

const store = require('../store')

// Assisstant functions

const revealJotSection = function () {
  const jotSection = document.getElementById('jotSection')
  jotSection.classList.remove('hidden')
}

const revealChangePassSignOut = function () {
  revealJotSection()
  const userAuthInternal = document.getElementById('userAuthInternal')
  userAuthInternal.classList.remove('hidden')
}

const revealSignUpSignIn = function () {
  hideJotSection()
  const userAuthExternal = document.getElementById('userAuthExternal')
  userAuthExternal.classList.remove('hidden')
}

const hideJotSection = function () {
  const jotSection = document.getElementById('jotSection')
  jotSection.classList.add('hidden')
}

const hideChangePassSignOut = function () {
  const userAuthInternal = document.getElementById('userAuthInternal')
  userAuthInternal.classList.add('hidden')
}

const hideSignUpSignIn = function () {
  const userAuthExternal = document.getElementById('userAuthExternal')
  userAuthExternal.classList.add('hidden')
}

const clearMessageDiv = function () {
  $('#userFacingMessages').html('')
}

const clearFormFields = function () {
  document.getElementById('signUpForm').reset()
  document.getElementById('signInForm').reset()
  document.getElementById('changePasswordForm').reset()
}

const clearJotListMessagesForms = function () {
  $('#listOfJots').html('')
  document.getElementById('createNewJot').reset()
}

// CRUD functions

const signUpSuccess = function (response) {
  clearMessageDiv()
  const message = ('<p>Sign up success</p>')
  $('#userFacingMessages').append(message)
  clearFormFields()
}

const signUpError = function () {
  clearMessageDiv()
  const message = ('<p>Sign up error</p>')
  $('#userFacingMessages').append(message)
  clearFormFields()
}

const signInSuccess = function (response) {
  clearMessageDiv()
  store.user = response.user
  const message = ('<p>Sign in success</p>')
  $('#userFacingMessages').append(message)
  clearFormFields()
  revealChangePassSignOut()
  hideSignUpSignIn()
}

const signInError = function () {
  clearMessageDiv()
  const message = ('<p>Sign in error message</p>')
  $('#userFacingMessages').append(message)
  clearFormFields()
}

const changePasswordSuccess = function () {
  clearMessageDiv()
  const message = ('<p>Change password success message</p>')
  $('#userFacingMessages').append(message)
  clearFormFields()
}

const changePasswordError = function () {
  clearMessageDiv()
  const message = ('<p>Change Password Error</p>')
  $('#userFacingMessages').append(message)
  clearFormFields()
}

const signOutSuccess = function () {
  clearJotListMessagesForms()
  clearMessageDiv()
  const message = ('<p>Sign out success message</p>')
  $('#userFacingMessages').append(message)
  clearFormFields()
  hideChangePassSignOut()
  revealSignUpSignIn()
  delete store.user
}

const signOutError = function () {
  clearMessageDiv()
  const message = ('<p>Sign out error message</p>')
  $('#userFacingMessages').append(message)
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
