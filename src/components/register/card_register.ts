export class CardRegister extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      this.render();
    }


    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `hola sapa`;
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/register/card_register.css")
        this.shadowRoot?.appendChild(link) 

        const registerForm = this.ownerDocument.createElement('div');
        registerForm.classList.add('register-form');

        const logo = this.ownerDocument.createElement('img');
        logo.classList.add('logo-img');
        logo.src = '/src/images/logo.png';
        logo.alt = 'Logo';

        const h2 = this.ownerDocument.createElement('h2');
        h2.textContent = 'Create Account';

        const emailLabel = this.ownerDocument.createElement('h4');
        emailLabel.classList.add('subtitulo');
        emailLabel.textContent = 'Email';

        const emailInput = this.ownerDocument.createElement('input');
        emailInput.type = 'email';
        emailInput.placeholder = 'Enter your email';

        const usernameLabel = this.ownerDocument.createElement('h4');
        usernameLabel.classList.add('subtitulo');
        usernameLabel.textContent = 'User Name';

        const usernameInput = this.ownerDocument.createElement('input');
        usernameInput.placeholder = 'Enter your user name';

        const passwordLabel = this.ownerDocument.createElement('h4');
        passwordLabel.classList.add('subtitulo');
        passwordLabel.textContent = 'Password';

        const passwordInput = this.ownerDocument.createElement('input');
        passwordInput.type = 'password';
        passwordInput.placeholder = 'Enter your password';

        const termsCheckbox = this.ownerDocument.createElement('input');
        termsCheckbox.classList.add('check-input')
        termsCheckbox.type = 'checkbox';
        termsCheckbox.id = 'termsCheckbox';

        const termsLabel = this.ownerDocument.createElement('label');
        termsLabel.setAttribute('for', 'termsCheckbox');
        termsLabel.textContent = 'I agree to the terms of service & privacy policy';

        const registerButton = this.ownerDocument.createElement('button');
        registerButton.textContent = 'Register';

        const registerWithGoogleButton = this.ownerDocument.createElement('button');
        registerWithGoogleButton.textContent = 'Register with Google';

        // Agregar elementos al formulario de registro
        registerForm.appendChild(logo);
        registerForm.appendChild(h2);
        registerForm.appendChild(emailLabel);
        registerForm.appendChild(emailInput);
        registerForm.appendChild(usernameLabel);
        registerForm.appendChild(usernameInput);
        registerForm.appendChild(passwordLabel);
        registerForm.appendChild(passwordInput);
        registerForm.appendChild(termsCheckbox);
        registerForm.appendChild(termsLabel);
        registerForm.appendChild(registerButton);
        registerForm.appendChild(registerWithGoogleButton);

        // Agregar el formulario de registro al documento HTML
        this.shadowRoot?.appendChild(registerForm);
      }

    }
  }

  customElements.define('card-register', CardRegister);