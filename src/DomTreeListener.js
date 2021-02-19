
const addListener = (targetNode, onTreeChanged) => {
    const config = {childList: true, subtree: true };

    const callback = function(mutationsList, observer) {
        onTreeChanged(targetNode);       
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
}

export default {addListener};