
export default class CalendarViewModifier {   

    constructor(){
        this.newComponentId = "my-new-button";
    }

    /**
     * --ContainerNode
     *      --FirstChild
     *          --SchedularNode
     *          --TimeNode
     *          --AttendeeNode
     *          --MeetingNode (with attribute 'data-is-meet-selected')
     *          --LocationNode
     */
    editPopupView(containerNode) {
        containerNode = containerNode.firstChild;//unnecessary
        var meetingNode = containerNode.querySelector("[data-is-meet-selected]");
        var newNode = meetingNode.cloneNode(true);
        newNode.setAttribute("id", this.newComponentId);
        meetingNode.after(newNode);
        //bunun icini temizle ve bir id ver.// Bu id'li eleman varsa hiç girme çizim işine
        //sonra bunu toplantıdan sonraya merge et.
        newNode.style.border = "5px solid red"; 
    }

    /**
     * --ContainerNode
     *      --MeetingNode (doesn't have an indikator attribure :( )
     *      --LocationNode
     *      --NotificationNode
     */
    editFullScreenView(containerNode) {
        var meetingNode = containerNode.firstChild;
        var newNode = meetingNode.cloneNode(true);
        newNode.setAttribute("id", this.newComponentId);
        meetingNode.after(newNode);
                
        newNode.style.border = "5px solid red"; 
    }

    editView(node) {
        if(node.querySelector(`#${this.newComponentId}`)) //if inserted already
            return
        var container = node.querySelector("#tabEvent") || node.querySelector("#tabEventDetails");
        if(container)
            if(container.getAttribute("id")==="tabEvent")
                this.editPopupView(container);
            else
                this.editFullScreenView(container);
    }
}