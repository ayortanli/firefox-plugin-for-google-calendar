
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
     *          --MeetingConferenceNode (with attribute 'data-is-meet-selected')
     *          --LocationNode
     */
    getMeetingNodeFromPopupView(containerNode) {
        containerNode = containerNode.firstChild;//unnecessary
        var meetingNode = containerNode.querySelector("[data-is-meet-selected]");
        return meetingNode;
    }

    /**
     * --ContainerNode
     *      --MeetingConferenceNode (doesn't have an indikator attribure :( )
     *      --LocationNode
     *      --NotificationNode
     */
    getMeetingNodeFromFullScreenView(containerNode) {
        var meetingNode = containerNode.firstChild;
        return meetingNode;
    }

    editView(node) {
        if(node.querySelector(`#${this.newComponentId}`)) //if inserted already
            return
        var container = node.querySelector("#tabEvent") || node.querySelector("#tabEventDetails");
        if(container) {
            let meetingNode = undefined;
            if(container.getAttribute("id")==="tabEvent")
                meetingNode = this.getMeetingNodeFromPopupView(container);
            else
                meetingNode = this.getMeetingNodeFromFullScreenView(container);
            this.createView(meetingNode);
        }
    }

    createView(meetingNode){
        //TODO:refactor to a new class...
        var newNode = meetingNode.cloneNode(true);
        newNode.setAttribute("id", this.newComponentId);
        meetingNode.after(newNode);                
        newNode.style.border = "5px solid red";
    }
}