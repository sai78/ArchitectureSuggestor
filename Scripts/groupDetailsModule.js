const groupDetailsModule = (() => {
    let domElements = {};
    const displayGroupDetailsContainer = () => {
        let $groupDetailsContainer = domElements.groupDetailsContainer;
        $groupDetailsContainer.removeClass('display-none');
    }
    const hideGroupDetailsContainer = () => {
        let $groupDetailsContainer = domElements.groupDetailsContainer;
        let  $groupInputContainer = domElements.groupInputContainer;
        let $entityNameList = domElements.entityNameList;
        let $entityList = domElements.entityList;
        let $questionDropdownList = domElements.questionDropdownList;
        $entityNameList.empty();
        $entityList.empty();
        $questionDropdownList.empty();
        $groupInputContainer.addClass('display-none');
        $groupDetailsContainer.addClass('display-none');

    }
    // Initialize DOM elements for group  details Component
    const InitializeDomElements = () => {
        domElements.groupDetailsDisplayBtn = $('#group-details-display-btn');
        domElements.groupDetailsContainer = $('#group-details-container');
        domElements.saveGroupDetailsBtn = $('#save-group-details-btn');
        domElements.groupInputContainer = $('#group-input-container');
        domElements.entityNameList = $('#entity-name-list');
        domElements.entityList = $('#entity-list');
        domElements.questionDropdownList = $('#question-dropdown-list');
    }
    return {
        domElements,
        InitializeDomElements,
        displayGroupDetailsContainer,
        hideGroupDetailsContainer
    }
})()