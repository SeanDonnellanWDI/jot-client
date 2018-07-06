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
    .then(jotApi.indexJots)
    .then(jotUi.runHandlebars)
    .catch(jotUi.createJotError)
}

const onIndexJots = (event) => {
  event.preventDefault()
  jotApi.indexJots()
    .then(jotUi.indexJotsSuccess)
    .then(jotApi.indexJots)
    .catch(jotUi.indexJotsError)
}

const onDestroyJot = (event) => {
  event.preventDefault()
  const jotId = event.target.parentElement.parentElement.getAttribute('data-id')
  jotApi.destroyJot(jotId)
    .then(jotUi.destroyJotSuccess)
    .then(jotApi.indexJots)
    .then(jotUi.runHandlebars)
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
}

const onUpdateJot = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target.parentElement.parentElement)
  store.update = event.target.getAttribute('data-id')
  jotApi.updateJot(data)
    .then(jotUi.updateJotSuccess)
    .then(jotApi.indexJots)
    .then(jotUi.runHandlebars)
    .catch(jotUi.updateJotError)
}

const addHandlers = () => {
  $('#createNewJot').on('submit', onCreateJot)
  $('#indexJotsButton').on('click', onIndexJots)
  $('#listOfJots').on('click', '.destroy-jot', onDestroyJot)
  $('#listOfJots').on('click', '.reveal-jot-editor', onRevealJotEditor)
  $('#listOfJots').on('click', '.update-jot', onUpdateJot)
}

module.exports = {
  addHandlers
}
