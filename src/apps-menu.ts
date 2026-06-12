import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import atxLogo from './assets/atx-logo.png';
import smsLogo from './assets/sms-small.svg';
import linkShortenerLogo from './assets/link-small.svg';
import frankeyLogo from './assets/frankey-small.svg';
import bucketLogo from './assets/bucket-small.svg';
import moneyManLogo from './assets/money-man.svg';
import homeLogo from './assets/house.svg';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('atx-apps-menu')
export class AtxAppsMenu extends LitElement {

  _configuration = {
    apps: [
      {
        name: 'SMS',
        icon: smsLogo,
        url: 'https://atlantix-apps.vercel.app/sms',
        width: 40,
      },
      {
        name: 'Link Shortener',
        icon: linkShortenerLogo,
        url: 'https://atlantix-apps.vercel.app/link-shortner',
        width: 30,
      },
      {
        name: 'Frankeynalytics',
        icon: frankeyLogo,
        url: 'https://atlantix-apps.vercel.app/frankey',
        width: 40,
      },
      {
        name: 'Bucket App',
        icon: bucketLogo,
        url: 'https://atlantix-apps.vercel.app/bucket',
        width: 40,
      },
      {
        name: 'Money Man',
        icon: moneyManLogo,
        url: 'https://atlantix-apps.vercel.app/money-man',
        width: 40,
      },
      {
        name: 'Home',
        icon: homeLogo,
        url: 'https://atlantix-apps.vercel.app',
        width: 40,
      }
    ]
  }

  render() {
    const { apps } = this._configuration;
    return html`
    <div class="wrapper">
      <input type="checkbox" />
      <div class="fab">
        <img src=${atxLogo} alt="ATX Logo" width="50" height="50" />
      </div>
      <div class="fac">
        ${apps.map(app => html`<a title=${app.name} href=${app.url}>
          <img src=${app.icon} alt=${app.name} width=${app.width} height=${app.width} />
        </a>`)}
      </div>
    </div>
    `;
  }
  
  static styles = css`

.wrapper {
  width: var(--width);
  height: var(--height);
  position: relative;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  
  .fab {
    background: var(--background);
    width: var(--width);
    height: var(--height);
    position: relative;
    z-index: 3;
    border-radius: var(--border-radius);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fab-animation-reverse 0.4s ease-out forwards;
    
    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      border-radius: 4px;
      background: transparent;
    }
    
    &::before {
      width: 4px;
      height: 18px;
    }
    
    &::after {
      width: 18px;
      height: 4px;
    }
  }
  
  .fac {
    height: 285px;
    border-radius: 64px;
    position: absolute;
    background: #fff;
    z-index: 2;
    padding: 0.5rem 0.8rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    top: -180px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
    transition: opacity 0.2s ease-in, top 0.2s ease-in, width 0.1s ease-in;
    
    /*&::after {
      content: "";
      // width: 20px;
      height: 20px;
      background: #fff;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      margin-left: -10px;
      bottom: -8px;
      transform: rotate(45deg);
      z-index: 0;
    }*/
    
    a {
      color: var(--icon-color);
      opacity: 0.8;
      
      &:hover {
        transition: 0.2s;
        opacity: 1;
        color: darken(#344955, 2%);
      }
    }
  }
  
  input {
    height: 100%;
    width: 100%;
    border-radius: var(--border-radius);
    cursor: pointer;
    position: absolute;
    z-index: 5;
    opacity: 0;
    
    &:checked {
      ~ .fab {
        animation: fab-animation 0.4s ease-out forwards;
      }
      
      ~ .fac {
        width: 32px;
        height: 295px;
        animation: fac-animation 0.4s ease-out forwards 0.1s;
        top: -320px;
        opacity: 1;
        visibility: visible;
      }
    }
  }
}

@keyframes fab-animation {
  0% {
    transform: rotate(0) scale(1);
  }
  20% {
    transform: rotate(60deg) scale(0.93);
  }
  55% {
    transform: rotate(35deg) scale(0.97);
  }
  80% {
    transform: rotate(48deg) scale(0.94);
  }
  100% {
    transform: rotate(45deg) scale(0.95);
  }
}

@keyframes fab-animation-reverse {
  0% {
    transform: rotate(45deg) scale(0.95);
  }
  20% {
    transform: rotate(-15deg);
  }
  55% {
    transform: rotate(10deg);
  }
  80% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(0) scale(1);
  }
}

@keyframes fac-animation {
  0% {
    transform: scale(1, 1);
  }
  33% {
    transform: scale(0.95, 1.05);
  }
  66% {
    transform: scale(1.05, 0.95);
  }
  100% {
    transform: scale(1, 1);
  }
}

  `;
}


declare global {
  interface HTMLElementTagNameMap {
    'atx-apps-menu': AtxAppsMenu
  }
}
