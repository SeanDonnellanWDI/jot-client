'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const jotApi = require('./api')
const jotUi = require('./ui')

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
  console.log('this is ' + event.target.parentElement.parentElement.getElementsByClassName('update-form-jot-' + jotId))
  // Reveal Jot update form
  const updateJotForm = event.target.parentElement.parentElement.getElementsByClassName('update-form-jot-' + jotId)
  updateJotForm[0].classList.remove('hidden')
  // Shouts out to Taz for recognizing I need [0] on updateJotForm AAAAH AAAH AAAAAAH!!
  // // Hide Jot
  const jotName = document.getElementsByClassName('jot-name-' + jotId)
  jotName[0].classList.add('hidden')
  const jotActive = document.getElementsByClassName('jot-active-' + jotId)
  jotActive[0].classList.add('hidden')
  const jotContent = document.getElementsByClassName('jot-content-' + jotId)
  jotContent[0].classList.add('hidden')
}

// const onUpdateJot = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   jotApi.updateJot(data)
//     .then(jotUi.updateJotSuccess)
//     .then(jotApi.indexJots)
//     .then(jotUi.indexJotsSuccess)
//     .catch(jotUi.updateJotError)
// }

const addHandlers = () => {
  $('#jotForm').on('submit', onCreateJot)
  $('#indexJotsButton').on('click', onIndexJots)
  $('#listOfJots').on('click', '.destroy-jot', onDestroyJot)
  $('#listOfJots').on('click', '.reveal-jot-editor', onRevealJotEditor)
  // $('#listOfJots').on('click', '.update-jot', onUpdateJot)
}

module.exports = {
  addHandlers
}
