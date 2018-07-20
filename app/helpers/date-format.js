import { helper as buildHelper} from '@ember/component/helper';
//import {htmlSafe} from '@ember/template';
//import {moment} from '@ember/moment';
//import EmberHandlebars from '@ember/routing/router';

export function formatDate(params) {
  var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  var time = new Date(params);
  var formatted = time.toLocaleDateString("en-US", options);
  return formatted;
}

export default buildHelper(formatDate);
