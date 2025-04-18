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
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "top-bar";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/top-bar.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        background-color: purple;
        min-height: 100px;
        width: 100%;
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
      .top-bar-buttons a {
        color: var(--ddd-theme-primary);
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
        padding: 10px;
        border-radius: 5px;
        
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      <div class="top-bar-buttons">
        <a href="#1">About</a>
        <a href="#2">Research</a>
        <a href="#3">Presentations and Publications</a>
        <a href="#4">Professional Development</a>
      </div>
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);