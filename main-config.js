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
    'aurelia-html-template-element': 'bower_components/aurelia-html-template-element/dist/HTMLTemplateElement',
    'aurelia-loader': 'bower_components/aurelia-loader/dist/amd/aurelia-loader',
    'aurelia-framework': 'bower_components/aurelia-framework/dist/amd/aurelia-framework',
    'aurelia-metadata': 'bower_components/aurelia-metadata/dist/amd/aurelia-metadata',
    'aurelia-binding': 'bower_components/aurelia-binding/dist/amd/aurelia-binding',
    'aurelia-templating': 'bower_components/aurelia-templating/dist/amd/aurelia-templating',
    'aurelia-dependency-injection': 'bower_components/aurelia-dependency-injection/dist/amd/aurelia-dependency-injection',
    'aurelia-router': 'bower_components/aurelia-router/dist/amd/aurelia-router',
    'aurelia-templating-binding': 'bower_components/aurelia-templating-binding/dist/amd/aurelia-templating-binding',
    'aurelia-route-recognizer': 'bower_components/aurelia-route-recognizer/dist/amd/aurelia-route-recognizer',
    'aurelia-http-client': 'bower_components/aurelia-http-client/dist/amd/aurelia-http-client',
    'aurelia-fetch-client': 'bower_components/aurelia-fetch-client/dist/amd/aurelia-fetch-client',
    'aurelia-validation': 'bower_components/aurelia-validation/dist/amd/aurelia-validation',
    'aurelia-animator-css': 'bower_components/aurelia-animator-css/dist/amd/aurelia-animator-css',
    'fetch': 'bower_components/fetch/fetch',
    'jsol': 'bower_components/jsol/jsol',
    'text': 'bower_components/text/text'
  },

  packages: [
    {
      name: 'aurelia-templating-router',
      location: 'bower_components/aurelia-templating-router/dist/amd',
      main : 'aurelia-templating-router'
    },
    {
      name: 'aurelia-templating-resources',
      location: 'bower_components/aurelia-templating-resources/dist/amd',
      main : 'aurelia-templating-resources'
    },
    {
      name: 'aurelia-validation',
      location: 'bower_components/aurelia-validation/dist/amd',
      main: 'index'
    },
    {
      name: 'velocity',
      location: 'bower_components/velocity',
      main: 'velocity.min'
    },
   {
     name: 'gooy-aurelia-animator-velocity',
     location: 'aurelia-latest/aurelia-animator-velocity/dist/amd',
     main : 'index'
   },
    { name: "core-js", location: "bower_components/core-js/client", main: "core" }  ]
});
