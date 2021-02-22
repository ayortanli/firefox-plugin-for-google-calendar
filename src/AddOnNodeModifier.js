export default class AddOnNodeModifier {

    constructor(addonNode) {
        this.addonNode = addonNode;
    }

    setImage() {
        let image = this.addonNode.querySelector("img");
        image.setAttribute("id", "my-new-image");
        image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Firefox_Logo%2C_2017.png/64px-Firefox_Logo%2C_2017.png");       
    }

    setButton() {        
        console.log("button creating1");

        let button = this.addonNode.querySelector("[role=button]");
        button.setAttribute("id", "my-new-button");

        let buttonNameNode = button.lastChild.firstChild;
        buttonNameNode.innerHTML = "My New Button";

        button.addEventListener("click", ()=>{
            window.alert("Hello world!!!");
        });
    }

    draw(){
        this.addonNode.style.border = "1px solid red";
        this.cleanGoogleAttribute(this.addonNode);
        this.setImage();
        this.setButton();
    }

    cleanGoogleAttribute(node){
        if(node && node instanceof HTMLElement){
            if(node.getAttribute("jsname"))
                node.removeAttribute("jsname");                
            if(node.getAttribute("jsaction"))
                node.removeAttribute("jsaction");            
            if(node.getAttribute("jscontroller"))
                node.removeAttribute("jscontroller");    
            if(node.getAttribute("id") && !node.getAttribute("id").startsWith("my-new")) //my-new-component already added
                node.setAttribute("id", `my-new-${node.getAttribute("id")}`);                            
            for(const child of node.childNodes)
                this.cleanGoogleAttribute(child);
        }
    }
}