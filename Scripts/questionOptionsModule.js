const questionOptionsModule = (() => {
    let domElements = {};
    let entityQuestionObj = {};
    let questionOptionObj = {};
    let optionList = [];

    // Add options to options dropdown list
    const addToOptionDropdown = (optionTemplate) => {
        let $optionDropdownList = domElements.optionDropdownList;
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
                    .replace('#value#', optionIdCounter)
            );
            //if (optionObj.length == 0 ? optionObj.push(optionName):optionObj.push('!'+ optionName ));
            optionList.push(optionName);
            $optionName.val('');
            $optionDropdownList.val($optionDropdownList.find('option').last().val());
            store.incrementOptionIdCounter();
        }
    }
    // Add question to questions dropdown list
    const addToQuestionDropdown = (optionTemplate) => {
        let $entityDropdownList = domElements.entityDropdownList;
        let optionSelected = 'option:Selected';
        let dataName = 'data-Name';
        let $optionDropdownList = domElements.optionDropdownList;
        let $questionDropdownList = domElements.questionDropdownList;
        let $questionName = domElements.questionName;
        let $selectedEntity = $entityDropdownList.find(optionSelected);
        let selectedEntityName = $selectedEntity.attr(dataName);
        let selectedEntityId = $selectedEntity.attr('value');
        let $selectedOption = $optionDropdownList.find(optionSelected);
        let selectedOptionName = $selectedOption.attr(dataName);
        let questionName = $questionName.val();
        let questionIdCounter = store.state.questionIdCounter;
        if (questionName === '') {
            alert('Please enter value for option');
        }
        else {
            $questionName.val('');
            if (!(questionIdCounter in questionOptionObj) && ($questionName.attr('disabled') != 'disabled')) {
                questionOptionObj[questionIdCounter] = {};
                questionOptionObj[questionIdCounter].description = questionName;
                questionOptionObj[questionIdCounter].options = optionList;
                $questionDropdownList.prepend(
                    optionTemplate.replace('#option#', questionName)
                        .replace('#name#', questionName)
                        .replace('#value#', questionIdCounter)
                );
            }
            else {
                let optionSelected = 'option:Selected';
                let dataName = 'data-Name';
                $optionDropdownList.each(function () {
                    optionList.push($optionDropdownList.text())
                });
                let $selectedQuestionOption = $questionDropdownList.find(optionSelected);
                let selectedQuestionOptionVal = $selectedQuestionOption.attr('value');
                let selectedQuestionOptionName = $selectedQuestionOption.attr(dataName);
                questionOptionObj[selectedQuestionOptionVal] = {};
                questionOptionObj[selectedQuestionOptionVal].description = selectedQuestionOptionName;
                questionOptionObj[selectedQuestionOptionVal].options = optionList;
            }
            optionList = [];
            if (!(selectedEntityId in entityQuestionObj)) {
                entityQuestionObj[selectedEntityId] = {};
                entityQuestionObj[selectedEntityId][questionIdCounter] = {};
                entityQuestionObj[selectedEntityId][questionIdCounter].selectedOptionName = selectedOptionName;
            }
            else {
                entityQuestionObj[selectedEntityId][questionIdCounter] = {};
                entityQuestionObj[selectedEntityId][questionIdCounter].selectedOptionName = selectedOptionName;
            }
            $questionDropdownList.val($questionDropdownList.find('option').first().val())
        }
        $optionDropdownList.empty();
        store.incrementQuestionIdCounter();
        if ($questionName.attr('disabled') == 'disabled') {
            $questionName.removeAttr('disabled');
        }

    }
    // Display selected question and option values
    const displaySelectedQuestion = (optionTemplate) => {
        let $questionName = domElements.questionName;
        let optionSelected = 'option:Selected';
        let dataName = 'data-Name';
        let $questionDropdownList = domElements.questionDropdownList;
        let $selectedOption = $questionDropdownList.find(optionSelected);
        let selectedQuestionValue = $selectedOption.attr('value');
        let selectedQuestionName = $selectedOption.attr(dataName);
        let $optionDropdownList = domElements.optionDropdownList;
        $questionName.val(selectedQuestionName);
        $questionName.attr('disabled', 'true');
        if (selectedQuestionValue in questionOptionObj) {
            $optionDropdownList.empty();
            $optionDropdownList.prepend(
                optionTemplate.replace('#option#', questionOptionObj[selectedQuestionValue].options)
                    .replace('#name#', questionOptionObj[selectedQuestionValue].options)
                    .replace('#value#', questionOptionObj[selectedQuestionValue].options)
            );
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
    }
    return {
        domElements,
        InitializeDomElements,
        addToQuestionDropdown,
        addToOptionDropdown,
        displaySelectedQuestion
    }
})();