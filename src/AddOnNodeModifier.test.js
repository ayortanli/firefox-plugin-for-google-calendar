import AddOnNodeModifier from "./AddOnNodeModifier";

describe("AddOnNodeModifier", () => {        

    it("edits given cloned Meeting Conference node content with our addon content", () => {
        let node = createTestNode();

        let modifier = new AddOnNodeModifier().setAddOnContent(node);

        //google specific attribute removal control
        expect(node.getAttribute("jsaction")).toBeNull();
        expect(node.getAttribute("jsname")).toBeNull();
        expect(node.getAttribute("jscontroller")).toBeNull();
        let button = node.querySelector("#my-new-button");        
        expect(button.getAttribute("jsaction")).toBeNull();
        expect(button.getAttribute("jsname")).toBeNull();
        expect(button.getAttribute("jscontroller")).toBeNull();

        //check image modifications
        let image = node.querySelector("#my-new-image");
        expect(image.getAttribute("src")).toBe("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Firefox_Logo%2C_2017.png/64px-Firefox_Logo%2C_2017.png");

        //check button modification        
        let buttonContent = node.querySelector("#my-new-buttonContent");
        expect(buttonContent.innerHTML).toBe("My New Button");
    });
});

function createTestNode(){
    let html =     
    '<div id="my-new-component" jsaction="a" jsname="b" jscontroller="c">'+
        '<div id="test">'+
            '<img src="http://test-url"/>'+
            '<div role="button" role="button" jsaction="a" jsname="b" jscontroller="c">'+
                '<div id="first"></div>'+
                '<div id="last">'+
                    '<div id="buttonContent">Button name before modification</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';
    let template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}