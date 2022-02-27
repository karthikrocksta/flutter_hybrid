import{r as u,e as f,s as p,$ as d,n as a}from"./vendor.js";const m=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};m();var y=Object.defineProperty,h=Object.getOwnPropertyDescriptor,c=(l,t,s,o)=>{for(var e=o>1?void 0:o?h(t,s):t,r=l.length-1,n;r>=0;r--)(n=l[r])&&(e=(o?n(t,s,e):n(e))||e);return o&&e&&y(t,s,e),e};let i=class extends p{constructor(){super(...arguments);this.name="Somebody"}render(){return d`<div>
      <p>Hello, ${this.name}!</p>
      <slot></slot>
    </div>`}};i.styles=u`
    p {
      color: blue;
    }
  `;c([f()],i.prototype,"name",2);i=c([a("my-app")],i);
