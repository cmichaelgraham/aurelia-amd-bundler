echo "processing $1"

git clone git://github.com/aurelia/$1
cd $1
npm install
jspm install
gulp build