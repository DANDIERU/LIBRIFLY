(()=>{"use strict";class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e,t;if(this.shadowRoot){this.shadowRoot.innerHTML="";const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/register/card_register.css"),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n);const s=this.ownerDocument.createElement("div");s.classList.add("register-form"),null===(t=this.shadowRoot)||void 0===t||t.appendChild(s);const o=this.ownerDocument.createElement("section");o.classList.add("container-one"),s.appendChild(o);const i=this.ownerDocument.createElement("img");i.classList.add("logo-img"),i.src="/src/images/logo.png",i.alt="Logo",o.appendChild(i);const a=this.ownerDocument.createElement("h2");a.textContent="Create Account",o.appendChild(a);const c=this.ownerDocument.createElement("h4");c.classList.add("subtitulo"),c.textContent="User Name",o.appendChild(c);const r=this.ownerDocument.createElement("input");r.classList.add("input-info"),r.placeholder="Enter your user name",o.appendChild(r);const d=this.ownerDocument.createElement("h4");d.classList.add("subtitulo"),d.textContent="Email",o.appendChild(d);const l=this.ownerDocument.createElement("input");l.classList.add("input-info"),l.type="email",l.placeholder="Enter your email",o.appendChild(l);const h=this.ownerDocument.createElement("h4");h.classList.add("subtitulo"),h.textContent="Password",o.appendChild(h);const p=this.ownerDocument.createElement("input");p.classList.add("input-info"),p.type="password",p.placeholder="Enter your password",o.appendChild(p);const m=this.ownerDocument.createElement("section");m.classList.add("container-two"),o.appendChild(m);const u=this.ownerDocument.createElement("input");u.classList.add("check-input"),u.type="checkbox",u.id="termsCheckbox",m.appendChild(u);const E=this.ownerDocument.createElement("label");E.classList.add("label-text"),E.setAttribute("for","termsCheckbox"),E.textContent="I agree to the terms of service & privacy policy",m.appendChild(E);const w=this.ownerDocument.createElement("section");w.classList.add("container-three"),o.appendChild(w);const C=this.ownerDocument.createElement("button");C.textContent="Register",w.appendChild(C)}}}customElements.define("card-register",e);class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e,t;if(this.shadowRoot){this.shadowRoot.innerHTML="";const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/sign_in/card_signin.css"),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n);const s=this.ownerDocument.createElement("div");s.classList.add("signin-form"),null===(t=this.shadowRoot)||void 0===t||t.appendChild(s);const o=this.ownerDocument.createElement("section");o.classList.add("container-one"),s.appendChild(o);const i=this.ownerDocument.createElement("img");i.classList.add("logo-img"),i.src="/src/images/logo.png",i.alt="Logo",o.appendChild(i);const a=this.ownerDocument.createElement("h2");a.textContent="WELCOME BACK",o.appendChild(a);const c=this.ownerDocument.createElement("h3");c.textContent="Welcome back! Please sign in to your account.",o.appendChild(c);const r=this.ownerDocument.createElement("h4");r.classList.add("subtitulo"),r.textContent="Email",o.appendChild(r);const d=this.ownerDocument.createElement("input");d.classList.add("input-info"),d.type="email",d.placeholder="Enter your email",o.appendChild(d);const l=this.ownerDocument.createElement("h4");l.classList.add("subtitulo"),l.textContent="Password",o.appendChild(l);const h=this.ownerDocument.createElement("input");h.classList.add("input-info"),h.type="password",h.placeholder="Enter your password",o.appendChild(h);const p=this.ownerDocument.createElement("section");p.classList.add("container-two"),o.appendChild(p);const m=this.ownerDocument.createElement("input");m.classList.add("check-input"),m.type="checkbox",m.id="termsCheckbox",p.appendChild(m);const u=this.ownerDocument.createElement("label");u.classList.add("label-text"),u.setAttribute("for","termsCheckbox"),u.textContent="remember me",p.appendChild(u);const E=this.ownerDocument.createElement("a");E.setAttribute("href","#"),E.textContent="Forgot Password?",p.appendChild(E);const w=this.ownerDocument.createElement("section");w.classList.add("container-three"),o.appendChild(w);const C=this.ownerDocument.createElement("button");C.textContent="Sign In",w.appendChild(C);const D=document.createElement("a");D.setAttribute("href","#"),D.textContent="Don't Have an Account? Sign Up for Free",w.appendChild(D)}}}var n;customElements.define("card-signin",t),(n||(n={})).STORE="STORE";var s;!function(e){e.SIGN_IN="SIGN_IN",e.REGISTER="REGISTER",e.DASHBOARD="DASHBOARD",e.MY_READING_LISTS="MY_READING_LISTS",e.BOOK_DETAILS="BOOK_DETAILS",e.LIST_DETAILS="LIST_DETAILS",e.GENRE_DETAILS="GENRE_DETAILS",e.SEARCH_DETAILS="SEARCH_DETAILS",e.USER_INFO="USER_INFO",e.PROFILE="PROFILE",e.EDIT_PROFILE="EDIT_PROFILE"}(s||(s={}));const o={screen:s.SIGN_IN};let i=(({key:e,defaultValue:t})=>{const n=localStorage.getItem(e)||sessionStorage.getItem(e);return n?JSON.parse(n):t})({key:n.STORE,defaultValue:o}),a=[];const c=e=>{a=[...a,e]};class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),c(this)}connectedCallback(){this.render()}render(){var e,t;if(this.shadowRoot){this.shadowRoot.innerHTML="";const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/screens/register/Register.css"),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n);const s=this.ownerDocument.createElement("section");s.classList.add("register-page"),null===(t=this.shadowRoot)||void 0===t||t.appendChild(s);const o=this.ownerDocument.createElement("section");o.classList.add("register-card"),s.appendChild(o);const i=this.ownerDocument.createElement("card-register");i.classList.add("register-container"),o.appendChild(i);const a=this.ownerDocument.createElement("img");a.classList.add("img-png"),a.src="/src/images/register.png",s.appendChild(a)}}}customElements.define("register-app",r);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),c(this)}connectedCallback(){this.render()}render(){var e,t;if(this.shadowRoot){this.shadowRoot.innerHTML="";const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/screens/sign_in/sign_in.css"),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n);const s=this.ownerDocument.createElement("section");s.classList.add("signin-page"),null===(t=this.shadowRoot)||void 0===t||t.appendChild(s);const o=this.ownerDocument.createElement("section");o.classList.add("signin-card"),s.appendChild(o);const i=this.ownerDocument.createElement("card-signin");i.classList.add("signin-container"),o.appendChild(i);const a=this.ownerDocument.createElement("img");a.classList.add("img-png"),a.src="/src/images/signin.png",s.appendChild(a)}}}customElements.define("sign-in",d);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),c(this)}connectedCallback(){this.render()}render(){var e,t,n,o,a,c,r,d,l,h,p;if(this.shadowRoot)switch(this.shadowRoot.innerHTML="",i.screen){case s.SIGN_IN:const i=this.ownerDocument.createElement("sign-in");null===(e=this.shadowRoot)||void 0===e||e.appendChild(i);break;case s.REGISTER:const m=this.ownerDocument.createElement("register-app");null===(t=this.shadowRoot)||void 0===t||t.appendChild(m);break;case s.DASHBOARD:const u=this.ownerDocument.createElement("app-dashboard");null===(n=this.shadowRoot)||void 0===n||n.appendChild(u);break;case s.MY_READING_LISTS:const E=this.ownerDocument.createElement("my-readinglist");null===(o=this.shadowRoot)||void 0===o||o.appendChild(E);break;case s.BOOK_DETAILS:const w=this.ownerDocument.createElement("book-details");null===(a=this.shadowRoot)||void 0===a||a.appendChild(w);break;case s.LIST_DETAILS:const C=this.ownerDocument.createElement("list-details");null===(c=this.shadowRoot)||void 0===c||c.appendChild(C);break;case s.GENRE_DETAILS:const D=this.ownerDocument.createElement("genre-details");null===(r=this.shadowRoot)||void 0===r||r.appendChild(D);break;case s.SEARCH_DETAILS:const L=this.ownerDocument.createElement("search-details");null===(d=this.shadowRoot)||void 0===d||d.appendChild(L);break;case s.USER_INFO:const g=this.ownerDocument.createElement("user-info");null===(l=this.shadowRoot)||void 0===l||l.appendChild(g);break;case s.PROFILE:const R=this.ownerDocument.createElement("my-profile");null===(h=this.shadowRoot)||void 0===h||h.appendChild(R);break;case s.EDIT_PROFILE:const S=this.ownerDocument.createElement("edit-profile");null===(p=this.shadowRoot)||void 0===p||p.appendChild(S)}}}customElements.define("app-container",l)})();