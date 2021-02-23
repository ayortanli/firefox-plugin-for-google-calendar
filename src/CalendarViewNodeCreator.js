
export default class CalendarViewNodeCreator {   

    constructor(){
        this.newComponentId = "my-new-component";
    }

    /**
     * Finds and returns meeting conference view container  
     * Searched container node is in the following structure:  
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
     * 
     * @param {Element} containerNode The calendar dom element that may contain Meeting Conference View Container
     * @returns {Element} The calendar meeting conference container node
     * @private
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

    /**
     * Unless an add-on is already created, finds the position of meeting conference button section in the calendar
     * then creates a clone of it for use as add-on container and finally appends it to the dom tree after 
     * the meeting conference button section
     * @param {Element} node The element that contains Google Calendar Event View
     * @returns The new node used as add-on container.
     */
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

    /**
     * Creates a new container node by clonning the meeting conference node
     * @param {Element} meetingNode The node that will be cloned and appended to the view
     * @returns {Element} The new node to be used as add-on node
     * @private
     */
    _createAndAppendNewNode(meetingNode){
        var newNode = meetingNode.cloneNode(true);
        newNode.setAttribute("id", this.newComponentId);
        meetingNode.after(newNode);               
        return newNode;
    }
}