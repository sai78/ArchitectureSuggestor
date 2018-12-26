const questionOptionsModule = (() => {
    let domElements = {};
    let questionEntityMappingObj = {};
    let questionDetailsObj = {};
    let optionList = [];
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

        if (questionName === '') {
            alert('Please enter value for option');
        }
        else {
            $questionName.val('');
            $questionDropdownList.prepend(
                optionTemplate.replace('#option#', questionName)
                    .replace('#name#', questionName)
                    .replace('#id#', questionIdCounter)
            );
            if (!(selectedArchitectureId in questionDetailsObj) && ($questionName.attr('disabled') != 'disabled')) {
                questionDetailsObj[selectedArchitectureId] = {};
                questionDetailsObj[selectedArchitectureId].groups = {};
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
            }
            else {

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
                optionList = [];
                $questionDropdownList.val($questionDropdownList.find('option').first().val())
            }
            if($questionName.attr('disabled') != 'disabled')
            {
                if(!(questionIdCounter in questionEntityMappingObj))
                {
                questionEntityMappingObj[questionIdCounter] = {};
                questionEntityMappingObj[questionIdCounter][selectedEntityId] = selectedOptionValue;
                }
            }
            else
            {
                questionEntityMappingObj[slectedQuestionId][selectedEntityId] = selectedOptionValue;
            }
            $optionDropdownList.empty();
            store.incrementQuestionIdCounter();
            if ($questionName.attr('disabled') == 'disabled') {
                $questionName.removeAttr('disabled');
            }
            console.log(questionDetailsObj);
            console.log(questionEntityMappingObj);
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
        $questionName.val(selectedQuestionName);
        $questionName.attr('disabled', 'true');
        if (selectedQuestionValue in questionDetailsObj) {
            $optionDropdownList.empty();
            for (let x = 0; x < questionDetailsObj[selectedQuestionValue].options.length; x++) {
                $optionDropdownList.prepend(
                    optionTemplate.replace('#option#', questionDetailsObj[selectedQuestionValue].options[x])
                        .replace('#name#', questionDetailsObj[selectedQuestionValue].options[x])
                        .replace('#id#', questionDetailsObj[selectedQuestionValue].options[x])
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