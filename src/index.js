import DomTreeListener from "./DomTreeListener";
import CalendarViewNodeCreator from "./CalendarViewNodeCreator";
import AddOnNodeModifier from "./AddOnNodeModifier";

const body = document.querySelector("body");

/**
 * Listens page for dom tree changes.
 * If dom tree is changed and the page contains Google Calendar Event View (as Popup or fullscreen view),
 * Adds add-on view as a new section just after meeting conference button section.  
 */

if(body){
    new DomTreeListener().addListener(body, () => {
        let newNode = new CalendarViewNodeCreator().createNode(body);  
        if(newNode) { 
            let addonModifier = new AddOnNodeModifier();
            addonModifier.setAddOnContent(newNode);
        }
    });
}