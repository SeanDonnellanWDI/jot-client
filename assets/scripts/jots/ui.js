'use strict'

const indexJotsTemplate = require('../templates/jot-listing.handlebars')

// Assistant functions

const runHandlebars = function (data) {
  $('#listOfJots').html('')
  const indexJotsHtml = indexJotsTemplate({ jots: data.jots })
  $('#listOfJots').append(indexJotsHtml)
}

const clearMessageDiv = function () {
  $('#userFacingMessages').html('')
}

const clearFormFields = function () {
  document.getElementById('createNewJot').reset()
}

// CRUD functions

const createJotSuccess = function (data) {
  clearMessageDiv()
  $('#userFacingMessages').append('<p>Create jot success</p>')
  clearFormFields()
}

const createJotError = function () {
  clearMessageDiv()
  $('#userFacingMessages').append('<p>Create jot error</p>')
  clearFormFields()
}

const indexJotsSuccess = (data) => {
  clearMessageDiv()
  if (data.jots.length !== 0) {
    $('#userFacingMessages').append('<p>Here are your jots</p>')
  } else {
    $('#userFacingMessages').append('<p>There are no jots to display</p>')
  }
}

const indexJotsError = function () {
  clearMessageDiv()
  $('#userFacingMessages').append('<p>Sorry, there was an error indexing your jots</p>')
}

const destroyJotSuccess = () => {
  clearMessageDiv()
  $('#userFacingMessages').append('<p>You destroyed your jot</p>')
}

const destroyJotError = () => {
  clearMessageDiv()
  $('#userFacingMessages').append('<p>Sorry, you were unsuccessful in your attempt to destroy your jot.</p>')
}

const updateJotSuccess = () => {
  clearMessageDiv()
  $('#userFacingMessages').append('<p>You updated your jot</p>')
}

const updateJotError = () => {
  clearMessageDiv()
  $('#userFacingMessages').append('<p>Sorry, your attempt to update your jot was unsuccessful.</p>')
}

module.exports = {
  createJotSuccess,
  createJotError,
  indexJotsSuccess,
  indexJotsError,
  destroyJotSuccess,
  destroyJotError,
  updateJotSuccess,
  updateJotError,
  runHandlebars
}
