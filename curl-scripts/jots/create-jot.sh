#!/bin/bash

curl "https://jot-api.herokuapp.com/jots" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "jot": {
      "name": "'"${NAME}"'",
      "content": "'"${CONTENT}"'"
    }
  }'

echo
