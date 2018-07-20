import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  createdAt: DS.attr('date', {defaultValue: new Date()}),
  author: DS.attr('string', {defaultValue: 'Vincent & Fangyan'}),
  text: DS.attr('string')
});
