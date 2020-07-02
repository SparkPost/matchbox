#!/bin/bash

now=$(date +'%Y-%m-%d')
year=$(date +'%Y')

rm -f .changelog.md

echo "---" > .changelog.md
echo "title: Matchbox ENTER VERSION" >> .changelog.md
echo "date: ${now}" >> .changelog.md
echo "published: false" >> .changelog.md
echo "category: release notes" >> .changelog.md
echo "---" >> .changelog.md
mkdir -p "site/src/updates/$year"
cat .temp_changes.md >> .changelog.md
sed -i -e 's/## /#### /g' .changelog.md

mv .changelog.md "site/src/updates/$year/$now-release.mdx"
rm -f .temp_changes.md
rm -f .changelog.md
rm -f .changelog.md-e
 
printf "\nChangelog generated\n → site/src/updates/$year/$now-release.mdx"