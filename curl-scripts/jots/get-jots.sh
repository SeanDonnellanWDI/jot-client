#!/bin/bash

curl "https://jot-api.herokuapp.com/jots" \
  --include \
  --request GET

echo
