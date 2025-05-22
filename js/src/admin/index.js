import configureRichText from '../common/configureRichText';
import configureStrikeOut from '../common/configureStrikeOut';

app.initializers.add('piwind/flarum-checklist', () => {
  app.extensionData.for('piwind-checklist').registerSetting({
    setting: 'piwind-checklist.cross_out_completed_items',
    label: app.translator.trans('piwind-checklist.admin.settings.cross_out_completed_items'),
    type: 'boolean',
  });

  configureRichText();
  configureStrikeOut();
});
