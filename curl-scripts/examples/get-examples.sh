#!/bin/bash

curl "https://jot-api.herokuapp.com/examples" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
