import { extend } from 'flarum/extend';
import Application from 'flarum/common/Application';

export default function () {
  function applyChecklistClass() {
    if (app.forum.attribute('piwind-checklist.cross_out_completed_items')) {
      $('.App').addClass('checklist-cross-completed');
    } else {
      $('.App').removeClass('checklist-cross-completed');
    }
  }

  extend(Application.prototype, 'mount', applyChecklistClass);
  extend(Application.prototype, 'routeDidUpdate', applyChecklistClass);
}
