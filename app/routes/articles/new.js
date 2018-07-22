import Route from '@ember/routing/route';
import { hash } from 'rsvp'
import {alias} from'@ember/object/computed';

export default Route.extend({
  model() {
    return hash({
      article: this.store.createRecord('article')
    })
  },
  article: alias('controller.model.article'),
  actions: {
    create() {
      var self = this;
      this.get('model.article').save().then(function(){
      self.transitionToRoute('articles');
      });
    },
    cancel() {
    },
    selectAuthor(value){
      this.get('article').set('author', value);
    }
  }
});
