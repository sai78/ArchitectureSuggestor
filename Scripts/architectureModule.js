const architectureModule = (() => {
    let domElements = {};
    // Add newly created group to architecture dropdown list
    const addToArchitectureDropdown = (optionTemplate) => {
        let $architectureDropdownList = domElements.architectureNameList;
        let $architectureEditBtn = domElements.architectureEditBtn;
        let $architectureDeleteBtn = domElements.architectureDeleteBtn;
        let $architectureName = domElements.architectureName;
        let architectureName = $architectureName.val();
        if(architectureName === '')
        {
            alert('please enter Architecture Name');
        }
        else{
        let architectureIdCounter = store.state.architectureIdCounter;
        $architectureName.val('');
        $architectureDropdownList.prepend(
            optionTemplate.replace('#option#', architectureName)
                .replace('#name#', architectureName)
                .replace('#value#', architectureIdCounter)
        );
        $architectureEditBtn.removeClass('display-none');
        $architectureDeleteBtn.removeClass('display-none');
        store.incrementArchitectureIdCounter();
        $architectureDropdownList.val($architectureDropdownList.find('option').first().val());
        }
    }
    // Initialize DOM elements for architecture Component
    const InitializeDomElements = () => {
        domElements.architectureAddBtn = $('#architecture-add-btn');
        domElements.architectureName = $('#architecture-name');
        domElements.architectureNameList = $('#architecture-name-list');
        domElements.architectureEditBtn = $('#architecture-edit-btn');
        domElements.architectureDeleteBtn = $('#architecture-delete-btn');
        domElements.architectureEditSaveBtn = $('#architecture-edit-save-btn');
    }
    return {
        domElements,
        addToArchitectureDropdown,
        InitializeDomElements
    }
})()