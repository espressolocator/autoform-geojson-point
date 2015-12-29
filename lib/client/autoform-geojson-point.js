AutoForm.addInputType("geojson-point", {
  template: "afInputHiddenGeoJsonPoint",
  isHidden: true,
  valueOut: function () {
    var lat = this.find("input[data-geo='lat']").val();
    var lng = this.find("input[data-geo='lng']").val();
    // We need Lng,Lat as per MongoDB spec.
    return { type: "Point", coordinates: [ parseFloat(lng), parseFloat(lat) ] };
  },
  valueIn: function (val, atts) {
    // We expect val to be GeoJSON object, this is only the case
    // if we deal with an update form.
    if (typeof val === 'object' && val.coordinates.length) {
      return {'lat': val.coordinates[1], 'lng': val.coordinates[0]};
    }
    return {'lat': 0, 'lng': 0};
  }
});
