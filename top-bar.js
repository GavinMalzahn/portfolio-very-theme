/**
 * Copyright 2025 GavinMalzahn
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import '@haxtheweb/scroll-button/scroll-button.js';


/**
 * `top-bar`
 * 
 * @demo index.html
 * @element top-bar
 */
export class TopBar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "top-bar";
  }

  constructor() {
    super();
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        background-color: var(--ddd-theme-default-beaver80);
        max-height: 100px;
        width: calc(100vw - 24px);
        top: 100px;
        position: fixed;
        align-items: center;
        display: flex;
        justify-content: center;
      }
      .top-bar-buttons {
        display: flex;
        gap: var(--ddd-spacing-2);
        justify-content: center;
        align-items: center;
        margin: 10px;
      }
      
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      <div class="top-bar-buttons">
        <slot>
        </slot>
      </div>
    </div>`;
  }  
  
}

globalThis.customElements.define(TopBar.tag, TopBar);