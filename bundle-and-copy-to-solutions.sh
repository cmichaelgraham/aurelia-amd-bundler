echo "removing aurelia-latest folder (if it exists)."
mkdir empty
robocopy ./empty ./aurelia-latest -MIR > /dev/null
rm -fR aurelia-latest
rm -fR empty

mkdir aurelia-latest

cd aurelia-latest

../clone-and-build.sh templating-resources
../clone-and-build.sh loader
../clone-and-build.sh loader-default
../clone-and-build.sh path
../clone-and-build.sh task-queue
../clone-and-build.sh logging
../clone-and-build.sh logging-console
../clone-and-build.sh history
../clone-and-build.sh history-browser
../clone-and-build.sh event-aggregator
../clone-and-build.sh framework
../clone-and-build.sh metadata
../clone-and-build.sh binding
../clone-and-build.sh templating
../clone-and-build.sh dependency-injection
../clone-and-build.sh router
../clone-and-build.sh templating-binding
../clone-and-build.sh templating-router
../clone-and-build.sh route-recognizer
../clone-and-build.sh http-client
../clone-and-build.sh bootstrapper
../clone-and-build.sh html-template-element

cd ..

echo build aurelia-bundle
node r.js -o name=aurelia-bundle-manifest baseUrl=. mainConfigFile=main-config.js out=aurelia-bundle.js optimize=none

echo build aurelia-bundle-latest
node r.js -o name=aurelia-bundle-manifest baseUrl=. mainConfigFile=main-config-latest.js out=aurelia-bundle-latest.js optimize=none

cp -f aurelia-bundle.js aurelia-bundle-latest.js aurelia-bundle.min.js ../scripts/aurelia
