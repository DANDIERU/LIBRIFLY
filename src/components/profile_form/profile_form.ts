export class profileForm extends HTMLElement {
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

       
        const formSection = this.ownerDocument.createElement('section');
        profile.appendChild(formSection);

        const form = this.ownerDocument.createElement('form');
        formSection.appendChild(form);

        const emailHeading = this.ownerDocument.createElement('h3');
        emailHeading.textContent = 'Email Address';
        form.appendChild(emailHeading);

        const emailInput = this.ownerDocument.createElement('input');
        emailInput.setAttribute('type', 'text');
        emailInput.setAttribute('placeholder', 'Enter your email address');
        form.appendChild(emailInput);

        const passwordHeading = this.ownerDocument.createElement('h3');
        passwordHeading.textContent = 'Password';
        form.appendChild(passwordHeading);

        const passwordInput = this.ownerDocument.createElement('input');
        passwordInput.setAttribute('type', 'password');
        passwordInput.setAttribute('placeholder', 'Enter your password');
        form.appendChild(passwordInput);

        // Crear la sección de botones
        const buttonSection = this.ownerDocument.createElement('section');
        profile.appendChild(buttonSection);

        const cancelButton = this.ownerDocument.createElement('button');
        cancelButton.textContent = 'Cancel';
        buttonSection.appendChild(cancelButton);

        const saveButton = this.ownerDocument.createElement('button');
        saveButton.textContent = 'Save';
        buttonSection.appendChild(saveButton);

    
      }

    }
  }

  customElements.define('profile-form', profileForm);