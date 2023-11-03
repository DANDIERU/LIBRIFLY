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

        const formSection = this.ownerDocument.createElement('section');
        formSection.classList.add('form-section')
        this.shadowRoot.appendChild(formSection);

        const form = this.ownerDocument.createElement('form');
        form.classList.add('from-container')
        formSection.appendChild(form);

        const emailHeading = this.ownerDocument.createElement('h3');
        emailHeading.classList.add('subtitle')
        emailHeading.textContent = 'Email Address';
        form.appendChild(emailHeading);

        const emailInput = this.ownerDocument.createElement('input');
        emailInput.setAttribute('type', 'text');
        emailInput.setAttribute('placeholder', 'Enter your email address');
        form.appendChild(emailInput);

        const passwordHeading = this.ownerDocument.createElement('h3');
        passwordHeading.classList.add('subtitle')
        passwordHeading.textContent = 'Password';
        form.appendChild(passwordHeading);

        const passwordInput = this.ownerDocument.createElement('input');
        passwordInput.setAttribute('type', 'password');
        passwordInput.setAttribute('placeholder', 'Enter your password');
        form.appendChild(passwordInput);

        // Crear la sección de botones
        const buttonSection = this.ownerDocument.createElement('section');
        buttonSection.classList.add('button-section')
        formSection.appendChild(buttonSection);

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