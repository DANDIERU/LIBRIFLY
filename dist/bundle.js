(()=>{"use strict";var e;(e||(e={})).STORE="STORE";var t;!function(e){e.SIGN_IN="SIGN_IN",e.REGISTER="REGISTER",e.DASHBOARD="DASHBOARD",e.MY_READING_LISTS="MY_READING_LISTS",e.BOOK_DETAILS="BOOK_DETAILS",e.LIST_DETAILS="LIST_DETAILS",e.GENRE_DETAILS="GENRE_DETAILS",e.SEARCH_DETAILS="SEARCH_DETAILS",e.USER_INFO="USER_INFO",e.PROFILE="PROFILE",e.EDIT_PROFILE="EDIT_PROFILE"}(t||(t={}));const o={screen:t.REGISTER};let n=(({key:e,defaultValue:t})=>{const o=localStorage.getItem(e)||sessionStorage.getItem(e);return o?JSON.parse(o):t})({key:e.STORE,defaultValue:o}),s=[];class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),s=[...s,this]}connectedCallback(){this.render()}render(){var e,o,s,a,i,l,d,c,r,E,h;if(this.shadowRoot)switch(this.shadowRoot.innerHTML="<h1>hola</h1>",n.screen){case t.SIGN_IN:const n=this.ownerDocument.createElement("sign-in");null===(e=this.shadowRoot)||void 0===e||e.appendChild(n);break;case t.REGISTER:const I=this.ownerDocument.createElement("register");null===(o=this.shadowRoot)||void 0===o||o.appendChild(I);break;case t.DASHBOARD:const R=this.ownerDocument.createElement("app-dashboard");null===(s=this.shadowRoot)||void 0===s||s.appendChild(R);break;case t.MY_READING_LISTS:const S=this.ownerDocument.createElement("my-readinglist");null===(a=this.shadowRoot)||void 0===a||a.appendChild(S);break;case t.BOOK_DETAILS:const D=this.ownerDocument.createElement("book-details");null===(i=this.shadowRoot)||void 0===i||i.appendChild(D);break;case t.LIST_DETAILS:const u=this.ownerDocument.createElement("list-details");null===(l=this.shadowRoot)||void 0===l||l.appendChild(u);break;case t.GENRE_DETAILS:const p=this.ownerDocument.createElement("genre-details");null===(d=this.shadowRoot)||void 0===d||d.appendChild(p);break;case t.SEARCH_DETAILS:const m=this.ownerDocument.createElement("search-details");null===(c=this.shadowRoot)||void 0===c||c.appendChild(m);break;case t.USER_INFO:const T=this.ownerDocument.createElement("user-info");null===(r=this.shadowRoot)||void 0===r||r.appendChild(T);break;case t.PROFILE:const _=this.ownerDocument.createElement("my-profile");null===(E=this.shadowRoot)||void 0===E||E.appendChild(_);break;case t.EDIT_PROFILE:const w=this.ownerDocument.createElement("edit-profile");null===(h=this.shadowRoot)||void 0===h||h.appendChild(w)}}}customElements.define("app-container",a)})();