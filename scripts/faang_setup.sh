#!/bin/bash
echo "Creating Directories:"
cd ..
mkdir -p scripts dsas/drills/ dsas/problems/ projects/dashboard/ assessments/ notes/
echo "directories created"
uname -a
node -v
npm -v
git --version
echo "setup complete"