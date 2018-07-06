'use strict'

const indexJotsTemplate = require('../templates/jot-listing.handlebars')

// Assistant functions

const runHandlebars = function (data) {
  $('#listOfJots').html('')
  const indexJotsHtml = indexJotsTemplate({ jots: data.jots })
  $('#listOfJots').append(indexJotsHtml)
  return data
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
  $('#userFacingMessages').append('<p>You successfully created a new jot!</p>')
  clearFormFields()
}

const createJotError = function () {
  clearMessageDiv()
  $('#userFacingMessages').append('<p>Sorry, something went wrong. Please confirm that you include a title and content, they are both necessary.</p>')
  clearFormFields()
}

const indexJotsSuccess = (data) => {
  clearMessageDiv()
  if (data.jots.length !== 0) {
    $('#userFacingMessages').append('<p>Here are your jots!</p>')
  } else {
    $('#userFacingMessages').append('<p>Sorry, there are no jots to display at this time. Create a new one and then try again!</p>')
  }
}

const indexJotsError = function () {
  clearMessageDiv()
  $('#userFacingMessages').append('<p>Sorry, there was an error displaying your jots, try again later.</p>')
}

const destroyJotSuccess = () => {
  clearMessageDiv()
  $('#userFacingMessages').append('<p>You successfully deleted your jot!</p>')
}

const destroyJotError = () => {
  clearMessageDiv()
  $('#userFacingMessages').append('<p>Sorry, you were unable to delete your jot, please try again later.</p>')
}

const updateJotSuccess = () => {
  clearMessageDiv()
  $('#userFacingMessages').append('<p>You successfully updated your jot!</p>')
}

const updateJotError = () => {
  clearMessageDiv()
  $('#userFacingMessages').append('<p>Sorry, your attempt to update your jot was unsuccessful, please try again later.</p>')
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
