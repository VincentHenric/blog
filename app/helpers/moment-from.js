import { helper as buildHelper} from '@ember/component/helper';
import {htmlSafe} from '@ember/template';
//import EmberHandlebars from '@ember/routing/router';

export function momentFrom(params) {
  var time = window.moment(...params);
  var formatted = time.fromNow();
  return htmlSafe(
  //EmberHandlebars.SafeString(
    '<span class="text-primary">'
    + formatted + '</span>'
  );
}

export default buildHelper(momentFrom);
