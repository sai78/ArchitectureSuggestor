const groupModule = (() => {

    // Initialize DOM elements for group component
    let domElements = {};

    //Add newly created group to group dropdown list
    const addToGroupDropdown = () =>{
        let $groupInput = domElements.groupInput;
        let groupName = domElements.groupName;
        let groupNameValue = groupName.val();
        groupName.val('');
        let $groupInputContainer = domElements.groupInputContainer;
        $groupInputContainer.removeClass('display-none');
        $groupInput.val(groupNameValue);
    }
  
     // Initialize DOM elements for architecture component
     const InitializeDomElements = () => {
        domElements.groupAddBtn = $('#group-add-btn');
        domElements.groupName = $('#group-name');
        domElements.groupInputContainer = $('#group-input-container');
        domElements.groupInput = $('#group-input');
     }
    return {
        domElements,
        addToGroupDropdown,
        InitializeDomElements,
    }
})()