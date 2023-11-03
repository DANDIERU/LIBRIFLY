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
        const profile = this.ownerDocument.createElement('div');
        this.shadowRoot.appendChild(profile);


        const header = this.ownerDocument.createElement('header');
        profile.appendChild(header);

        const title = this.ownerDocument.createElement('h1');
        title.textContent = 'My Profile';
        header.appendChild(title);

        const icon = this.ownerDocument.createElement('span');
        icon.textContent = '👤'; 
        header.appendChild(icon);

        
        const userSection = this.ownerDocument.createElement('section');
        profile.appendChild(userSection);

        const userImage = this.ownerDocument.createElement('img');
        userImage.setAttribute('src', 'imagen-de-usuario.jpg'); 
        userSection.appendChild(userImage);

        const username = this.ownerDocument.createElement('h2');
        username.textContent = 'Username';
        userSection.appendChild(username);
        
        const description = this.ownerDocument.createElement('p');
        description.textContent = 'Description';
        userSection.appendChild(description);

    
      }

    }
  }

  customElements.define('profile-app', profile);