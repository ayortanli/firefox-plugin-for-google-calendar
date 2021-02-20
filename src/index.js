import DomTreeListener from "./DomTreeListener";
import CalendarViewNodeCreator from "./CalendarViewNodeCreator";

const body = document.querySelector("body");

if(body){
    new DomTreeListener().addListener(body, () => {
        new CalendarViewNodeCreator().editView(body);
    });
}