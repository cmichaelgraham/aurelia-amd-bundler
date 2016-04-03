echo "====================="
echo "processing $1 / $2"

if [ "$2" == "" ] 
then npm install $1 --ignore-scripts
else npm install $1-$2 --ignore-scripts
fi

echo "..............."