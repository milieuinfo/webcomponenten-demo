/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-doc-hide-bar.js
 */

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

interface IronDocHideBarElement extends LegacyElementMixin, HTMLElement {
  visible: boolean|null|undefined;
  _toggle(ev: any): void;
}

export {IronDocHideBarElement};

declare global {

  interface HTMLElementTagNameMap {
    "iron-doc-hide-bar": IronDocHideBarElement;
  }
}
