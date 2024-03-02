export default class productsData extends HTMLAreaElement{
    static get observedAtributes(){
        return ['image','title', 'description', 'value', 'inStock']
        
}


constructor() {
   super();
   this.attachShadow ({mode:'open'})
}

conectedCallback(){
    this.renderProducts();
}
atributeChangedCallback(propName, oldValue, newValue){
    this.[propName] = newValue;
    this.renderProducts();
}


renderProducts(){
    this.shadowRoot,this.innerHTML = '
    <link rel="stylesheet" href="./index.css">;
    <p>$(this.image)</p>;
<p>$(this.title)</p>;
<p>$(this.description)</p>
<p>$(this.value)</p>;
<p>$(this.inStock)</p>;'




}
}