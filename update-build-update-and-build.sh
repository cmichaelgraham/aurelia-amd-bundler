echo "processing $1 / $2"

cd $2
git reset --hard origin/master
git pull
npm install
gulp build
