echo "removing aurelia-latest folder (if it exists)."
mkdir empty
robocopy ./empty ./aurelia-latest -MIR > /dev/null
rm -fR aurelia-latest
rm -fR empty

mkdir aurelia-latest

cd aurelia-latest

../fresh-build-clone-and-build.sh gooy aurelia-animator-velocity
../fresh-build-clone-and-build.sh aurelia polyfills
../fresh-build-clone-and-build.sh aurelia templating-resources
../fresh-build-clone-and-build.sh aurelia loader
../fresh-build-clone-and-build.sh aurelia loader-default
../fresh-build-clone-and-build.sh aurelia path
../fresh-build-clone-and-build.sh aurelia task-queue
../fresh-build-clone-and-build.sh aurelia logging
../fresh-build-clone-and-build.sh aurelia logging-console
../fresh-build-clone-and-build.sh aurelia history
../fresh-build-clone-and-build.sh aurelia history-browser
../fresh-build-clone-and-build.sh aurelia event-aggregator
../fresh-build-clone-and-build.sh aurelia framework
../fresh-build-clone-and-build.sh aurelia metadata
../fresh-build-clone-and-build.sh aurelia binding
../fresh-build-clone-and-build.sh aurelia dialog
../fresh-build-clone-and-build.sh aurelia dependency-injection
../fresh-build-clone-and-build.sh aurelia router
../fresh-build-clone-and-build.sh aurelia templating-binding
../fresh-build-clone-and-build.sh aurelia templating-router
../fresh-build-clone-and-build.sh aurelia route-recognizer
../fresh-build-clone-and-build.sh aurelia http-client
../fresh-build-clone-and-build.sh aurelia fetch-client
../fresh-build-clone-and-build.sh aurelia bootstrapper
../fresh-build-clone-and-build.sh aurelia html-template-element
../fresh-build-clone-and-build.sh aurelia templating
../fresh-build-clone-and-build.sh aurelia validation
../fresh-build-clone-and-build.sh aurelia animator-css
../fresh-build-clone-and-build.sh aurelia pal
../fresh-build-clone-and-build.sh aurelia pal-browser

cd ..

echo build aurelia-bundle
node r.js -o name=aurelia-bundle-manifest baseUrl=. mainConfigFile=main-config.js exclude=core-js out=aurelia-bundle.js optimize=none

echo build aurelia-bundle-latest
node r.js -o name=aurelia-bundle-manifest baseUrl=. mainConfigFile=main-config-latest.js exclude=core-js out=aurelia-bundle-latest.js optimize=none

cp -f aurelia-bundle.js aurelia-bundle-latest.js aurelia-bundle.min.js scripts/aurelia
cp -f aurelia-latest/*/dist/amd/*.d.ts typings/aurelia
