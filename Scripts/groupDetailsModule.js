const groupDetailsModule = (() => {
    let domElements = {};
    let architectureDetailsObj = store.state.architectureDetailsObj;
    let groupDetailsObj = {};
    let entityDetailsObj = {};
    const displayGroupDetailsContainer = () => {
        let $groupDetailsContainer = domElements.groupDetailsContainer;
        $groupDetailsContainer.removeClass('display-none');
    }
    const hideGroupDetailsContainer = (questionDetailsObj) => {     
        let $architectureDropdownList = domElements.architectureNameList;
        let $selectedArchitecture = $architectureDropdownList.find('option:selected');
        let selectedArchitectureName = $selectedArchitecture.attr('value');
        let selectedArchitectureId = $selectedArchitecture.attr('data-id');
        let $groupNameInput = domElements.groupNameInput;
        let selectedGroupId = $groupNameInput.attr('data-id');
        let $entityList = domElements.entityList;
        let $selectedEntity = $entityList.find('option:selected');
        let selectedEntityName = $selectedEntity.attr('value');
        let selectedEntityId = $selectedEntity.attr('data-id');
        let $groupDetailsContainer = domElements.groupDetailsContainer;
        let $groupInputContainer = domElements.groupInputContainer;
        let $entityNameList = domElements.entityNameList;
        let $questionDropdownList = domElements.questionDropdownList;
        let $optionDropdownList = domElements.optionDropdownList;
        let $questionName = domElements.questionName;
        let groupName = $groupNameInput.val();
        let entityObj  = {};
        let questions = [];
        if ($questionName.attr('disabled') == 'disabled') {
            $questionName.removeAttr('disabled');
        }
        $("#question-dropdown-list option").each(function()
        {
            let questionId = $(this).attr('data-id');
                questions.push(questionId);          
        });
        $("#entity-name-list option").each(function()
        {
            let entityId = $(this).attr('data-id');
            let entityName = $(this).attr('value');
            entityObj[entityId] = {};
            entityObj[entityId].name = entityName;
            entityObj[entityId].isActive = 'true';
            entityObj[entityId].parentEnitites = {};
            entityObj[entityId].questions = questions;
            entityObj[entityId].filteredBy = "";
        });
        console.log(entityObj);
        if (!(selectedArchitectureId in architectureDetailsObj)) {
            architectureDetailsObj[selectedArchitectureId] = {};
            architectureDetailsObj[selectedArchitectureId].name = selectedArchitectureName;
            if (!(groupName in groupDetailsObj)) {
                architectureDetailsObj[selectedArchitectureId].groups = {};
                architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId] = {};
                architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].name = groupName;
                architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].isActive = 'false';
                architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].relatedGroups = {};
                if (!(selectedEntityId in entityDetailsObj)) {
                    architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].enitities = entityObj;
                }
            }
        }
        else {
            architectureDetailsObj[selectedArchitectureId].name = selectedArchitectureName;
            if (!(groupName in groupDetailsObj)) {
                architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId] = {};
                architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].name = groupName;
                architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].isActive = 'false';
                architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].relatedGroups = {};
                if (!(selectedEntityId in entityDetailsObj)) {
                    architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].enitities = entityObj;
                }

            }
        }
        $entityNameList.empty();
        $entityList.empty();
        $optionDropdownList.empty();
        $questionDropdownList.empty();
        $groupInputContainer.addClass('display-none');
        $groupDetailsContainer.addClass('display-none');
        $questionName.val('');
        console.log(architectureDetailsObj);
        store.setArchitectureDetailsObj (architectureDetailsObj);
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
        domElements.optionDropdownList = $('#option-dropdown-list');
        domElements.questionName = $('#question-name');
        domElements.architectureNameList = $('#architecture-name-list');
        domElements.groupNameInput = $('#groupName-input');
    }
    return {
        domElements,
        InitializeDomElements,
        displayGroupDetailsContainer,
        hideGroupDetailsContainer,
        architectureDetailsObj
    }
})()