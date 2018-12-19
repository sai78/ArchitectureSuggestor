const groupModule = (() => {
    // Initialize DOM elements for group component
    let domElements = {};
    //Add newly created group to group dropdown list
    const addToGroupDropdown = () => {
        let $groupNameInput = domElements.groupNameInput,
            $groupName = domElements.groupName,
            $architectureName = domElements.architectureName,
            architectureName = $architectureName.val(),
            groupName = $groupName.val();
        if (groupName === '' || architectureName === '') {
            alert('please enter Name');
        }
        else {
            $groupNameInput.val(groupName);
            $groupName.val('');
            let $groupInputContainer = domElements.groupInputContainer;
            $groupInputContainer.removeClass('display-none');
        }
    }
    // Initialize DOM elements for architecture component
    const InitializeDomElements = () => {
        domElements.groupAddBtn = $('#group-add-btn');
        domElements.groupName = $('#group-name');
        domElements.groupInputContainer = $('#group-input-container');
        domElements.groupNameInput = $('#groupName-input');
        domElements.architectureName = $('#architecture-name');
    }
    return {
        domElements,
        addToGroupDropdown,
        InitializeDomElements,
    }
})()