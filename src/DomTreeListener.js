
export default class DomTreeListener {

    constructor(){
        this.observer = undefined;        
    }

    /**
     * adds a listener to the given dom element and when the dom subtree changed
     * fires the given function.
     * @param {Element} targetNode The element to be listened for dom changes
     * @param {function} onTreeChanged The function that will be called on dom changes
     */
    addListener(targetNode, onTreeChanged) {
        const config = {childList: true, subtree: true };

        const callback = function(mutationsList, observer) {
            onTreeChanged(targetNode);       
        };

        this.observer = new MutationObserver(callback);
        this.observer.observe(targetNode, config);
    }

    /**
     * removes the listener
     */
    removeListener(){
        this.observer.disconnect();
    }
}