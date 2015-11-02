Package.describe({
  name: 'kabalin:autoform-geojson-point',
  version: '0.0.1',
  summary: 'Store GeoJSON Point coodinates.',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  var packages = [
    'aldeed:autoform',
    'aldeed:simple-schema',
  ];
  api.use(packages);
  api.use(['templating'], 'client');

  api.imply(packages);

  api.addFiles([
    'lib/client/autoform-geojson-point.js',
    'lib/client/autoform-geojson-point.html',
  ], 'client');
  api.addFiles(['lib/twodsphere-schema.js'], ['client', 'server']);

  api.export(['twodsphereSchema']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('kabalin:autoform-geojson-point');
  api.addFiles('autoform-geojson-point-tests.js');
});
