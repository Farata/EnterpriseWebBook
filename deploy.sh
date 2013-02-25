#!/bin/bash
#
# Deploys the current enterprisewebbook.com website to the gh-pages branch of the GitHub
# repository.

echo "Building EnterpriseWebBook..."
sh build.sh

set -ex

DIR=temp-enterprisewebbook-site

# Delete any existing temporary website clone
rm -rf $DIR

# Clone the current repo into temp folder
git clone -b gh-pages https://github.com/Farata/EnterpriseWebBook.git $DIR
#git clone git@github.com:gAmUssA/EnterpriseWebBook.git $DIR

# Move working directory into temp folder
cd $DIR

# Checkout and track the gh-pages branch
# echo "switching to gh-pages branch..."
# git checkout -t origin/gh-pages

# Delete everything
rm -rf *

echo "enterprisewebbook.com" > CNAME

# Copy website files from real repo
cp -R ../out/index.html .

#Copy images
cp -R ../images .
cp -R `brew --prefix asciidoc`/etc/asciidoc/images/icons images/

# Stage all files in git and create a commit
git add .
git add -u
git commit -m "book generated and deployed at $(date +%m/%d/%Y-%T)"

# Push the new files up to GitHub
git push origin gh-pages

# Delete our temp folder
cd ..
rm -rf $DIR
