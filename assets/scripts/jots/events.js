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

const addHandlers = () => {
  $('#jotForm').on('submit', onCreateJot)
  $('#indexJotsButton').on('click', onIndexJots)
}

module.exports = {
  addHandlers
}
