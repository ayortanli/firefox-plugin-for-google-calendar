
export default class DomTreeListener {

    constructor(){
        this.observer = undefined;        
    }


    addListener(targetNode, onTreeChanged) {
        const config = {childList: true, subtree: true };

        const callback = function(mutationsList, observer) {
            onTreeChanged(targetNode);       
        };

        this.observer = new MutationObserver(callback);
        this.observer.observe(targetNode, config);
    }

    removeListener(){
        this.observer.disconnect();
    }
}