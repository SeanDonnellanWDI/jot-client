#!/bin/bash

curl "https://jot-api.herokuapp.com/jots/${ID}" \
  --include \
  --request GET

echo
