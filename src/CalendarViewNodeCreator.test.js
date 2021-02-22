import CalendarViewNodeCreator from "./CalendarViewNodeCreator";

describe("CalendarViewModifier", () => {        

    it("does't edit anything when Calendar Detail view is not active or the view is already modified", () => {
        let viewNodeCreator = new CalendarViewNodeCreator();     

        let container = document.createElement("div");
        let result = viewNodeCreator.createNode(container);  //nothing to edit     
        expect(result).toBeNull();
        
        let createdNode = document.createElement("div");
        createdNode.setAttribute("id", "my-new-button"); 
        container.appendChild(createdNode);
        viewNodeCreator.createNode(container);  //already modified so nothing to edit
        expect(result).toBeNull();
    });
    
    it("creates and appends a clone of Meeting Conference node and returns it, if Calendar Deatils Popup View is opened", () => {
        let viewNodeCreator = new CalendarViewNodeCreator(); 

        let container = document.createElement("div");
        let popUpView = document.createElement("div");
        popUpView.setAttribute("id", "tabEvent");
        popUpView.appendChild(document.createElement("div"));
        popUpView.firstChild.appendChild(document.createElement("div"));
        popUpView.firstChild.firstChild.setAttribute("data-is-meet-selected",true);
        popUpView.firstChild.firstChild.setAttribute("popup-meeting",true);
        container.appendChild(popUpView);

        let newNode = viewNodeCreator.createNode(container); 

        //creates node 
        expect(newNode.getAttribute("data-is-meet-selected")).toBe("true");
        expect(newNode.getAttribute("popup-meeting")).toBe("true");
        expect(newNode.getAttribute("id")).toBe("my-new-button");   

        //appends new node to cloned node as sibling        
        expect(popUpView.firstChild.childNodes.length).toBe(2);                
        expect(popUpView.firstChild.childNodes[1]).toBe(newNode);         
    });

    it("creates and appends a clone of Meeting Conference node and returns it, if Calendar Deatils Fullscreen View is opened", () => {
        let viewNodeCreator = new CalendarViewNodeCreator();           

        let container = document.createElement("div");        
        let fullScreenView = document.createElement("div");
        fullScreenView.setAttribute("id", "tabEventDetails"); 
        fullScreenView.appendChild(document.createElement("div"));          
        fullScreenView.firstChild.setAttribute("fullscreen-meeting",true);     
        container = document.createElement("div");
        container.appendChild(fullScreenView);

        let newNode = viewNodeCreator.createNode(container);         
        
        //creates node 
        expect(newNode.getAttribute("fullscreen-meeting")).toBe("true");
        expect(newNode.getAttribute("id")).toBe("my-new-button");   

        //appends new node to cloned node as sibling        
        expect(fullScreenView.childNodes.length).toBe(2);                
        expect(fullScreenView.childNodes[1]).toBe(newNode);
    });
});

