import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static properties = {
    title: { type: String },
    image: { type: String },
    paragraph: { type: String},
    linkText: { type: String },
    linkUrl: { type: String },
    backgroundColor: { type: String }
  };

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = 'https://psu-gatsby-files-prod.s3.amazonaws.com/s3fs-public/styles/16_9_1000w/public/2024/11/hax-2024.jpg?h=76593129&itok=Tiu2ETmI';
    this.paragraph = "A whole new way to design the web."
    this.linkText = "Details";
    this.linkUrl = "https://hax.psu.edu/";
    this.backgroundColor = '#42b6f5';
  }

  static get styles() {
    return css`
      :host {
        display: block;
        justify-content: center;
        align-items: center;
        margin: 0;
      }
      .card {
      width: 300px;
      border: 1px solid black;
      padding: 16px;
      text-align: center;
      background-color: var(--card-bg, #42b6f5);
    }
      .card img {
      width: 100%;
      height: auto;
    }
      .card a {
      display: none;
      color: white;
      background: blue;
      padding: 8px 12px;
      border-radius: 4px;
      text-decoration: none;
    }
      .card h3 {
      margin: 0 0 10px;
    }
      @media (max-width: 800px) and (min-width: 500px) {
      .card a {
        display: inline-block;
      }
    
    `;
  }

  render() {
    return html`
    <div class="card" style="background-color: ${this.backgroundColor}">
        <h3>${this.title}</h3>
        <img src="${this.image}" alt="${this.title}" />
        <h3>${this.paragraph}</h3>
        <a href="${this.linkUrl}">${this.linkText}</a>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
