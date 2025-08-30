import { extend } from 'flarum/common/extend';
import BasicsPage from 'flarum/admin/components/BasicsPage';

app.initializers.add('pynee/flarum-categories', () => {
  app.extensionData
    .for('pynee-categories')
    .registerSetting(() => <legend class="categories-legend">{app.translator.trans('pynee-categories.admin.headings.nav')}</legend>, 10)
    .registerSetting(
      {
        setting: 'pynee-categories.keep-tags-nav',
        label: app.translator.trans('pynee-categories.admin.labels.keep_tags_nav'),
        type: 'switch',
      },
      9
    )
    .registerSetting(() => <legend class="categories-legend">{app.translator.trans('pynee-categories.admin.headings.layout')}</legend>)
    .registerSetting({
      setting: 'pynee-categories.full-page-desktop',
      label: app.translator.trans('pynee-categories.admin.labels.full_page_desktop'),
      help: app.translator.trans('pynee-categories.admin.help.full_page_desktop'),
      type: 'switch',
    })
    .registerSetting({
      setting: 'pynee-categories.compact-mobile',
      label: app.translator.trans('pynee-categories.admin.labels.compact_mobile_mode'),
      type: 'switch',
    })
    .registerSetting(() => <legend class="categories-legend">{app.translator.trans('pynee-categories.admin.headings.parent_display')}</legend>)
    .registerSetting({
      setting: 'pynee-categories.parent-remove-icon',
      label: app.translator.trans('pynee-categories.admin.labels.parent_remove_icon'),
      type: 'switch',
    })
    .registerSetting({
      setting: 'pynee-categories.parent-remove-description',
      label: app.translator.trans('pynee-categories.admin.labels.parent_remove_description'),
      type: 'switch',
    })
    .registerSetting({
      setting: 'pynee-categories.parent-remove-stats',
      label: app.translator.trans('pynee-categories.admin.labels.parent_remove_stats'),
      type: 'switch',
    })
    .registerSetting({
      setting: 'pynee-categories.parent-remove-last-discussion',
      label: app.translator.trans('pynee-categories.admin.labels.parent_remove_last_discussion'),
      type: 'switch',
    })
    .registerSetting(() => <legend class="categories-legend">{app.translator.trans('pynee-categories.admin.headings.child_display')}</legend>)
    .registerSetting({
      setting: 'pynee-categories.child-bare-icon',
      label: app.translator.trans('pynee-categories.admin.labels.child_bare_icon'),
      help: app.translator.trans('pynee-categories.admin.help.child_bare_icon'),
      type: 'switch',
    })
    .registerSetting(() => <legend class="categories-legend">{app.translator.trans('pynee-categories.admin.headings.performance')}</legend>)
    .registerSetting({
      setting: 'pynee-categories.small-forum-optimized',
      label: app.translator.trans('pynee-categories.admin.labels.small_forum_optimized'),
      help: app.translator.trans('pynee-categories.admin.help.small_forum_optimized'),
      type: 'switch',
    });

  extend(BasicsPage.prototype, 'homePageItems', (items) => {
    items.add('categories', {
      path: '/categories',
      label: app.translator.trans('pynee-categories.admin.basics.categories_label'),
    });
  });
});
