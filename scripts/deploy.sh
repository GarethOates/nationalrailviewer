#!/bin/bash

if [[ $TRAVIS_BRANCH == 'master' ]] ; then
    echo $PWD
    cd public
    git init
    git config user.name "Travis CI"
    git config user.email "goatie@gmail.com"

    git add .
    git commit -m "Deploy"

    # We redirect any output to
    # /dev/null to hide any sensitive credential data that might otherwise be exposed.
    git push --force --quiet "https://goatie@$GIT_TARGET" master:master # > dev/null
    GIT_PASSWORD
else
    echo 'Invalid Branch.  You can only deploy from master.'
    exit 1
fi