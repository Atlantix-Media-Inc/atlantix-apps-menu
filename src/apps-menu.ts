import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import atxLogo from './assets/atx-logo.png';
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
        url: 'https://atlantix-apps.vercel.app/sms',
        width: 40,
        tint: "lime",
        mark: "SMS"
      },
      {
        name: 'Link Shortener',
        url: 'https://atlantix-apps.vercel.app/link-shortner',
        width: 30,
        tint: "sky",
        mark: "LKS",
      },
      {
        name: 'Frankeynalytics',
        url: 'https://atlantix-apps.vercel.app/frankey',
        width: 40,
        tint: "blue",
        mark: "FRK"
      },
      {
        name: 'Bucket App',
        url: 'https://atlantix-apps.vercel.app/bucket-app',
        width: 40,
        tint: "neutral",
        mark: "BKT"
      },
      {
        name: 'Money Man',
        url: 'https://atlantix-apps.vercel.app/money-man',
        width: 40,
        tint: "amber",
        mark: "MM"
      },
      {
        name: 'Ping Sync',
        url: 'https://atlantix-apps.vercel.app/ping-sync',
        width: 40,
        tint: "red",
        mark: "PS"
      },
      {
        name: 'Home',
        icon: homeLogo,
        url: 'https://atlantix-apps.vercel.app',
        width: 40,
        tint: "neutral",
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
        ${apps.map(app => html`<a title=${app.name} class=${app.tint} href=${app.url}>
          ${app.icon ? html`<img src=${app.icon} alt=${app.name} width="30" height="30" />` : app.mark}
        </a>`)}
      </div>
    </div>
    `;
  }

  static styles = css`
.wrapper {
  width: 60px;
  height: 60px;
  position: relative;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Geist", sans-serif;
  
  .fab {
    width: 60px;
    height: 60px;
    position: relative;
    z-index: 3;
    border-radius: 15px;
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
    border-radius: 15px;
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
      opacity: 0.8;
      width: 45px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 600;
      
      &.lime {
        background-color: #82CE0026;
        color: #3F6212;
      }

      &.sky {
        background-color: #00A4F126;
        color: #005A89;
      }
      
      &.blue {
        background-color: #267FFF26;
        color: #193CB8;
      }
        
      &.neutral {
        background-color: #73737326;
        color: #262626;
      }

      &.amber {
        background-color: #FB9C0026;
        color: #973C00;
      }

      &.red {
        background-color: #FEE0E1;
        color: #9F0712;
      }

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
    border-radius: 100%;
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
        height: 307px;
        animation: fac-animation 0.4s ease-out forwards 0.1s;
        top: -340px;
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
