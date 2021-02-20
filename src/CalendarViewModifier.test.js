import CalendarViewModifier from "./CalendarViewModifier";

describe("CalendarViewModifier viewModify method", () => {    
    
    const container = document.createElement("div");

    const popUpView = document.createElement("div");
    popUpView.setAttribute("id", "tabEvent");

    const fullScreenView = document.createElement("div");
    fullScreenView.setAttribute("id", "tabEventDetails"); 

    const modifiedView = document.createElement("div");
    modifiedView.setAttribute("id", "my-new-button"); 

    it("calls related modify method when popupView/fullscreenView is active in calendar and not already modified", () => {
        let modifier = new CalendarViewModifier();        
        modifier.editFullScreenView = jest.fn();
        modifier.editPopupView = jest.fn();

        modifier.editView(container);  //nothing to edit
        expect(modifier.editFullScreenView.mock.calls.length).toBe(0);
        expect(modifier.editPopupView.mock.calls.length).toBe(0);        

        container.appendChild(modifiedView);
        modifier.editView(container);  //already modified so nothing to edit
        expect(modifier.editFullScreenView.mock.calls.length).toBe(0);
        expect(modifier.editPopupView.mock.calls.length).toBe(0);
        
        container.removeChild(modifiedView);
        container.appendChild(popUpView);
        modifier.editView(container);  //call popupView Node Finder
        expect(modifier.editFullScreenView.mock.calls.length).toBe(0);
        expect(modifier.editPopupView.mock.calls.length).toBe(1);

        container.removeChild(popUpView);
        container.appendChild(fullScreenView);
        modifier.editView(container);  //call fullscreenView Node Finder
        expect(modifier.editFullScreenView.mock.calls.length).toBe(1);
        expect(modifier.editPopupView.mock.calls.length).toBe(1);
    });
});