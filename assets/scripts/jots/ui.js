'use strict'

// const store = require('../store')
const indexJotsTemplate = require('../templates/jot-listing.handlebars')

const clearMessageDivs = function () {
  $('#newJotEmptyDiv').html('')
  $('#listOfJotsMessage').html('')
}

const clearListOfJots = function () {
  $('#listOfJots').html('')
}

const clearDisplayFields = function () {
  $(`#signUpEmptyDiv`).html(``)
  $(`#signInEmptyDiv`).html(``)
  $(`#changePasswordEmptyDiv`).html(``)
  $(`#signOutEmptyDiv`).html(``)
}

const clearFormFields = function () {
  document.getElementById('createNewJot').reset()
}

const createJotSuccess = function (data) {
  clearMessageDivs()
  clearDisplayFields()
  const message = ('<p>Create jot success</p>')
  $('#newJotEmptyDiv').append(message)
  clearFormFields()
}

const createJotError = function () {
  clearMessageDivs()
  clearDisplayFields()
  const message = ('<p>Create jot error</p>')
  $('#newJotEmptyDiv').append(message)
  clearFormFields()
}

const indexJotsSuccess = (data) => {
  clearMessageDivs()
  clearListOfJots()
  clearDisplayFields()
  if (data.jots.length !== 0) {
    const message = ('<p>Here you go:</p>')
    $('#listOfJotsMessage').append(message)
    const indexJotsHtml = indexJotsTemplate({ jots: data.jots })
    $('#listOfJots').append(indexJotsHtml)
  } else {
    $('#listOfJots').append('<p>No jots</p>')
  }
}

const indexJotsError = function () {
  clearMessageDivs()
  clearDisplayFields()
  const message = ('<p>Sorry, there was an error indexing your jots</p>')
  $('#listOfJotsMessage').append(message)
}

const destroyJotSuccess = () => {
  clearMessageDivs()
  clearDisplayFields()
  const message = ('<p>You destroyed your jot</p>')
  $('#listOfJotsMessage').append(message)
}

const destroyJotError = () => {
  clearMessageDivs()
  clearDisplayFields()
  const message = ('<p>Sorry, you were unsuccessful in your attempt to destroy your jot.</p>')
  $('#listOfJotsMessage').append(message)
}

const updateJotSuccess = () => {
  clearMessageDivs()
  clearDisplayFields()
  const message = ('<p>You updated your jot</p>')
  $('#listOfJotsMessage').append(message)
}

const updateJotError = () => {
  clearMessageDivs()
  clearDisplayFields()
  const message = ('<p>Sorry, your attempt to update your jot was unsuccessful.</p>')
  $('#listOfJotsMessage').append(message)
}

module.exports = {
  createJotSuccess,
  createJotError,
  indexJotsSuccess,
  indexJotsError,
  destroyJotSuccess,
  destroyJotError,
  updateJotSuccess,
  updateJotError
}
