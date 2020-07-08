#!/bin/bash

echo "" >> .temp_changes.md
cat CHANGELOG.md >> .temp_changes.md
mv .temp_changes.md CHANGELOG.md
rm -f .temp_changes.md
