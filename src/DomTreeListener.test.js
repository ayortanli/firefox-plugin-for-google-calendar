import DomTreeListener from "./DomTreeListener";


describe("DomTreeListener", () => {    
    const div = document.createElement("div");

    it("calls given function when dom subtree is changed", done => {
        const callback = (nodeTree) => {
            expect(nodeTree).toBe(div);
            done(); //in order to force jest to wait for callback function call before 
        }
        DomTreeListener.addListener(div, callback);
        div.appendChild(document.createElement("div"));   
    });
});

