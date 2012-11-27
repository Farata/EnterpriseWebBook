#!/bin/sh

sh build.sh

echo "switching to gh-pages branch..."
git checkout gh-pages

echo "updating index.html..."
mv book.html index.html

git commit index.html -m "book generated and deployed at $(date +%m/%d/%Y-%T)"

git push origin gh-pages

git checkout master