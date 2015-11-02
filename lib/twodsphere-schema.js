// Define SimpleSchema object to store GeoJSON 2dsphere objects.
var twodsphereSchemaObject = {
  type: {
    type: String
  },
  coordinates: {
    type: [Number],
    decimal: true
  }
};

twodsphereSchema = new SimpleSchema(twodsphereSchemaObject);
