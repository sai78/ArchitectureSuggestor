const questionOptionsModule = (() => {
    let domElements = {};
    // Add options to options dropdown list
    const addToOptionDropdown = (optionTemplate) => {
        let $optionDropdownList = domElements.optionDropdownList;
        let $optionEditBtn = domElements.optionEditBtn;
        let $optionDeleteBtn = domElements.optionDeleteBtn;
        let $optionName = domElements.optionName;
        let optionName = $optionName.val();
        if(optionName === '') {
            alert('Please enter value for option');
        }
        else {
            let architectureIdCounter = store.state.optionIdCounter;
            $optionName.val('');
            $optionDropdownList.prepend(
                optionTemplate.replace('#option#', optionName)
                    .replace('#name#', optionName)
                    .replace('#value#', architectureIdCounter)
            );
            $optionEditBtn.removeClass('display-none');
            $optionDeleteBtn.removeClass('display-none');
            store.incrementOptionIdCounter();
            $optionDropdownList.val($optionDropdownList.find('option').first().val());
        }
    }
    // Initializing DOM elements
    const InitializeDomElements = () => {
        domElements.optionName = $('#option-name');
        domElements.optionAddBtn = $('#option-add-btn');
        domElements.optionDropdownList = $('#option-list');
        domElements.optionEditBtn = $('#option-edit-btn');
        domElements.optionDeleteBtn = $('#option-delete-btn');
        domElements.entityList = $('#entity-list');
        domElements.optionEditSaveBtn = $('#option-edit-save-btn');
    }
    return {
        domElements,
        addToOptionDropdown,
        InitializeDomElements
    }
})();