echo "processing $1 / $2"

git clone git://github.com/$1/$2
cd $2
npm install
# jspm install
gulp build