export enum AttributeBooksWeek {
	"weekcover" = "weekcover",
    "weekicon" = "weekicon",
    "weektitle" = "weektitle",
    "weeksubtitle" = "weeksubtitle",    
    "weekcategory" = "weekcategory"
}

export class BooksWeek extends HTMLElement {
	weekcover?: string;
    weekicon?: string;
    weektitle?: string;
    weeksubtitle?: string;    
    weekcategory?: string;

	static get observedAttributes(){
		const attrs: Record<AttributeBooksWeek, null> = {
			weekcover: null,
            weekicon: null,
            weektitle: null,
            weeksubtitle: null,            
            weekcategory: null,						
		}
		return Object.keys(attrs);
	

	}

	constructor(){
		super();
		this.attachShadow({mode:"open"})
	

	}

    connectedCallback() {
		this.render();
	}

	
	attributeChangedCallback(propName: AttributeBooksWeek, oldValue: string | undefined, newValue: string | undefined ){
		switch (propName){
			default:
			this[propName] = newValue;
			break;
        }

	}
    	
	
	render(){
		if(this.shadowRoot) {
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/components/BooksWeek/BooksWeek.css")

            const preconnect1 = document.createElement('link');
			preconnect1.rel = 'preconnect';
			preconnect1.href = 'https://fonts.googleapis.com';

			
			const preconnect2 = document.createElement('link');
			preconnect2.rel = 'preconnect';
			preconnect2.href = 'https://fonts.gstatic.com';
			preconnect2.setAttribute('crossorigin', '');

			
			const fontLink = document.createElement('link');
			fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,500;1,600&display=swap';
			fontLink.rel = 'stylesheet';	

            const weekContainer = this.ownerDocument.createElement("div")
            weekContainer.classList.add("week-cont")            
            const secondCover = this.ownerDocument.createElement("img")
            secondCover.classList.add("second-cover")
            const weekIcon = this.ownerDocument.createElement("img")
            weekIcon.classList.add("week-icon")
            const subContainer2 = this.ownerDocument.createElement("div")
            subContainer2.classList.add("sub-cont2")			
            const textContainer2 = this.ownerDocument.createElement("div")
            textContainer2.classList.add("text-div2")
            const weekTitle = this.ownerDocument.createElement("h1")
            const subTitle = this.ownerDocument.createElement("h2")
            const divCategories2 = this.ownerDocument.createElement("div")
            divCategories2.classList.add("div-category2")
            const categorytext2 = this.ownerDocument.createElement("p") 
            categorytext2.classList.add("category-text2")           
            

            weekTitle.innerHTML = `${this.weektitle}`
            subTitle.innerHTML = `${this.weeksubtitle}`			
            categorytext2.innerHTML = `${this.weekcategory}`

            divCategories2.appendChild(categorytext2)

            textContainer2.appendChild(weekTitle)
            textContainer2.appendChild(subTitle)
            textContainer2.appendChild(divCategories2)                       
			
            weekIcon.setAttribute("src", `${this.weekicon}`)
            
            subContainer2.appendChild(textContainer2)

            secondCover.setAttribute("src", `${this.weekcover}`)			
			weekContainer.appendChild(secondCover)
            weekContainer.appendChild(weekIcon)
			weekContainer.appendChild(subContainer2) 
            
            weekContainer.addEventListener('mouseenter', () => {
                subContainer2.style.display = 'block'; // Muestra el subContainer
            });
              
            // Agrega un manejador de eventos para el evento "mouseleave" (cuando el mouse sale del trendContainer)
            weekContainer.addEventListener('mouseleave', () => {
                subContainer2.style.display = 'none'; // Oculta el subContainer
            
            });
            

            this.shadowRoot.appendChild(link)
            this.shadowRoot.appendChild(weekContainer)
			
        }
	}	

}

customElements.define("weekly-card", BooksWeek);
