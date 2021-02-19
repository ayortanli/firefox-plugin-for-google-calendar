
export default class CalendarViewModifier {   
    editPopupView(containerNode) {
        containerNode.style.border = "5px solid red"; 
    }

    editFullScreenView(containerNode) {
        containerNode.style.border = "5px solid red"; 
    }

    editView(node) {
        var container = node.querySelector("#tabEvent") || node.querySelector("#tabEventDetails");
            if(container)
                if(container.getAttribute("id")==="tabEvent")
                    this.editPopupView(container);
                else
                    this.editFullScreenView(container);
    }
}