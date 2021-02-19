import DomTreeListener from "./DomTreeListener";
import CalendarViewModifier from "./CalendarViewModifier";

const body = document.querySelector("body");

if(body){
    new DomTreeListener().addListener(body, () => {
        new CalendarViewModifier().editView(body);
    });
}