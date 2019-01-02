const questionOptionsModule = (() => {
    let domElements = {};
    let questionEntityMappingObj = store.state.questionEntityMappingObj;
    let questionDetailsObj = store.state.questionDetailsObj;
    let optionList = [];
    let url ='http://localhost:3000/';
    // Add options to options dropdown list
    const addToOptionDropdown = (optionTemplate) => {
        let $optionDropdownList = domElements.optionDropdownList;
        let optionDropdownListOption = "#option-dropdown-list option";
        let $questionName = domElements.questionName;
        let questionIdCounter = store.state.questionIdCounter;
        let $optionName = domElements.optionName;
        let optionIdCounter = store.state.optionIdCounter;
        let optionName = $optionName.val();
        if (optionName === '') {
            alert('Please enter value for option');
        }
        else {

            $optionDropdownList.prepend(
                optionTemplate.replace('#option#', optionName)
                    .replace('#name#', optionName)
                    .replace('#id#', optionIdCounter)
            );
            if (($questionName.attr('disabled') != 'disabled')) {
                optionList.push(optionName);
            }
            else {
                $(optionDropdownListOption).each(function () {
                    optionList.push(this.value)
                });
            }
        }
        $optionName.val('');
        $optionDropdownList.val($optionDropdownList.find('option').last().val());
        store.incrementOptionIdCounter();
    }
    // Add question to questions dropdown list
    const addToQuestionDropdown = (optionTemplate) => {
        let optionSelected = 'option:Selected';
        let $architectureNameList = domElements.architectureNameList;
        let $selectedArchitecture = $architectureNameList.find(optionSelected);
        let selectedArchitectureName = $selectedArchitecture.attr('value');
        let selectedArchitectureId = $selectedArchitecture.attr('data-id');
        let $entityDropdownList = domElements.entityDropdownList;
        let $selectedEntity = $entityDropdownList.find(optionSelected);
        let selectedEntityId = $selectedEntity.attr('data-id');
        let $optionDropdownList = domElements.optionDropdownList;
        let $selectedOption = $optionDropdownList.find(optionSelected);
        let selectedOptionValue = $selectedOption.attr('value');
        let $questionName = domElements.questionName;
        let questionName = $questionName.val();
        let $questionDropdownList = domElements.questionDropdownList;
        let $selectedQuestion = $questionDropdownList.find(optionSelected);
        let slectedQuestionId = $selectedQuestion.attr('data-id');
        let questionIdCounter = store.state.questionIdCounter;
        let $groupNameInput = domElements.groupNameInput;
        let groupId = $groupNameInput.attr('data-id');
        let groupName = $groupNameInput.val();
        if (questionName === '') {
            alert('Please enter value for option');
        }
        else {
            $questionName.val('');
            if (!(selectedArchitectureId in questionDetailsObj)) {
                questionDetailsObj[selectedArchitectureId] = {};
                questionDetailsObj[selectedArchitectureId].groups = {};
                if (($questionName.attr('disabled') != 'disabled')) {
                    if (!(groupId in questionDetailsObj[selectedArchitectureId].groups)) {
                        questionDetailsObj[selectedArchitectureId].groups[groupId] = {};
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter] = {}
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter].question = questionName;
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter].choices = optionList;
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter].isActive = 'false';
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter].multiple = 'true';
                    }
                    else {
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter] = {}
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter].question = questionName;
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter].choices = optionList;
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter].isActive = 'false';
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter].multiple = 'true';
                    }
                    $questionDropdownList.prepend(
                        optionTemplate.replace('#option#', questionName)
                            .replace('#name#', questionName)
                            .replace('#id#', questionIdCounter)
                    );
                }
                else {
                    questionDetailsObj[selectedArchitectureId].groups[groupId][slectedQuestionId] = {};
                    questionDetailsObj[selectedArchitectureId].groups[groupId][slectedQuestionId].question = questionName;
                    questionDetailsObj[selectedArchitectureId].groups[groupId][slectedQuestionId].choices = optionList;
                    questionDetailsObj[selectedArchitectureId].groups[groupId][slectedQuestionId].isActive = 'false';
                    questionDetailsObj[selectedArchitectureId].groups[groupId][slectedQuestionId].multiple = 'true';
                }
            }
            else {
                if (($questionName.attr('disabled') != 'disabled')) {
                    if (!(groupId in questionDetailsObj[selectedArchitectureId].groups)) {
                        questionDetailsObj[selectedArchitectureId].groups[groupId] = {};
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter] = {}
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter].question = questionName;
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter].choices = optionList;
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter].isActive = 'false';
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter].multiple = 'true'
                    }
                    else {
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter] = {}
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter].question = questionName;
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter].choices = optionList;
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter].isActive = 'false';
                        questionDetailsObj[selectedArchitectureId].groups[groupId][questionIdCounter].multiple = 'true';
                    }
                    $questionDropdownList.prepend(
                        optionTemplate.replace('#option#', questionName)
                            .replace('#name#', questionName)
                            .replace('#id#', questionIdCounter)
                    );
                }
                else {
                    questionDetailsObj[selectedArchitectureId].groups[groupId][slectedQuestionId] = {};
                    questionDetailsObj[selectedArchitectureId].groups[groupId][slectedQuestionId].question = questionName;
                    questionDetailsObj[selectedArchitectureId].groups[groupId][slectedQuestionId].choices = optionList;
                    questionDetailsObj[selectedArchitectureId].groups[groupId][slectedQuestionId].isActive = 'false';
                    questionDetailsObj[selectedArchitectureId].groups[groupId][slectedQuestionId].multiple = 'true';
                }
            }
            if ($questionName.attr('disabled') != 'disabled') {
                if (!(questionIdCounter in questionEntityMappingObj)) {
                    questionEntityMappingObj[questionIdCounter] = {};
                    questionEntityMappingObj[questionIdCounter][selectedEntityId] = selectedOptionValue;
                }
            }
            else {
                questionEntityMappingObj[slectedQuestionId][selectedEntityId] = selectedOptionValue;
            }
            optionList = [];
            $questionDropdownList.val($questionDropdownList.find('option').first().val())
            $optionDropdownList.empty();
            store.incrementQuestionIdCounter();
            if ($questionName.attr('disabled') == 'disabled') {
                $questionName.removeAttr('disabled');
            }
            console.log(questionDetailsObj);
            console.log(questionEntityMappingObj);
            store.setQuestionDetailsObj(questionDetailsObj);
            store.setQuestionEntityMappingObj(questionEntityMappingObj);
        }
    }
    // Display selected question and option values
    const displaySelectedQuestion = (optionTemplate) => {
        let $questionName = domElements.questionName;
        let optionSelected = 'option:Selected';
        let $questionDropdownList = domElements.questionDropdownList;
        let $selectedOption = $questionDropdownList.find(optionSelected);
        let selectedQuestionValue = $selectedOption.attr('data-id');
        let selectedQuestionName = $selectedOption.attr('value');
        let $optionDropdownList = domElements.optionDropdownList;
        let $architectureNameList = domElements.architectureNameList;
        let $selectedArchitecture = $architectureNameList.find(optionSelected);
        let selectedArchitectureId = $selectedArchitecture.attr('data-id');
        let $groupNameInput = domElements.groupNameInput;
        let groupId = $groupNameInput.attr('data-id');
        $questionName.val(selectedQuestionName);
        $questionName.attr('disabled', 'true');
        if (selectedQuestionValue in questionDetailsObj[selectedArchitectureId].groups[groupId]) {
            $optionDropdownList.empty();
            for (let x = 0; x < questionDetailsObj[selectedArchitectureId].groups[groupId][selectedQuestionValue].choices.length; x++) {
                $optionDropdownList.prepend(
                    optionTemplate.replace('#option#', questionDetailsObj[selectedArchitectureId].groups[groupId][selectedQuestionValue].choices[x])
                        .replace('#name#', questionDetailsObj[selectedArchitectureId].groups[groupId][selectedQuestionValue].choices[x])
                        .replace('#id#', questionDetailsObj[selectedArchitectureId].groups[groupId][selectedQuestionValue].choices[x])
                )
            }
        }
    }
    // Initializing DOM elements
    const InitializeDomElements = () => {
        domElements.entityDropdownList = $('#entity-list');
        domElements.questionName = $('#question-name');
        domElements.optionName = $('#option-name');
        domElements.optionDropdownList = $('#option-dropdown-list');
        domElements.optionAddBtn = $('#option-add-btn');
        domElements.questionOptionSaveBtn = $('#question-option-save-btn');
        domElements.questionDropdownList = $('#question-dropdown-list');
        domElements.architectureNameList = $('#architecture-name-list');
        domElements.groupNameInput = $('#groupName-input');

    }
    return {
        domElements,
        InitializeDomElements,
        addToQuestionDropdown,
        addToOptionDropdown,
        displaySelectedQuestion,
        questionEntityMappingObj,
        questionDetailsObj
    }
})();