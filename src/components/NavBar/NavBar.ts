//import { data } from "./navBarLinks/navBarLinks";
export enum AttributeNav {
    "logo" = "logo",
    "icon_title" = "icon_title",
    "icon_img" ="icon_img",
    "icon_user" = "icon_user",
    "user_title" = "user_title"

}


export class NavBar extends HTMLElement {

    icon_title?: string = "";
    icon_img?: string = "";
    icon_user?: string = "";
    user_title?: string = "";
    logo?: string = "";

    static get observedAttributes(){
        const attrs: Record <AttributeNav, null> ={
            icon_title: null,
            icon_img: null,
            icon_user: null,
            user_title: null,
            logo: null,
            

        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeNav,
        _: unknown,
        newValue: string){

            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
    }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {

        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "../src/components/NavBar/NavBar.css")
        this.shadowRoot.appendChild(link)
        
        const navRectangleColor = this.ownerDocument.createElement("div");
        navRectangleColor.classList.add("nav-rectanglecolor")

        const navContentDiv = this.ownerDocument.createElement("div")
        navContentDiv.classList.add("nav-allcontent")
        

        const logo = this.ownerDocument.createElement("img");
        logo.classList.add("logo-img")
        logo.setAttribute("src", `${this.logo}`)
        navContentDiv.appendChild(logo)

        const divProfile = this.ownerDocument.createElement("div")
        divProfile.classList.add("div-profile")

        const imgProfile = this.ownerDocument.createElement("img")
        imgProfile.classList.add("img-profile")
        imgProfile.setAttribute("src", `${this.icon_user}`)
        divProfile.appendChild(imgProfile)

        const titleProfile = this.ownerDocument.createElement("p")
        titleProfile.classList.add("title-profile")
        titleProfile.innerText = `${this.user_title}`;
        divProfile.appendChild(titleProfile)

        navContentDiv.appendChild(divProfile)        

        const navItemContainer1 = this.ownerDocument.createElement("div");
        navItemContainer1.classList.add("nav-itemcontainer");
        
        const icon1 = document.createElement("img");
        icon1.setAttribute("src", `${this.icon_user}`)        
        const title1 = document.createElement("p")
        title1.innerText = `${this.icon_title}`

        navItemContainer1.appendChild(icon1)
        navItemContainer1.appendChild(title1)

        navContentDiv.appendChild(navItemContainer1)

        //////////////////////////////////

        const navItemContainer2 = this.ownerDocument.createElement("div");
        navItemContainer2.classList.add("nav-itemcontainer");
        
        const icon2 = document.createElement("img");
        icon2.setAttribute("src", `${this.icon_user}`)        
        const title2 = document.createElement("p")
        title2.innerText = `${this.icon_title}`

        navItemContainer2.appendChild(icon2)
        navItemContainer2.appendChild(title2)

        navContentDiv.appendChild(navItemContainer2)
        //////////////////////////////////

        const hrNav = this.ownerDocument.createElement("div")
        hrNav.classList.add("hr-nav")
        navContentDiv.appendChild(hrNav)

        /////////////////////////////////////

        const navItemContainer3 = this.ownerDocument.createElement("div");
        navItemContainer3.classList.add("nav-itemcontainer");
        
        const icon3 = document.createElement("img");
        icon3.setAttribute("src", `${this.icon_user}`)        
        const title3 = document.createElement("p")
        title3.innerText = `${this.icon_title}`

        navItemContainer3.appendChild(icon3)
        navItemContainer3.appendChild(title3)

        navContentDiv.appendChild(navItemContainer3)
        navRectangleColor.appendChild(navContentDiv)
        this.shadowRoot.appendChild(navRectangleColor)        

    }
  }
}

customElements.define("navbar-component", NavBar);