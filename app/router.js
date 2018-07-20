import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('contact_us');
  this.route('about_us');
  this.route('articles');
  this.route('article');

});

export default Router;
