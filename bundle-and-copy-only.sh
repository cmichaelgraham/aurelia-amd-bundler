echo build aurelia-bundle
node r.js -o name=aurelia-bundle-manifest baseUrl=. mainConfigFile=main-config.js out=aurelia-bundle.js optimize=none

echo build aurelia-bundle-latest
node r.js -o name=aurelia-bundle-manifest baseUrl=. mainConfigFile=main-config-latest.js out=aurelia-bundle-latest.js optimize=none

cp -f aurelia-bundle.js aurelia-bundle-latest.js aurelia-bundle.min.js scripts/aurelia
cp -f aurelia-latest/*/dist/amd/*.d.ts typings/aurelia