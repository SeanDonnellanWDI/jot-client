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
  const message = ('<p>You signed up! We are happy you joined Jot, now please login.</p>')
  $('#userFacingMessages').append(message)
  clearFormFields()
}

const signUpError = function () {
  clearMessageDiv()
  const message = ('<p>Sorry, something went wrong. Make sure you are using a new email and you are typing in your password correctly.</p>')
  $('#userFacingMessages').append(message)
  clearFormFields()
}

const signInSuccess = function (response) {
  clearMessageDiv()
  store.user = response.user
  const message = ('<p>Welcome to Jot! You are now signed in.</p>')
  $('#userFacingMessages').append(message)
  clearFormFields()
  revealChangePassSignOut()
  hideSignUpSignIn()
}

const signInError = function () {
  clearMessageDiv()
  const message = ('<p>Sorry, it would appear something went wrong while trying to sign in. Please make sure you sign up first and type all credentials correctly.</p>')
  $('#userFacingMessages').append(message)
  clearFormFields()
}

const changePasswordSuccess = function () {
  clearMessageDiv()
  const message = ('<p>You successfully changed your password, careful not to forget your new one!</p>')
  $('#userFacingMessages').append(message)
  clearFormFields()
}

const changePasswordError = function () {
  clearMessageDiv()
  const message = ('<p>Sorry, something went wrong while changing your password. Please double check that you input the correct credentials.</p>')
  $('#userFacingMessages').append(message)
  clearFormFields()
}

const signOutSuccess = function () {
  clearJotListMessagesForms()
  clearMessageDiv()
  const message = ('<p>You are now signed out of Jot, come back soon!</p>')
  $('#userFacingMessages').append(message)
  clearFormFields()
  hideChangePassSignOut()
  revealSignUpSignIn()
  delete store.user
}

const signOutError = function () {
  clearMessageDiv()
  const message = ('<p>Sorry, something went wrong while signing out, please try again soon!</p>')
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
