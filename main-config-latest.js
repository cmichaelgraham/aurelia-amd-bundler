require.config({
  baseUrl : '',

  paths: {
    'aurelia-bootstrapper': 'aurelia-latest/bootstrapper/dist/amd/aurelia-bootstrapper',
    'aurelia-loader-default': 'aurelia-latest/loader-default/dist/amd/aurelia-loader-default',
    'aurelia-path': 'aurelia-latest/path/dist/amd/aurelia-path',
    'aurelia-task-queue': 'aurelia-latest/task-queue/dist/amd/aurelia-task-queue',
    'aurelia-logging': 'aurelia-latest/logging/dist/amd/aurelia-logging',
    'aurelia-logging-console': 'aurelia-latest/logging-console/dist/amd/aurelia-logging-console',
    'aurelia-history': 'aurelia-latest/history/dist/amd/aurelia-history',
    'aurelia-history-browser': 'aurelia-latest/history-browser/dist/amd/aurelia-history-browser',
    'aurelia-event-aggregator': 'aurelia-latest/event-aggregator/dist/amd/aurelia-event-aggregator',
    'aurelia-html-template-element': 'aurelia-latest/html-template-element/dist/HTMLTemplateElement'
  },

  packages : [
    {
      name: 'aurelia-loader',
      location: 'aurelia-latest/loader/dist/amd',
      main : 'aurelia-loader'
    },
   {
     name: 'aurelia-framework',
     location: 'aurelia-latest/framework/dist/amd',
     main : 'aurelia-framework'
   },
   {
     name: 'aurelia-metadata',
     location: 'aurelia-latest/metadata/dist/amd',
     main : 'aurelia-metadata'
   },
   {
     name: 'aurelia-binding',
     location: 'aurelia-latest/binding/dist/amd',
     main : 'aurelia-binding'
   },
   {
     name: 'aurelia-templating',
     location: 'aurelia-latest/templating/dist/amd',
     main : 'aurelia-templating'
   },
   {
     name: 'aurelia-dependency-injection',
     location: 'aurelia-latest/dependency-injection/dist/amd',
     main : 'aurelia-dependency-injection'
   },
   {
     name: 'aurelia-router',
     location: 'aurelia-latest/router/dist/amd',
     main : 'aurelia-router'
   },
   {
     name: 'aurelia-templating-binding',
     location: 'aurelia-latest/templating-binding/dist/amd',
     main : 'aurelia-templating-binding'
   },
   {
     name: 'aurelia-templating-resources',
     location: 'aurelia-latest/templating-resources/dist/amd',
     main : 'aurelia-templating-resources'
   },
   {
     name: 'aurelia-templating-router',
     location: 'aurelia-latest/templating-router/dist/amd',
     main : 'aurelia-templating-router'
   },
   {
     name: 'aurelia-route-recognizer',
     location: 'aurelia-latest/route-recognizer/dist/amd',
     main : 'aurelia-route-recognizer'
   },
   {
     name: 'aurelia-http-client',
     location: 'aurelia-latest/http-client/dist/amd',
     main : 'aurelia-http-client'
   },
   {
     name: 'aurelia-validation',
     location: 'aurelia-latest/validation/dist/amd',
     main : 'index'
   },
   { name: "core-js", location: "bower_components/core-js/client", main: "core" }  ]
});
