set -e

# build
npm run src:build

cd src/.vuepress/dist

git add -A
git commit -m 'deploy'

git push -f git@github.com:vperepos/vperepos.github.io.git main

cd -