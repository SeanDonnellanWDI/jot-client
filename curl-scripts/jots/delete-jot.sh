#!/bin/bash

# call using :
# ID=3 sh scripts/recipe_ingredients/delete-recipe_ingredients.sh

curl "https://jot-api.herokuapp.com/jots/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
