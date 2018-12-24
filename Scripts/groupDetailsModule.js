const groupDetailsModule = (() => {
    let domElements = {};
    let architectureDetailsObj = {};
    let groupDetailsObj = {};
    let entityDetailsObj = {};
    let selectedGroupId = 0;
    const displayGroupDetailsContainer = () => {
        let $groupDetailsContainer = domElements.groupDetailsContainer;
        $groupDetailsContainer.removeClass('display-none');
    }
    const hideGroupDetailsContainer = () => {
        let $groupDetailsContainer = domElements.groupDetailsContainer;
        let $groupInputContainer = domElements.groupInputContainer;
        let $entityNameList = domElements.entityNameList;
        let $entityList = domElements.entityList;
        let $selectedEntity = $entityList.find('option:selected');
        let selectedEntityName = $selectedEntity.attr('value');
        let selectedEntityId = $selectedEntity.attr('data-id');
        let $questionDropdownList = domElements.questionDropdownList;
        let $optionDropdownList = domElements.optionDropdownList;
        let $questionName = domElements.questionName;
        let $architectureDropdownList = domElements.architectureNameList;
        let $groupNameInput = domElements.groupNameInput;
        let groupName = $groupNameInput.val();
        selectedGroupId += 1;
        let $selectedArchitecture = $architectureDropdownList.find('option:selected');
        let selectedArchitectureName = $selectedArchitecture.attr('value');
        let selectedArchitectureId = $selectedArchitecture.attr('data-id');
        $entityNameList.empty();
        $entityList.empty();
        $optionDropdownList.empty();
        $questionDropdownList.empty();
        $groupInputContainer.addClass('display-none');
        $groupDetailsContainer.addClass('display-none');
        $questionName.val('');
        if ($questionName.attr('disabled') == 'disabled') {
            $questionName.removeAttr('disabled');
        }

        if (!(selectedArchitectureId in architectureDetailsObj)) {
            architectureDetailsObj[selectedArchitectureId] = {};
            architectureDetailsObj[selectedArchitectureId].name = selectedArchitectureName;
            if (!(groupName in groupDetailsObj)) {
                architectureDetailsObj[selectedArchitectureId].groups = {};
                architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId] = {};
                architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].name = groupName;
                architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].RelatedGroups = {};
                architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].isActive = 'false';
                if (!(selectedEntityId in entityDetailsObj)) {
                    architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].enitities = {};
                    architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].enitities[selectedEntityId] = {};
                    architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].enitities[selectedEntityId].name = selectedEntityName;
                    architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].enitities[selectedEntityId].isActive = 'false';
                    architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].enitities[selectedEntityId].parentEnitites = {};
                    architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].enitities[selectedEntityId].questions = [];
                    architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].enitities[selectedEntityId].filteredBy = "";
                }

            }
        }
        else{
            architectureDetailsObj[selectedArchitectureId].name = selectedArchitectureName;
            if (!(groupName in groupDetailsObj)) {
                architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId] = {};
                architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].name = groupName;
                architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].RelatedGroups = {};
                architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].isActive = 'false';
                if (!(selectedEntityId in entityDetailsObj)) {
                    architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].enitities = {};
                    architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].enitities[selectedEntityId] = {};
                    architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].enitities[selectedEntityId].name = selectedEntityName;
                    architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].enitities[selectedEntityId].isActive = 'false';
                    architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].enitities[selectedEntityId].parentEnitites = {};
                    architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].enitities[selectedEntityId].questions = [];
                    architectureDetailsObj[selectedArchitectureId].groups[selectedGroupId].enitities[selectedEntityId].filteredBy = "";
                }

            }
        }
        console.log(architectureDetailsObj);
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
        hideGroupDetailsContainer
    }
})()