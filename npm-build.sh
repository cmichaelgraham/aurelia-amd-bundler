rm -fR node_modules

./npm-build-lib.sh aurelia animator-velocity
./npm-build-lib.sh aurelia polyfills@1.0.0-beta.1.1.2
./npm-build-lib.sh aurelia templating-resources
./npm-build-lib.sh aurelia loader
./npm-build-lib.sh aurelia loader-default
./npm-build-lib.sh aurelia path
./npm-build-lib.sh aurelia task-queue
./npm-build-lib.sh aurelia logging
./npm-build-lib.sh aurelia logging-console
./npm-build-lib.sh aurelia history
./npm-build-lib.sh aurelia history-browser
./npm-build-lib.sh aurelia event-aggregator
./npm-build-lib.sh aurelia framework
./npm-build-lib.sh aurelia metadata@1.0.0-beta.1.2.0
./npm-build-lib.sh aurelia binding
./npm-build-lib.sh aurelia dialog
./npm-build-lib.sh aurelia dependency-injection
./npm-build-lib.sh aurelia router
./npm-build-lib.sh aurelia templating-binding
./npm-build-lib.sh aurelia templating-router
./npm-build-lib.sh aurelia route-recognizer
./npm-build-lib.sh aurelia http-client
./npm-build-lib.sh aurelia fetch-client
./npm-build-lib.sh aurelia bootstrapper
./npm-build-lib.sh aurelia templating
./npm-build-lib.sh aurelia validation
./npm-build-lib.sh aurelia animator-css
./npm-build-lib.sh aurelia pal
./npm-build-lib.sh aurelia pal-browser
./npm-build-lib.sh bluebird
./npm-build-lib.sh whatwg fetch
./npm-build-lib.sh velocity animate
./npm-build-lib-from-github.sh julianshapiro velocity
./npm-build-lib.sh bootstrap
./npm-build-lib-from-github.sh requirejs text
./npm-build-lib.sh font-awesome
bower install daepark/JSOL#latest --config.cwd=node_modules


# echo build aurelia-bundle-npm
node r.js -o name=aurelia-bundle-manifest baseUrl=. mainConfigFile=main-config-npm.js out=aurelia-bundle-npm.js optimize=none

# echo build aurelia-bundle-latest
# node r.js -o name=aurelia-bundle-manifest baseUrl=. mainConfigFile=main-config-latest.js exclude=core-js out=aurelia-bundle-latest.js optimize=none

# cp -f aurelia-bundle.js aurelia-bundle-latest.js aurelia-bundle.min.js scripts/aurelia
# cp -f aurelia-latest/*/dist/amd/*.d.ts typings/aurelia
