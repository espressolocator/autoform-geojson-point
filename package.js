Package.describe({
  name: 'espressolocator:autoform-geojson-point',
  version: '0.0.1',
  summary: 'Store GeoJSON Point coodinates with autoForm.',
  git: 'https://github.com/espressolocator/autoform-geojson-point',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  var packages = [
    'aldeed:autoform@5.8.0',
    'espressolocator:simple-schema-geojson'
  ];
  api.use(packages);
  api.use(['templating'], 'client');

  api.imply(packages);

  api.addFiles([
    'lib/client/autoform-geojson-point.js',
    'lib/client/autoform-geojson-point.html',
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('espressolocator:autoform-geojson-point');
  api.addFiles('autoform-geojson-point-tests.js');
});
