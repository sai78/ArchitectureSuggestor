const questionOptionsModule = (() => {
    let domElements = {},
        questionOptionObj = {};
    // Add options to options dropdown list
    const addToOptionDropdown = (dataListOptionTemplate) => {
        let $optionDropdownList = domElements.optionDropdownList,
            $optionName = domElements.optionName,
            optionName = $optionName.val();
        if (optionName === '') {
            alert('Please enter value for option');
        }
        else {
            $optionName.val('');
            $optionDropdownList.prepend(
                dataListOptionTemplate.replace('#option#', optionName)
            );
            $optionDropdownList.val($optionDropdownList.find('option').first().val());
        }
    }
    // Add question to questions dropdown list
    const addToQuestionDropdown = (optionTemplate) => {
        let $questionDropdownList = domElements.questionDropdownList,
            questionIdCounter = store.state.questionIdCounter,
            $optionDropdownList = domElements.optionDropdownList,
            $questionName = domElements.questionName,
            questionObj = {},
            questionName = $questionName.val(),
            $optionName = domElements.optionName,
            optionName = $optionName.val(),
            $entityDropdownList = domElements.entityDropdownList;
        if (questionName === '') {
            alert('Please enter value for option');
        }
        else {
            $questionName.val('');
            let $selectedEntiyOption = $entityDropdownList.find('option:selected'),
                selectedEntityOptionVal = $selectedEntiyOption.attr('value');
            if (!(questionIdCounter in questionObj)) {
                if (($questionName.attr('disabled') != 'disabled')) {
                    questionObj[questionIdCounter] = {};
                    questionObj[questionIdCounter].questionName = questionName;
                    questionObj[questionIdCounter].options = optionName;
                    $questionDropdownList.prepend(
                        optionTemplate.replace('#option#', questionName)
                            .replace('#name#', questionName)
                            .replace('#value#', questionIdCounter)
                    );
                    store.incrementQuestioIdCounter();
                }
                else {
                    let $selectedQuestionOption = $questionDropdownList.find('option:selected'),
                        selectedQuestionOptionVal = $selectedQuestionOption.attr('value'),
                        selectedQuestionOptionName = $selectedQuestionOption.attr('data-name'),
                        selectedOptionName = $optionDropdownList.val();
                    for (key in questionOptionObj) {
                        let questionObj = questionOptionObj[key];
                        if (selectedQuestionOptionVal in questionObj) {
                            questionObj[selectedQuestionOptionVal] = {};
                            questionObj[selectedQuestionOptionVal].questionName = selectedQuestionOptionName;
                            questionObj[selectedQuestionOptionVal].options = selectedOptionName;
                        }
                    }
                }
                if (!(selectedEntityOptionVal in questionOptionObj)) {
                    questionOptionObj[selectedEntityOptionVal] = questionObj;
                }
                $questionDropdownList.val($questionDropdownList.find('option').first().val());
            }
            console.log(questionOptionObj);
            $optionName.val('')
            $optionDropdownList.empty();
            if ($questionName.attr('disabled') == 'disabled') {
                $questionName.removeAttr('disabled');
            }
        }
    }
    const displaySelectedQuestion = (dataListOptionTemplate) => {
        let $questionName = domElements.questionName,
            $questionDropdownList = domElements.questionDropdownList,
            $optionDropdownList = domElements.optionDropdownList,
            $selectedOption = $questionDropdownList.find('option:selected'),
            selectedOptionVal = $selectedOption.attr('data-name');
        $questionName.val(selectedOptionVal);
        $questionName.attr('disabled', 'true');
        for (selectedOptionVal in questionOptionObj) {
            let questionObj = questionOptionObj[selectedOptionVal];
            for (key in questionObj) {
                if (questionObj[key].questionName === $questionName.val()) {
                    $optionDropdownList.empty();
                    $optionDropdownList.prepend(
                        dataListOptionTemplate.replace('#option#', questionObj[key].options));
                }
            }
        }
        //$optionDropdownList.val($optionDropdownList.find('option').first().val());
    }
    // Initializing DOM elements
    const InitializeDomElements = () => {
        domElements.questionName = $('#question-name');
        domElements.optionName = $('#option-name');
        domElements.optionAddBtn = $('#option-add-btn');
        domElements.questionDropdownList = $('#question-dropdown-list');
        domElements.optionDropdownList = $('#option-dropdown-list');
        domElements.entityDropdownList = $('#entity-list');
        domElements.questionOptionSaveBtn = $('#question-option-save-btn');
    }
    return {
        domElements,
        InitializeDomElements,
        addToQuestionDropdown,
        addToOptionDropdown,
        displaySelectedQuestion
    }
})();