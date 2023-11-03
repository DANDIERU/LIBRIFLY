(()=>{"use strict";var e,t,s,n;!function(e){e.main_reading="main_reading",e.btn_create="btn_create",e.empty_desc="empty_desc",e.img_main="img_main"}(e||(e={}));class i extends HTMLElement{static get observedAttributes(){return Object.keys({main_reading:null,btn_create:null,empty_desc:null,img_main:null})}attributeChangedCallback(e,t,s){this[e]=s}constructor(){super(),this.main_reading="",this.btn_create="",this.empty_desc="",this.img_main="",this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){const e=this.ownerDocument.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","../src/components/solidReading/solidReading.css"),this.shadowRoot.appendChild(e);const t=this.ownerDocument.createElement("div");t.classList.add("reading-div");const s=this.ownerDocument.createElement("div");s.classList.add("reading-content"),t.appendChild(s);const n=this.ownerDocument.createElement("div");n.classList.add("img-infodiv"),t.appendChild(n);const i=this.ownerDocument.createElement("h1");i.classList.add("list-name"),i.innerText=`${this.main_reading}`,s.appendChild(i);const o=this.ownerDocument.createElement("p");o.classList.add("empty-desc"),o.innerText=`${this.empty_desc}`,s.appendChild(o);const a=this.ownerDocument.createElement("button");a.classList.add("button-create"),a.innerText=`${this.btn_create}`,s.appendChild(a);const d=this.ownerDocument.createElement("img");d.classList.add("img-reading"),d.setAttribute("src",`${this.img_main}`),n.appendChild(d),this.shadowRoot.appendChild(t)}}}customElements.define("solid-reading",i),function(e){e.logo="logo",e.icon_user="icon_user",e.user_title="user_title",e.dashboard_icon="dashboard_icon",e.dashboard_title="dashboard_title",e.readinglist_icon="readinglist_icon",e.readinglist_title="readinglist_title",e.logout_icon="logout_icon",e.logout_title="logout_title"}(t||(t={}));class o extends HTMLElement{static get observedAttributes(){return Object.keys({logo:null,icon_user:null,user_title:null,dashboard_icon:null,dashboard_title:null,readinglist_icon:null,readinglist_title:null,logout_icon:null,logout_title:null})}attributeChangedCallback(e,t,s){this[e]=s}constructor(){super(),this.logo="",this.icon_user="",this.user_title="",this.dashboard_icon="",this.dashboard_title="",this.readinglist_icon="",this.readinglist_title="",this.logout_icon="",this.logout_title="",this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){const e=this.ownerDocument.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","../src/components/NavBar/NavBar.css"),this.shadowRoot.appendChild(e);const t=this.ownerDocument.createElement("div");t.classList.add("nav-rectanglecolor");const s=this.ownerDocument.createElement("div");s.classList.add("nav-allcontent");const n=this.ownerDocument.createElement("img");n.classList.add("logo-img"),n.setAttribute("src",`${this.logo}`),s.appendChild(n);const i=this.ownerDocument.createElement("div");i.classList.add("div-profile");const o=this.ownerDocument.createElement("img");o.classList.add("img-profile"),o.setAttribute("src",`${this.icon_user}`),i.appendChild(o);const a=this.ownerDocument.createElement("p");a.classList.add("title-profile"),a.innerText=`${this.user_title}`,i.appendChild(a),s.appendChild(i);const d=this.ownerDocument.createElement("div");d.classList.add("nav-itemcontainer");const r=document.createElement("img");r.setAttribute("src",`${this.dashboard_icon}`),r.classList.add("icon-1");const l=document.createElement("p");l.classList.add("title-1"),l.innerText=`${this.dashboard_title}`,d.appendChild(r),d.appendChild(l),s.appendChild(d);const c=this.ownerDocument.createElement("div");c.classList.add("nav-itemcontainer");const h=document.createElement("img");h.setAttribute("src",`${this.readinglist_icon}`),h.classList.add("icon-2");const u=document.createElement("p");u.classList.add("title-2"),u.innerText=`${this.readinglist_title}`,c.appendChild(h),c.appendChild(u),s.appendChild(c);const m=this.ownerDocument.createElement("hr");m.classList.add("hr-nav"),s.appendChild(m);const p=this.ownerDocument.createElement("div");p.classList.add("nav-itemcontainer");const _=document.createElement("img");_.setAttribute("src",`${this.logout_icon}`),_.classList.add("icon-3");const g=document.createElement("p");g.classList.add("title-3"),g.innerText=`${this.logout_title}`,p.appendChild(_),p.appendChild(g),s.appendChild(p),t.appendChild(s),this.shadowRoot.appendChild(t)}}}customElements.define("navbar-component",o),function(e){e.cover_detail="cover_detail",e.title_detail="title_detail",e.year_detail="year_detail",e.author_detail="author_detail",e.genre_detail="genre_detail",e.overview_detail="overview_detail"}(s||(s={}));class a extends HTMLElement{static get observedAttributes(){return Object.keys({cover_detail:null,title_detail:null,year_detail:null,author_detail:null,genre_detail:null,overview_detail:null})}attributeChangedCallback(e,t,s){this[e]=s}constructor(){super(),this.cover_detail="",this.title_detail="",this.year_detail="",this.author_detail="",this.genre_detail="",this.overview_detail="",this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){const e=this.ownerDocument.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","../src/components/BookDetails/BookDetails.css"),this.shadowRoot.appendChild(e);const t=this.ownerDocument.createElement("section");t.classList.add("details-div");const s=this.ownerDocument.createElement("div");s.classList.add("cover-div"),t.appendChild(s);const n=this.ownerDocument.createElement("img");n.classList.add("cover-img"),n.setAttribute("src",`${this.cover_detail}`),s.appendChild(n);const i=this.ownerDocument.createElement("div");i.classList.add("info-div"),t.appendChild(i);const o=this.ownerDocument.createElement("h1");o.classList.add("title-book"),o.innerText=`${this.title_detail}`,i.appendChild(o);const a=this.ownerDocument.createElement("div");a.classList.add("yearauthor-div"),i.appendChild(a);const d=this.ownerDocument.createElement("p");d.classList.add("year-book"),d.innerText=`${this.year_detail}`,a.appendChild(d);const r=this.ownerDocument.createElement("p");r.classList.add("author-book"),r.innerText=`${this.author_detail}`,a.appendChild(r);const l=this.ownerDocument.createElement("p");l.classList.add("genre-Book"),l.innerText=`Genre: ${this.genre_detail}`,i.appendChild(l);const c=this.ownerDocument.createElement("p");c.classList.add("overview-book"),c.innerText=`Overview: ${this.overview_detail}`,i.appendChild(c),this.shadowRoot.appendChild(t)}}}customElements.define("bookdetails-component",a);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e;if(this.shadowRoot){const t=this.ownerDocument.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href","/src/screens/Book_Details.css"),null===(e=this.shadowRoot)||void 0===e||e.appendChild(t);const n=this.ownerDocument.createElement("div");n.classList.add("main-div");const i=this.ownerDocument.createElement("bookdetails-component");i.classList.add("bookdetails-div"),i.setAttribute(s.cover_detail,"../src/img/bookdetail.png"),i.setAttribute(s.title_detail,"Title Book"),i.setAttribute(s.year_detail,"2020"),i.setAttribute(s.author_detail,"Eloisa"),i.setAttribute(s.genre_detail,"Fantasy"),i.setAttribute(s.overview_detail,"The Fellowship of the Ring is the opening volume of J.R.R. Tolkien's iconic high-fantasy trilogy, The Lord of the Rings. This installment sets the stage for an epic quest to destroy the One Ring, which holds immense power and poses a grave threat to Middle-earth."),n.appendChild(i),this.shadowRoot.appendChild(n)}}}customElements.define("book-details",d);class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e;if(this.shadowRoot){const s=this.ownerDocument.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href","src/screens/Dashboard.css"),null===(e=this.shadowRoot)||void 0===e||e.appendChild(s);const n=this.ownerDocument.createElement("navbar-component");n.classList.add("rectangle-nav"),n.setAttribute(t.logo,"../src/icon/Iconlogo.png"),n.setAttribute(t.icon_user,"../src/icon/imgprofile.png"),n.setAttribute(t.user_title,"Jezzini_03"),n.setAttribute(t.dashboard_icon,"../src/icon/dashboardon.png"),n.setAttribute(t.dashboard_title,"Dashboard"),n.setAttribute(t.readinglist_icon,"../src/icon/readingoff.png"),n.setAttribute(t.readinglist_title,"My reading lists"),n.setAttribute(t.logout_icon,"../src/icon/logout.png"),n.setAttribute(t.logout_title,"Logout"),this.shadowRoot.appendChild(n)}}}customElements.define("app-dashboard",r);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot}}customElements.define("edit-profile",l);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot}}customElements.define("genre-details",c);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot}}customElements.define("list-details",h);class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot}}customElements.define("my-profile",u);class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var s;if(this.shadowRoot){const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/screens/My_Reading_lists.css"),null===(s=this.shadowRoot)||void 0===s||s.appendChild(n);const i=this.ownerDocument.createElement("main");i.classList.add("main-cont");const o=this.ownerDocument.createElement("navbar-component");o.classList.add("rectangle-nav"),o.setAttribute(t.logo,"../src/icon/Iconlogo.png"),o.setAttribute(t.icon_user,"../src/icon/imgprofile.png"),o.setAttribute(t.user_title,"Jezzini_03"),o.setAttribute(t.dashboard_icon,"../src/icon/dashboardoff.png"),o.setAttribute(t.dashboard_title,"Dashboard"),o.setAttribute(t.readinglist_icon,"../src/icon/readingon.png"),o.setAttribute(t.readinglist_title,"My reading lists"),o.setAttribute(t.logout_icon,"../src/icon/logout.png"),o.setAttribute(t.logout_title,"Logout"),i.appendChild(o);const a=this.ownerDocument.createElement("solid-reading");a.classList.add("reading-div"),a.setAttribute(e.main_reading,"My reading List"),a.setAttribute(e.empty_desc,"Oh, you don't have lists yet.Create your first list"),a.setAttribute(e.btn_create,"Create list"),a.setAttribute(e.img_main,"../src/img/girlreadinglist.png"),i.appendChild(a),this.shadowRoot.appendChild(i)}}}customElements.define("my-readinglist",m);class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot}}customElements.define("register-app",p);class _ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot}}customElements.define("search-details",_);class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot}}customElements.define("sign-in",g);class E extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot}}customElements.define("user-info",E),(n||(n={})).STORE="STORE";var b;!function(e){e.SIGN_IN="SIGN_IN",e.REGISTER="REGISTER",e.DASHBOARD="DASHBOARD",e.MY_READING_LISTS="MY_READING_LISTS",e.BOOK_DETAILS="BOOK_DETAILS",e.LIST_DETAILS="LIST_DETAILS",e.GENRE_DETAILS="GENRE_DETAILS",e.SEARCH_DETAILS="SEARCH_DETAILS",e.USER_INFO="USER_INFO",e.PROFILE="PROFILE",e.EDIT_PROFILE="EDIT_PROFILE"}(b||(b={}));const w={screen:b.MY_READING_LISTS};let v=(({key:e,defaultValue:t})=>{const s=localStorage.getItem(e)||sessionStorage.getItem(e);return s?JSON.parse(s):t})({key:n.STORE,defaultValue:w}),L=[];class C extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),L=[...L,this]}connectedCallback(){this.render()}render(){var e,t,s,n,i,o,a,d,r,l,c;if(this.shadowRoot)switch(v.screen){case b.SIGN_IN:const h=this.ownerDocument.createElement("sign-in");null===(e=this.shadowRoot)||void 0===e||e.appendChild(h);break;case b.REGISTER:const u=this.ownerDocument.createElement("register-app");null===(t=this.shadowRoot)||void 0===t||t.appendChild(u);break;case b.DASHBOARD:const m=this.ownerDocument.createElement("app-dashboard");null===(s=this.shadowRoot)||void 0===s||s.appendChild(m);break;case b.MY_READING_LISTS:const p=this.ownerDocument.createElement("my-readinglist");null===(n=this.shadowRoot)||void 0===n||n.appendChild(p);break;case b.BOOK_DETAILS:const _=this.ownerDocument.createElement("book-details");null===(i=this.shadowRoot)||void 0===i||i.appendChild(_);break;case b.LIST_DETAILS:const g=this.ownerDocument.createElement("list-details");null===(o=this.shadowRoot)||void 0===o||o.appendChild(g);break;case b.GENRE_DETAILS:const E=this.ownerDocument.createElement("genre-details");null===(a=this.shadowRoot)||void 0===a||a.appendChild(E);break;case b.SEARCH_DETAILS:const w=this.ownerDocument.createElement("search-details");null===(d=this.shadowRoot)||void 0===d||d.appendChild(w);break;case b.USER_INFO:const v=this.ownerDocument.createElement("user-info");null===(r=this.shadowRoot)||void 0===r||r.appendChild(v);break;case b.PROFILE:const L=this.ownerDocument.createElement("my-profile");null===(l=this.shadowRoot)||void 0===l||l.appendChild(L);break;case b.EDIT_PROFILE:const C=this.ownerDocument.createElement("edit-profile");null===(c=this.shadowRoot)||void 0===c||c.appendChild(C)}}}customElements.define("app-container",C)})();