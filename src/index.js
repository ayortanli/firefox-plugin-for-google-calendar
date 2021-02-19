import DomTreeListener from "./DomTreeListener";
import CalendarEventViewModifier from "./CalendarViewModifier";
import CalendarViewModifier from "./CalendarViewModifier";

const body = document.querySelector("body");

if(body){
    DomTreeListener.addListener(body, ()=> {
        CalendarViewModifier.modifyView(body);
    });
}