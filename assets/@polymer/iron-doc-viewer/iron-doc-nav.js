/// BareSpecifier=@polymer/iron-doc-viewer/iron-doc-nav
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '../polymer/polymer-legacy.js';
import './iron-doc-viewer-styles.js';

import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';
import { dom, flush } from '../polymer/lib/legacy/polymer.dom.js';
import { html } from '../polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style include="iron-doc-viewer-styles">
      :host {
        display: block;
      }

      section {
        @apply --iron-doc-font-body;
        border-bottom: 1px solid #e0e0e0;
      }

      h3 {
        @apply --paper-font-subhead;
        color: #717171;
        padding: 0 24px;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      li {
        line-height: 30px;
      }

      a {
        color: #333;
        padding: 0 24px;
        display: block;
        text-decoration: none;
      }

      a:hover {
        color: var(--iron-doc-accent-color-internal) !important;
      }

      a[selected] {
        color: var(--iron-doc-accent-color-internal);
      }

      .tray {
        transition: height 180ms linear, opacity 180ms linear;
        box-sizing: border-box;
        overflow: hidden;
      }

      .tray:not([expanded]) {
        height: 0 !important;
        opacity: 0;
        visibility: hidden; /** Prevent keyboard etc. focus. */
      }

      .tray[expanded] {
        opacity: 1;
        visibility: visible;
      }

      .tray ul {
        padding: 10px 0;
        margin: 10px 0;
        white-space: nowrap;
        background-color: #eee;
        border-top: 1px solid #dedede;
        border-bottom: 1px solid white;
      }

      .tray a {
        padding-left: 35px;
        color: #333;
      }
    </style>

    <template is="dom-repeat" items="[[_sections]]" as="section">
      <section hidden\$="[[!section.items.length]]">
        <h3>[[section.heading]]</h3>
        <ul>
          <template is="dom-repeat" items="[[section.items]]">
            <li>
              <a href="[[baseHref]][[item.path]]" title\$="[[item.name]]" on-tap="_select" selected\$="[[_isSelected(item.path, path)]]">
                [[item.name]]
              </a>

              <div class="tray" expanded\$="[[_isExpanded(item, path)]]">
                <ul>
                  <template is="dom-repeat" items="[[item.demos]]" as="demo">
                    <li>
                      <a href="[[baseHref]][[demo.path]]" title\$="[[demo.description]]" on-tap="_select" selected\$="[[_isSelected(demo.path, path)]]">
                        [[demo.description]]
                      </a>
                    </li>
                  </template>
                </ul>
              </div>
            </li>
          </template>
        </ul>
      </section>
    </template>
`,

  is: 'iron-doc-nav',

  properties: {
    descriptor: { type: Object, observer: '_descriptorChanged' },

    path: String,

    baseHref: { type: String, value: '#' },

    _sections: Array
  },

  _descriptorChanged(descriptor) {
    descriptor = descriptor || {};
    this._sections = [_section('Namespaces', '/namespaces/', descriptor.namespaces), _section('Elements', '/elements/', descriptor.elements), _section('Behaviors', '/behaviors/', ((descriptor.metadata || {}).polymer || {}).behaviors), _section('Mixins', '/mixins/', descriptor.mixins), _section('Classes', '/classes/', descriptor.classes)];

    // Store the height of each expanding tray for transitions.
    flush();
    var trays = dom(this.root).querySelectorAll('.tray');
    for (var i = 0; i < trays.length; i++) {
      var tray = trays[i];
      var expanded = tray.hasAttribute('expanded');
      if (!expanded) {
        tray.setAttribute('expanded', '');
      }
      tray.style.height = 'auto';
      tray.style.height = tray.offsetHeight + 'px';
      if (!expanded) {
        tray.removeAttribute('expanded', '');
      }
    }
  },

  _select(event) {
    this.fire('select');
  },

  _isSelected(a, b) {
    return a === b;
  },

  _isExpanded(item, path) {
    return !!(item && path && item.path && item.demos && item.demos.length > 0 && (path === item.path || path.indexOf(item.path + '/') === 0));
  }
});

function _section(heading, pathPrefix, descriptorItems) {
  var sectionItems = [];
  for (var i = 0; i < (descriptorItems || []).length; i++) {
    var item = descriptorItems[i];
    var name = item.tagname ? '<' + item.tagname + '>' : item.name;
    if (!name) {
      continue;
    }
    var path = pathPrefix + (item.tagname || item.name);

    var demos = [];
    for (var d = 0; d < (item.demos || []).length; d++) {
      var demo = item.demos[d];
      if (!demo.url) {
        continue;
      }
      var demoPath = demo.description ? demo.description.toLowerCase().replace(/\s+/g, '-') : demo.url;
      demos.push({
        path: path + '/demos/' + demoPath,
        description: demo.description || 'Demo'
      });
    }

    sectionItems.push({ name: name, path: path, demos: demos });
  }

  sectionItems.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  return { heading: heading, items: sectionItems };
}