const groupModule = (() => {
    // Initialize DOM elements for group component
    let domElements = {};
    let groupId = 1;
    //Add newly created group to group dropdown list
    const addToGroupDropdown = () => {
        let $groupNameInput = domElements.groupNameInput;
        let $groupName = domElements.groupName;    
        let architectureNameListLength = $("#architecture-name-list option").length;
        let groupName = $groupName.val();
        if (groupName === '' || architectureNameListLength == 0) {
            alert('please enter Name');
        }
        else {
            $groupNameInput.val(groupName);
            $groupName.val('');
            $groupNameInput.attr('data-id',groupId);
            let $groupInputContainer = domElements.groupInputContainer;
            $groupInputContainer.removeClass('display-none');
        }
        groupId += 1;
    }
    // Initialize DOM elements for architecture component
    const InitializeDomElements = () => {
        domElements.groupAddBtn = $('#group-add-btn');
        domElements.groupName = $('#group-name');
        domElements.groupInputContainer = $('#group-input-container');
        domElements.groupNameInput = $('#groupName-input');
        domElements.architectureNameList = $('#architecture-name-list');
    }
    return {
        domElements,
        addToGroupDropdown,
        InitializeDomElements,
    }
})()