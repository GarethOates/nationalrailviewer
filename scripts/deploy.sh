#!/bin/bash

if [[ $TRAVIS_BRANCH == 'master' ]] ; then
    ls
    cd public
    git init

    git config user.name "Travis CI"
    git config user.email "goatie@gmail.com"

    git add .
    git commit -m "Deploy"

    # We redirect any output to
    # /dev/null to hide any sensitive credential data that might otherwise be exposed.
    git push --force --quiet "https://${git_user}:${git_password}@${git_target}" master:master > /dev/null 2>&1
else
    echo 'Invalid Branch.  You can only deploy from master.'
    exit 1
fi