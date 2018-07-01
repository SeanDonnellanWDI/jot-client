'use strict'

// const store = require('../store')
const indexJotsTemplate = require('../templates/jot-listing.handlebars')

const clearDisplayFields = function () {
  $('#newJotEmptyDiv').html('')
  $('#listOfJots').html('')
  $('#listOfJotsMessage').html('')
}

const clearFormFields = function () {
  document.getElementById('createNewJot').reset()
}

const createJotSuccess = function (data) {
  clearDisplayFields()
  const message = ('<p>Create jot success message</p>')
  $('#newJotEmptyDiv').append(message)
  clearFormFields()
}

const createJotError = function (error) {
  console.log('Error in jot creation is ', error)
  clearDisplayFields()
  const message = ('<p>Create jot error message</p>')
  $('#newJotEmptyDiv').append(message)
  clearFormFields()
}

const indexJotsSuccess = (data) => {
  clearDisplayFields()
  console.log('data is ', data)
  const message = ('<p>Here you go:</p>')
  $('#listOfJotsMessage').append(message)
  const indexJotsHtml = indexJotsTemplate({ jots: data.jots })
  $('#listOfJots').append(indexJotsHtml)
}

const indexJotsError = function (error) {
  console.log('Error in jots index is ', error)
  clearDisplayFields()
  const message = ('<p>Sorry, there was an error retrieving your jots</p>')
  $('#listOfJotsMessage').append(message)
}

module.exports = {
  createJotSuccess,
  createJotError,
  indexJotsSuccess,
  indexJotsError
}
