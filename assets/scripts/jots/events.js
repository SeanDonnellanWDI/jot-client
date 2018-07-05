'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const jotApi = require('./api')
const jotUi = require('./ui')
const store = require('../store.js')

const onCreateJot = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  jotApi.createJot(data)
    .then(jotUi.createJotSuccess)
    .catch(jotUi.createJotError)
}

const onIndexJots = (event) => {
  event.preventDefault()
  jotApi.indexJots()
    .then(jotUi.indexJotsSuccess)
    .catch(jotUi.indexJotsError)
}

// const onShowJot = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log('data is ', data)
//   // psuedoku code
//   // Index all jots
//   // // Check all jots against 'data', look for a partial match
//   // // // If there is NO match, run catch-A (no match found)
//   // // // If there is a match(es)
//   // // // // Retrieve and store jot id(s)
//   // // // // Run jotApi.showJot(id) (for each)
//   // // // // Success clears jot list, appends match(es) via handlebars
//   // // // // Catch-B (match found, error displaying data)
//   // jotApi.showJot(data)
//   // // .then(jotUi.showJotSuccess)
//   // // .catch(jotUi.showJotError)
// }

const onDestroyJot = (event) => {
  event.preventDefault()
  const jotId = event.target.parentElement.parentElement.getAttribute('data-id')
  jotApi.destroyJot(jotId)
    .then(jotUi.destroyJotSuccess)
    .then(jotApi.indexJots)
    .then(jotUi.indexJotsSuccess)
    .catch(jotUi.destroyJotError)
}

const onRevealJotEditor = (event) => {
  event.preventDefault()
  const jotId = event.target.parentElement.parentElement.getAttribute('data-id')
  // Reveal Form
  const updateJotForm = event.target.parentElement.parentElement.getElementsByClassName('update-form-jot-' + jotId)
  updateJotForm[0].classList.remove('hidden')
  // Hide Jot Elements
  const jotName = document.getElementsByClassName('jot-name-' + jotId)
  jotName[0].classList.add('hidden')
  const jotContent = document.getElementsByClassName('jot-content-' + jotId)
  jotContent[0].classList.add('hidden')
  // Shouts out to Taz for recognizing I need [0] on these calls AAAAH AAAH AAAAAAH woah!!
}

const onUpdateJot = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target.parentElement.parentElement)
  store.update = event.target.getAttribute('data-id')
  console.log('store.update is ', store.update)
  jotApi.updateJot(data)
    .then(jotUi.updateJotSuccess)
    .then(jotApi.indexJots)
    .then(jotUi.indexJotsSuccess)
    .catch(jotUi.updateJotError)
}

const addHandlers = () => {
  $('#createNewJot').on('submit', onCreateJot)
  // $('#showJot').on('submit', onShowJot)
  $('#indexJotsButton').on('click', onIndexJots)
  $('#listOfJots').on('click', '.destroy-jot', onDestroyJot)
  $('#listOfJots').on('click', '.reveal-jot-editor', onRevealJotEditor)
  $('#listOfJots').on('click', '.update-jot', onUpdateJot)
}

module.exports = {
  addHandlers
}
