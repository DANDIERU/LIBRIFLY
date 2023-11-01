class CardRegister extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
  
    render() {
  
    const registerForm = document.createElement('div');
    registerForm.classList.add('register-form');

    const logo = document.createElement('img');
    logo.src = 'ruta_de_la_imagen_del_logo.jpg';
    logo.alt = 'Logo';

    const h2 = document.createElement('h2');
    h2.textContent = 'Create Account';

    const emailLabel = document.createElement('h4');
    emailLabel.textContent = 'Email';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Enter your email';

    const usernameLabel = document.createElement('h4');
    usernameLabel.textContent = 'User Name';

    const usernameInput = document.createElement('input');
    usernameInput.placeholder = 'Enter your user name';

    const passwordLabel = document.createElement('h4');
    passwordLabel.textContent = 'Password';

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Enter your password';

    const termsCheckbox = document.createElement('input');
    termsCheckbox.type = 'checkbox';
    termsCheckbox.id = 'termsCheckbox';

    const termsLabel = document.createElement('label');
    termsLabel.setAttribute('for', 'termsCheckbox');
    termsLabel.textContent = 'I agree to the terms of service & privacy policy';

    const registerButton = document.createElement('button');
    registerButton.textContent = 'Register';

    const registerWithGoogleButton = document.createElement('button');
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
    document.body.appendChild(registerForm);

    }
  }
  
  customElements.define("card-register", CardRegister);
  export default CardRegister;