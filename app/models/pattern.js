import DS from 'ember-data';

var Pattern = DS.Model.extend({
  name: DS.attr('string'),
  prettyName: DS.attr('string'),
  description: DS.attr('string'),
  frames: DS.hasMany('frame'),
  controlOptions: DS.hasMany('control-option'),
  active: DS.attr('boolean', { defaultValue: false }),

  // TODO: this color value should come from the server
  color: 'comingle-blue',

  colorHex: function () {
    return this.get('colorHexMap')[this.get('color')];
  }.property('color'),

  colorHexMap: {
    "comingle-blue" : "#09c3f2"
  }
});

export default Pattern;
