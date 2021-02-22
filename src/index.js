import DomTreeListener from "./DomTreeListener";
import CalendarViewNodeCreator from "./CalendarViewNodeCreator";
import AddOnNodeModifier from "./AddOnNodeModifier";

const body = document.querySelector("body");

if(body){
    new DomTreeListener().addListener(body, () => {
        let newNode = new CalendarViewNodeCreator().createNode(body);  
        if(newNode) { 
            let addonModifier = new AddOnNodeModifier();
            addonModifier.setAddOnContent(newNode);
        }
    });
}