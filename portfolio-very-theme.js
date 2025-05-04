/**
 * Copyright 2025 GavinMalzahn
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import '@haxtheweb/scroll-button/scroll-button.js';


/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-theme";
  }

  constructor() {
    super();
    this.pages = [];
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      pages: { type: Array },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        font-family: var(--ddd-font-navigation);
        height: 100vh;
        background-color: var(--ddd-theme-default-beaverBlue);
      }

      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      }
      
      scroll-button {
        position: fixed;
        bottom: var(--ddd-spacing-5);
        right: var(--ddd-spacing-5);  
      }

      a {
        color: white;
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
        padding: 10px;
        border-radius: 5px;
      }

      li {
        list-style: none;
        display: inline-block;
      }
      
      .wrapper {
        background-color: blue;
        width: calc(100vw - 24px);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <top-bar>
      ${this.pages.map((page, index) => html`<li><a href="#${page.number}" @click="${this.linkChange}" data-index="${index}">${page.title}</a></li>`)}
    </top-bar>
    <div class="wrapper" @page-added="${this.addPage}">
      <slot></slot>
    </div>
    <scroll-button></scroll-button>
    `;
  }

  linkChange(e) {
    let number = parseInt(e.target.getAttribute('data-index'));
    if(number >= 0) {
      this.pages[number].element.scrollIntoView();
    }
  }

  
  addPage(e) {
    const element = e.detail.value
    const page = {
      number: element.pageNumber,
      title: element.title,
      element: element, 
    }
    this.pages = [...this.pages, page];

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