const questionOptionsModule = (() => {
    let domElements = {};
    let questionOptionObj = {};
    // Add options to options dropdown list
    const addToOptionDropdown = (dataListOptionTemplate) => {
        let $optionDropdownList = domElements.optionDropdownList;
        let $optionName = domElements.optionName;
        let optionName = $optionName.val();
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
        let $questionDropdownList = domElements.questionDropdownList;
        let $questionName = domElements.questionName;
        let questionName = $questionName.val();
        let $optionName = domElements.optionName;
        let optionName = $optionName.val();
        let $entityDropdownList = domElements.entityDropdownList;
        if (questionName === '') {
            alert('Please enter value for option');
        }
        else {
            let questionIdCounter = store.state.questionIdCounter;
            let $optionDropdownList = domElements.optionDropdownList;
            $questionName.val('');
            $questionDropdownList.prepend(
                optionTemplate.replace('#option#', questionName)
                    .replace('#name#', questionName)
                    .replace('#value#', questionIdCounter)
            );
            $questionDropdownList.val($questionDropdownList.find('option').first().val());
            let id = store.incrementQuestioIdCounter();
            let $selectedOption = $entityDropdownList.find('option:selected');
            let selectedOptionVal = $selectedOption.attr('value');
            let questionObj = {};
            questionObj[questionIdCounter] = {};
            questionObj[questionIdCounter].questionName = questionName;
            questionObj[questionIdCounter].options = optionName;
            if (!(selectedOptionVal in questionOptionObj)) {
                questionOptionObj[selectedOptionVal] = questionObj;
            }
            $optionName.val('');
            $optionDropdownList.empty();
        }
    }
    const displaySelectedQuestion = () => {
        let $questionName = domElements.questionName;
        let $questionDropdownList = domElements.questionDropdownList;
        let $optionDropdownList = domElements.optionDropdownList;
        let $selectedOption = $questionDropdownList.find('option:selected')
        let selectedOptionVal = $selectedOption.attr('data-name');
        $questionName.val(selectedOptionVal);
        $questionName.attr('readonly', 'true');
        $optionDropdownList
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