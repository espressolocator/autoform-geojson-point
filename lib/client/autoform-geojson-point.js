AutoForm.addInputType("geojson-point", {
  template: "afInputHiddenGeoJsonPoint",
  isHidden: true,
  valueOut: function () {
    var value = this.val().split(',');
    var reverse = this.attr('data-reverse');
    if (typeof reverse !== 'undefined' && reverse) {
      // Reverse order of coordinates was used in the filed - Lat,Lng.
      // We need to revert it back to Lng,Lat.
      value = value.reverse();
    }
    return { type: "Point", coordinates: [ parseFloat(value[0]), parseFloat(value[1]) ] };
  },
  valueIn: function (val, atts) {
    // We expect val to be GeoJSON object, this is only the case
    // if we deal with an update form.
    if (typeof val === 'object' && val.coordinates.length) {
      var value = val.coordinates; // Default coordiates order - Lng,Lat.
      if (typeof atts.reverse !== 'undefined' && atts.reverse) {
        // Reverse order of coordinates is expected in the field - Lat,Lng.
        value = value.reverse();
      }
      return value.join(',');
    }
    return '0,0';
  },
  contextAdjust: function (context) {
    context['htmlAtts'] = _.omit(context.atts, 'reverse');
    if (typeof context.atts.reverse !== 'undefined' && context.atts.reverse) {
      context.htmlAtts['data-reverse'] = "true";
    }
    return context;
  }
});
