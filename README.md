# autoform-geojson-point

The package provides afHiddenInput type field for translating string values
of Lat and Lng into GeoJSON Point object on submission.

## Defining the schema

It makes sense using SimpleShema sub-schema for defining GeoJSON Point type.

```
// Define SimpleSchema sub-schema to store GeoJSON objects.
var geoJsonSchemaObject = {
  type: {
    type: String
  },
  coordinates: {
    type: [Number],
    decimal: true
  }
};

geoJsonSchema = new SimpleSchema(geoJsonSchemaObject);
```

Effectively above is provided by [simple-schema-geojson](https://github.com/espressolocator/simple-schema-geojson) package.

## Using the schema

It now can be used in your schema as follows:
```
mapCoordinates: {
  type: geoJsonSchema,
  index: "2dsphere",
  optional: true,
  autoform: {
    type: 'geojson-point',
    template: 'afInputHiddenGeoJsonPoint',
  }
}
```
