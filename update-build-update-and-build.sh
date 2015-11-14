echo "processing $1 / $2"

cd $2
git reset --hard origin/master
npm install
# jspm install
gulp build
