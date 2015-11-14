cd aurelia-latest

../update-build-update-and-build.sh gooy aurelia-animator-velocity
../update-build-update-and-build.sh aurelia templating-resources
../update-build-update-and-build.sh aurelia loader
../update-build-update-and-build.sh aurelia loader-default
../update-build-update-and-build.sh aurelia path
../update-build-update-and-build.sh aurelia task-queue
../update-build-update-and-build.sh aurelia logging
../update-build-update-and-build.sh aurelia logging-console
../update-build-update-and-build.sh aurelia history
../update-build-update-and-build.sh aurelia history-browser
../update-build-update-and-build.sh aurelia event-aggregator
../update-build-update-and-build.sh aurelia framework
../update-build-update-and-build.sh aurelia metadata
../update-build-update-and-build.sh aurelia binding
../update-build-update-and-build.sh aurelia dialog
../update-build-update-and-build.sh aurelia dependency-injection
../update-build-update-and-build.sh aurelia router
../update-build-update-and-build.sh aurelia templating-binding
../update-build-update-and-build.sh aurelia templating-router
../update-build-update-and-build.sh aurelia route-recognizer
../update-build-update-and-build.sh aurelia http-client
../update-build-update-and-build.sh aurelia fetch-client
../update-build-update-and-build.sh aurelia bootstrapper
../update-build-update-and-build.sh aurelia html-template-element
../update-build-update-and-build.sh aurelia templating
../update-build-update-and-build.sh aurelia validation
../update-build-update-and-build.sh aurelia animator-css
../update-build-update-and-build.sh aurelia pal
../update-build-update-and-build.sh aurelia pal-browser

cd ..

echo build aurelia-bundle
node r.js -o name=aurelia-bundle-manifest baseUrl=. mainConfigFile=main-config.js out=aurelia-bundle.js optimize=none

echo build aurelia-bundle-latest
node r.js -o name=aurelia-bundle-manifest baseUrl=. mainConfigFile=main-config-latest.js out=aurelia-bundle-latest.js optimize=none

cp -f aurelia-bundle.js aurelia-bundle-latest.js aurelia-bundle.min.js scripts/aurelia
cp -f aurelia-latest/*/dist/amd/*.d.ts typings/aurelia
