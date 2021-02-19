import DomTreeListener from "./DomTreeListener";


describe("DomTreeListener", () => {    
    const div = document.createElement("div");    
    const listener = new DomTreeListener();

    it("calls given function when dom subtree is changed", done => {
        const callback = (nodeTree) => {
            expect(nodeTree).toBe(div);
            listener.removeListener();
            done(); //in order to force jest to wait for callback function call before exiting test
        }
        listener.addListener(div, callback);
        div.appendChild(document.createElement("div"));  
    });
});

