#!/bin/bash

curl "https://jot-api.herokuapp.com/jots/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "jot": {
      "name": "'"${NAME}"'",
      "content": "'"${CONTENT}"'",
      "active": "'"${BOOL}"'"
    }
  }'

echo
