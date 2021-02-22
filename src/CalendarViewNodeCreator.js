
export default class CalendarViewNodeCreator {   

    constructor(){
        this.newComponentId = "my-new-button";
    }

    /**
     * --ContainerNode (in PopupView)
     *      --FirstChild
     *          --SchedularNode
     *          --TimeNode
     *          --AttendeeNode
     *          --MeetingConferenceNode (with attribute 'data-is-meet-selected')
     *          --LocationNode
     * 
     * --ContainerNode (in Fullscreen View)
     *      --MeetingConferenceNode (doesn't have an indikator attribure :( )
     *      --LocationNode
     *      --NotificationNode
     */
    _getMeetingConferenceNode(containerNode){
        let meetingNode = null;
        if(containerNode.getAttribute("id")==="tabEvent") { //popupView
            containerNode = containerNode.firstChild;//unnecessary
            meetingNode = containerNode.querySelector("[data-is-meet-selected]");
        }
        else
            meetingNode = containerNode.firstChild;
        return meetingNode;
    }

    createNode(node) {
        if(node.querySelector(`#${this.newComponentId}`)) //if inserted already
            return null;
        var container = node.querySelector("#tabEvent") || node.querySelector("#tabEventDetails");
        if(container) {
            let meetingNode = this._getMeetingConferenceNode(container);            
            return this._createAndAppendNewNode(meetingNode);
        }
        return null;
    }

    _createAndAppendNewNode(meetingNode){
        var newNode = meetingNode.cloneNode(true);
        newNode.setAttribute("id", this.newComponentId);
        meetingNode.after(newNode);               
        return newNode;
    }
}