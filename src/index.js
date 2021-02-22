import DomTreeListener from "./DomTreeListener";
import CalendarViewNodeCreator from "./CalendarViewNodeCreator";

const body = document.querySelector("body");

if(body){
    new DomTreeListener().addListener(body, () => {
        let newNode = new CalendarViewNodeCreator().createNode(body);  
        if(newNode)       
            newNode.style.border = "5px solid red";
    });
}