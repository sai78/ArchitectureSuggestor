const questionOptionsModule = (() => {
    let domElements = {};
    let entityQuestionObj = {};
    let questionOptionObj = {};
    let optionList = [];

    // Add options to options dropdown list
    const addToOptionDropdown = (optionTemplate) => {
        let $optionDropdownList = domElements.optionDropdownList;
        let optionDropdownListOption  = "#option-dropdown-list option";
        let questionIdCounter = store.state.questionIdCounter;
        let $optionName = domElements.optionName;
        let $questionName = domElements.questionName;
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
            if(($questionName.attr('disabled') != 'disabled'))
            {
                optionList.push(optionName);
            } 
            else{
                $(optionDropdownListOption).each(function() {
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
        let $entityDropdownList = domElements.entityDropdownList;
        let optionSelected = 'option:Selected';
        let $optionDropdownList = domElements.optionDropdownList;
        let $questionDropdownList = domElements.questionDropdownList;
        let $questionName = domElements.questionName;
        let $selectedEntity = $entityDropdownList.find(optionSelected);
        let selectedEntityName = $selectedEntity.attr('value');
        let selectedEntityId = $selectedEntity.attr('data-id');
        let $selectedOption = $optionDropdownList.find(optionSelected);
        let selectedOptionName = $selectedOption.attr('value');
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
                        .replace('#id#', questionIdCounter)
                );
            }
            else {
                let optionSelected = 'option:Selected';
                let $selectedQuestionOption = $questionDropdownList.find(optionSelected);
                let selectedQuestionOptionVal = $selectedQuestionOption.attr('data-id');
                let selectedQuestionOptionName = $selectedQuestionOption.attr('value');
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
        console.log(questionOptionObj)
        console.log(entityQuestionObj)
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
        let highlightValueobj =    entityQuestionObj[selectedEntityId][questionIdCounter]
        let highlightValue = highlightValueobj.selectedOptionName
        if (selectedQuestionValue in questionOptionObj) {
            $optionDropdownList.empty();
            for ( let x=0 ;x<questionOptionObj[selectedQuestionValue].options.length; x++ ){
                if (questionOptionObj[selectedQuestionValue].options[x] == highlightValue ){
            $optionDropdownList.prepend(
                optionTemplate.replace('#option#', questionOptionObj[selectedQuestionValue].options[x])
                    .replace('#name#', questionOptionObj[selectedQuestionValue].options[x])
                    .replace('#id#', questionOptionObj[selectedQuestionValue].options[x])
            ).addClass('highlight');
                }
                else{
                    $optionDropdownList.prepend(
                optionTemplate.replace('#option#', questionOptionObj[selectedQuestionValue].options[x])
                    .replace('#name#', questionOptionObj[selectedQuestionValue].options[x])
                    .replace('#id#', questionOptionObj[selectedQuestionValue].options[x])
            ) 
                }
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
    }
    return {
        domElements,
        InitializeDomElements,
        addToQuestionDropdown,
        addToOptionDropdown,
        displaySelectedQuestion
    }
})();