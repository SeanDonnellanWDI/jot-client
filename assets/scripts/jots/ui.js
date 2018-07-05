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
  const message = ('<p>Create jot success</p><img src="assets/img/success_jot.jpg" alt="create jot success">')
  $('#newJotEmptyDiv').append(message)
  clearFormFields()
}

const createJotError = function (error) {
  console.log('Error in jot creation is ', error)
  clearMessageDivs()
  clearDisplayFields()
  const message = ('<p>Create jot error</p><img src="assets/img/no_fields.jpg" alt="create jot error">')
  $('#newJotEmptyDiv').append(message)
  clearFormFields()
}

const indexJotsSuccess = (data) => {
  clearMessageDivs()
  clearListOfJots()
  clearDisplayFields()
  if (data.jots.length !== 0) {
    const message = ('<p>Here you go:</p><img src="assets/img/index_jots.jpg" alt="index jots success">')
    $('#listOfJotsMessage').append(message)
    const indexJotsHtml = indexJotsTemplate({ jots: data.jots })
    $('#listOfJots').append(indexJotsHtml)
  } else {
    const message = ('<img src="assets/img/empty_jots.jpg" alt="index jots error">')
    $('#listOfJotsMessage').append(message)
    $('#listOfJots').append('<p>No jots</p>')
  }
}

const indexJotsError = function (error) {
  console.log('Error in jots index is ', error)
  clearMessageDivs()
  clearDisplayFields()
  const message = ('<p>Sorry, there was an error indexing your jots</p><img src="assets/img/empty_jots.jpg" alt="index jots error">')
  $('#listOfJotsMessage').append(message)
}

// const showJotSuccess = (data) => {
//   clearMessageDivs()
//   clearListOfJots()
//   const message = ('<p>Here are you search results:</p>')
//   $('#listOfJotsMessage').append(message)
//   const showJotHtml = indexJotsTemplate({ jots: data.jots.id })
//   $('#listOfJots').append(showJotHtml)
// }
//
// const showJotError = function (error) {
//   console.log('Error in jot show is ', error)
//   clearMessageDivs()
//   const message = ('<p>Sorry, there was an error showing your jots</p>')
//   $('#listOfJotsMessage').append(message)
// }

const destroyJotSuccess = () => {
  clearMessageDivs()
  clearDisplayFields()
  const message = ('<p>You destroyed your jot</p><img src="assets/img/delete_success.jpg" alt="delete jots error">')
  $('#listOfJotsMessage').append(message)
}

const destroyJotError = (error) => {
  console.log('Error in destroy jot is ', error)
  clearMessageDivs()
  clearDisplayFields()
  const message = ('<p>Sorry, you were unsuccessful in your attempt to destroy your jot.</p><img src="assets/img/delete_fail.jpg" alt="delete jot error">')
  $('#listOfJotsMessage').append(message)
}

const updateJotSuccess = () => {
  clearMessageDivs()
  clearDisplayFields()
  const message = ('<p>You updated your jot</p><img src="assets/img/update_success.jpg" alt="update jots success">')
  $('#listOfJotsMessage').append(message)
}

const updateJotError = (error) => {
  console.log('Error while updating jot is ', error)
  clearMessageDivs()
  clearDisplayFields()
  const message = ('<p>Sorry, your attempt to update your jot was unsuccessful.</p><img src="assets/img/update_failed.jpg" alt="update jots error">')
  $('#listOfJotsMessage').append(message)
}

module.exports = {
  createJotSuccess,
  createJotError,
  indexJotsSuccess,
  indexJotsError,
  // showJotSuccess,
  // showJotError,
  destroyJotSuccess,
  destroyJotError,
  updateJotSuccess,
  updateJotError
}
