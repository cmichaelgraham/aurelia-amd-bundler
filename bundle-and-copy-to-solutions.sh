echo "removing aurelia-latest folder (if it exists)."
mkdir empty
robocopy ./empty ./aurelia-latest -MIR > /dev/null
rm -fR aurelia-latest
rm -fR empty

mkdir aurelia-latest

cd aurelia-latest

../clone-and-build.sh aurelia templating-resources
../clone-and-build.sh aurelia loader
../clone-and-build.sh aurelia loader-default
../clone-and-build.sh aurelia path
../clone-and-build.sh aurelia task-queue
../clone-and-build.sh aurelia logging
../clone-and-build.sh aurelia logging-console
../clone-and-build.sh aurelia history
../clone-and-build.sh aurelia history-browser
../clone-and-build.sh aurelia event-aggregator
../clone-and-build.sh aurelia framework
../clone-and-build.sh aurelia metadata
../clone-and-build.sh aurelia binding
../clone-and-build.sh aurelia dependency-injection
../clone-and-build.sh aurelia router
../clone-and-build.sh aurelia templating-binding
../clone-and-build.sh aurelia templating-router
../clone-and-build.sh aurelia route-recognizer
../clone-and-build.sh aurelia http-client
../clone-and-build.sh aurelia bootstrapper
../clone-and-build.sh aurelia html-template-element
../clone-and-build.sh cmichaelgraham templating

cd ..

echo build aurelia-bundle
node r.js -o name=aurelia-bundle-manifest baseUrl=. mainConfigFile=main-config.js out=aurelia-bundle.js optimize=none

echo build aurelia-bundle-latest
node r.js -o name=aurelia-bundle-manifest baseUrl=. mainConfigFile=main-config-latest.js out=aurelia-bundle-latest.js optimize=none

cp -f aurelia-bundle.js aurelia-bundle-latest.js aurelia-bundle.min.js ../scripts/aurelia
