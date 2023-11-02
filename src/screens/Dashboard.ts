class Dashboard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    
  
    render() {
      if (this.shadowRoot) {
        
      }
    }
}
  
customElements.define("app-dashboard", Dashboard);
export default Dashboard;