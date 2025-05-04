import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `portfolio-page`
 * 
 * @demo index.html
 * @element portfolio-page
 */
export class PortfolioPage extends DDDSuper(LitElement) {

  static get tag() {
    return "portfolio-page";
  }
  
  constructor() {
    super();
    this.title="";
    this.pageNumber=null;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      pageNumber: { type: Number }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
        :host {
            display: block;
            background-color: blue;
            font-family: var(--ddd-font-navigation);
            width: calc(100vw - 24px);
            height: calc(100vh);

        }
        
        h1{
            padding: var(--ddd-spacing-8);
            text-align: right;
            font-family: var(--ddd-font-navigation);
            background-color: var(--dd-theme-default-beaverBlue);

        }
        .wrapper {
            padding: var(--ddd-spacing-4);
        }

    `];
  }


  render() {
    return html`
        <h1>${this.title}</h1>
        <div class="wrapper">
            <slot></slot>
        </div>
        `;
}

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }

    this.dispatchEvent(new CustomEvent('page-added', {
      bubbles: true,
      composed: true,
      detail: {
        value: this
      }
    }))
  }
}

globalThis.customElements.define(PortfolioPage.tag, PortfolioPage);