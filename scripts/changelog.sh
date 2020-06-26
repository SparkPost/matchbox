#!/bin/bash

now=$(date +'%Y-%m-%d')
year=$(date +'%Y')

rm .changelog.md || true

echo "---" > .changelog.md
echo "title: ENTER TITLE" >> .changelog.md
echo "date: ${now}" >> .changelog.md
echo "published: true" >> .changelog.md
echo "category: release notes" >> .changelog.md
echo "---" >> .changelog.md
mkdir "packages/matchbox-site/src/updates/$year" || true
cat .temp_changes.md >> .changelog.md

mv .changelog.md "packages/matchbox-site/src/updates/$year/$now-release.mdx"
rm .temp_changes.md
 
printf "\nChangelog generated\n → packages/matchbox-site/src/updates/$year/$now-release.mdx"