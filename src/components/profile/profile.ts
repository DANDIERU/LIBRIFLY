import { navigate } from "../../store/actions";
import { dispatch } from "../../store/index";
import { screens } from "../../types/navigation";

export class profile extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      this.render();
    }

    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``;

        const link = this.ownerDocument.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "/src/components/profile/profile.css");
        this.shadowRoot?.appendChild(link);

        const profile = this.ownerDocument.createElement('div');
        this.shadowRoot.appendChild(profile);


        const header = this.ownerDocument.createElement('header');
        profile.appendChild(header);

        const title = this.ownerDocument.createElement('h1');
        title.textContent = 'My Profile';
        header.appendChild(title);

        const icon = this.ownerDocument.createElement('img');
        icon.classList.add('icon-img')
        icon.src = '/src/images/edit-03.png'; 
        icon.alt = 'icon'
        icon.addEventListener("click", ()=>{
          dispatch(navigate(screens.EDIT_PROFILE)) })
        header.appendChild(icon);

        
        const userSection = this.ownerDocument.createElement('section');
        profile.appendChild(userSection);

        const userImage = this.ownerDocument.createElement('img');
        userImage.classList.add('user-image')
        userImage.setAttribute('src', '/src/images/image 1.png'); 
        userSection.appendChild(userImage);

        const infoContainer = this.ownerDocument.createElement('section');
        infoContainer.classList.add('info-container');
        userSection.appendChild(infoContainer);


        const username = this.ownerDocument.createElement('h2');
        username.textContent = 'Username';
        infoContainer.appendChild(username);
        
        const description = this.ownerDocument.createElement('p');
        description.textContent = 'Description';
        infoContainer.appendChild(description);

    
      }

    }
  }

  customElements.define('profile-app', profile);