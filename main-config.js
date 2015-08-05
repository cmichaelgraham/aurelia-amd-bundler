require.config({
  baseUrl : '',

  paths: {
    'aurelia-bootstrapper': 'bower_components/aurelia-bootstrapper/dist/amd/aurelia-bootstrapper',
    'aurelia-loader-default': 'bower_components/aurelia-loader-default/dist/amd/aurelia-loader-default',
    'aurelia-path': 'bower_components/aurelia-path/dist/amd/aurelia-path',
    'aurelia-task-queue': 'bower_components/aurelia-task-queue/dist/amd/aurelia-task-queue',
    'aurelia-logging': 'bower_components/aurelia-logging/dist/amd/aurelia-logging',
    'aurelia-logging-console': 'bower_components/aurelia-logging-console/dist/amd/aurelia-logging-console',
    'aurelia-history': 'bower_components/aurelia-history/dist/amd/aurelia-history',
    'aurelia-history-browser': 'bower_components/aurelia-history-browser/dist/amd/aurelia-history-browser',
    'aurelia-event-aggregator': 'bower_components/aurelia-event-aggregator/dist/amd/aurelia-event-aggregator',
    'aurelia-html-template-element': 'bower_components/aurelia-html-template-element/dist/HTMLTemplateElement'
  },

  packages : [
    {
      name: 'aurelia-loader',
      location: 'bower_components/aurelia-loader/dist/amd',
      main : 'aurelia-loader'
    },
   {
     name: 'aurelia-framework',
     location: 'bower_components/aurelia-framework/dist/amd',
     main : 'aurelia-framework'
   },
   {
     name: 'aurelia-metadata',
     location: 'bower_components/aurelia-metadata/dist/amd',
     main : 'aurelia-metadata'
   },
   {
     name: 'aurelia-binding',
     location: 'bower_components/aurelia-binding/dist/amd',
     main : 'aurelia-binding'
   },
   {
     name: 'aurelia-templating',
     location: 'bower_components/aurelia-templating/dist/amd',
     main : 'aurelia-templating'
   },
   {
     name: 'aurelia-dependency-injection',
     location: 'bower_components/aurelia-dependency-injection/dist/amd',
     main : 'aurelia-dependency-injection'
   },
   {
     name: 'aurelia-router',
     location: 'bower_components/aurelia-router/dist/amd',
     main : 'aurelia-router'
   },
   {
     name: 'aurelia-templating-binding',
     location: 'bower_components/aurelia-templating-binding/dist/amd',
     main : 'aurelia-templating-binding'
   },
   {
     name: 'aurelia-templating-resources',
     location: 'bower_components/aurelia-templating-resources/dist/amd',
     main : 'aurelia-templating-resources'
   },
   {
     name: 'aurelia-templating-router',
     location: 'bower_components/aurelia-templating-router/dist/amd',
     main : 'aurelia-templating-router'
   },
   {
     name: 'aurelia-route-recognizer',
     location: 'bower_components/aurelia-route-recognizer/dist/amd',
     main : 'aurelia-route-recognizer'
   },
   {
     name: 'aurelia-http-client',
     location: 'bower_components/aurelia-http-client/dist/amd',
     main : 'aurelia-http-client'
   },
   {
     name: 'aurelia-validation',
     location: 'bower_components/aurelia-validation/dist/amd',
     main : 'index'
   },
   { name: "core-js", location: "bower_components/core-js/client", main: "core" }  ]
});
