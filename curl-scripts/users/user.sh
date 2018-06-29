#!/bin/bash

curl "https://jot-api.herokuapp.com/users/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
