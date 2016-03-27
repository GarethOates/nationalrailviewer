#!/bin/bash

if [[ $TRAVIS_BRANCH == 'master' ]] ; then
    cd public
    git init
    git config user.name "Travis CI"
    git config user.email "goatie@gmail.com"

    git add .
    git commit -m "Deploy"

    # We redirect any output to
    # /dev/null to hide any sensitive credential data that might otherwise be exposed.
    git push --force --quiet "https://$GIT_USER:$GIT_PASSWORD@$GIT_TARGET" master:master > /dev/null 2>&1   
else
    echo 'Only deploying from master branch.'
    exit 0
fi