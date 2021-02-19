
const modifyPopupVew = containerNode => {
    containerNode.style.border = "5px solid red"; 
}

const modifyFullScreenView = containerNode => {
    containerNode.style.border = "5px solid red"; 
}


const modifyView = node => {
    var container = node.querySelector("#tabEvent") || node.querySelector("#tabEventDetails");
        if(container)
            if(container.getAttribute("id")==="tabEvent")
                modifyPopupVew(container);
            else
                modifyFullScreenView(container);

}
export default {modifyView};