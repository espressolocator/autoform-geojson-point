AutoForm.addInputType("geojson-point", {
  template: "afInputHiddenGeoJsonPoint",
  isHidden: true,
  valueOut: function () {
    var latlng = this.val().split(',');
    return { type: "Point", coordinates: [ parseFloat(latlng[1]), parseFloat(latlng[0]) ] };
  },
  valueIn: function (val) {
    if (typeof val === 'object') {
      var latlng = val.coordinates.reverse();
      return latlng.join(',');
    }
    return '';
  }
/*  contextAdjust: function (context) {
    console.log(context);
  }*/
});
