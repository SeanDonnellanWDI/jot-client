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

const clearFormFields = function () {
  document.getElementById('createNewJot').reset()
}

const createJotSuccess = function (data) {
  clearMessageDivs()
  const message = ('<p>Create jot success message</p>')
  $('#newJotEmptyDiv').append(message)
  clearFormFields()
}

const createJotError = function (error) {
  console.log('Error in jot creation is ', error)
  clearMessageDivs()
  const message = ('<p>Create jot error message</p>')
  $('#newJotEmptyDiv').append(message)
  clearFormFields()
}

const indexJotsSuccess = (data) => {
  clearMessageDivs()
  clearListOfJots()
  const message = ('<p>Here you go:</p>')
  $('#listOfJotsMessage').append(message)
  const indexJotsHtml = indexJotsTemplate({ jots: data.jots })
  $('#listOfJots').append(indexJotsHtml)
}

const indexJotsError = function (error) {
  console.log('Error in jots index is ', error)
  clearMessageDivs()
  const message = ('<p>Sorry, there was an error indexing your jots</p>')
  $('#listOfJotsMessage').append(message)
}

const destroyJotSuccess = () => {
  clearMessageDivs()
  const message = ('<p>You destroyed your jot</p>')
  $('#listOfJotsMessage').append(message)
}

const destroyJotError = (error) => {
  console.log('Error in destroy jot is ', error)
  clearMessageDivs()
  const message = ('<p>Sorry, you were unsuccessful in your attempt to destroy your jot.</p>')
  $('#listOfJotsMessage').append(message)
}

const updateJotSuccess = () => {
  clearMessageDivs()
  const message = ('<p>You updated your jot</p>')
  $('#listOfJotsMessage').append(message)
}

const updateJotError = (error) => {
  console.log('Error while updating jot is ', error)
  clearMessageDivs()
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
