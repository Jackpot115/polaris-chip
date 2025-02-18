import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = 'https://psu-gatsby-files-prod.s3.amazonaws.com/s3fs-public/styles/16_9_1000w/public/2024/11/hax-2024.jpg?h=76593129&itok=Tiu2ETmI';
    this.linkText = "Details";
    this.linkUrl = "https://hax.psu.edu/";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }

      :host([fancy]) .card {
        background-color: green;
        color: white;
      }

      .card {
      width: 300px;
      border: 2px solid black;
      padding: 16px;
      text-align: center;
      background-color: var(--card-bg, #42b6f5);
    }
      .card img {
      width: 250px;
      height: 200px;
    }
      .card a {
      display: none;
      color: white;
      background: blue;
      padding: 8px 12px;
      border-radius: 4px;
    }
      
      @media (max-width: 800px) and (min-width: 500px) {
      .card a {
        display: inline-block;
      }
    }
    
    `;
  }

  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div 
      class="card" 
      style="background-color: ${this.backgroundColor}">
        <h2>${this.title}</h2>
        <meme-maker image-url=${this.image} top-text="Who" bottom-text="Who asked?"> </meme-maker>
        <!-- put this in your render method where you had details -->
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot></slot>
          <a href="${this.linkUrl}">${this.linkText}</a>
        </div>
        </details>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      linkText: { type: String },
      linkUrl: { type: String },
      fancy: { type: Boolean, reflect: true}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);