const entityModule = (() => {
    let domElements = {};
    // Add newly created entity to entity dropdown list
    const addToEntityDropdown = (optionTemplate, entityList) => {
        let $entityDropdownList = domElements.entityDropdownList;
        let $entityEditBtn = domElements.entityEditBtn;
        let $entityDeleteBtn = domElements.entityDeleteBtn;
        let $entityName = domElements.entityName;
        let entityName = $entityName.val();
        if (entityName === '') {
            alert('Please enter value for Entity')
        }
        else {
            let entityIdCounter = store.state.entityIdCounter;
            $entityName.val('');
            $entityDropdownList.prepend(
                optionTemplate.replace('#option#', entityName)
                    .replace('#name#', entityName)
                    .replace('#value#', entityIdCounter)
            );
            $entityEditBtn.removeClass('display-none');
            $entityDeleteBtn.removeClass('display-none');
            store.incrementEntityIdCounter();
            $entityDropdownList.val($entityDropdownList. find('option'). first(). val());
            entityList.prepend(
                optionTemplate.replace('#option#', entityName)
                    .replace('#name#', entityName)
                    .replace('#value#', entityIdCounter)
            );
            entityList.val($entityDropdownList. find('option'). first(). val());
        }
    }
    // Initializing DOM elements
    const InitializeDomElements = () => {
        domElements.entityAddBtn = $('#entity-add-btn');
        domElements.entityName = $('#entity-name');
        domElements.entityDropdownList = $('#entity-name-list');
        domElements.entityEditBtn = $('#entity-edit-btn');
        domElements.entityDeleteBtn = $('#entity-delete-btn');
        domElements.entityEditSaveBtn = $('#entity-edit-save-btn');
    }
    return {
        domElements,
        addToEntityDropdown,
        InitializeDomElements
    }
})();