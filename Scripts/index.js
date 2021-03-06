// Bind events and initialize dom elements when DOM is loaded
$(document).ready(() => {
    let htmlTemplates = htmlTemplateModule();
    // Initialize DOM elements for commonFuncModule
    commonFuncModule.InitializeDomElements();
    // Initialize DOM elements for architecure components
    architectureModule.InitializeDomElements();
    // Initialize DOM elements for group components
    groupModule.InitializeDomElements();
    // Initialize DOM elements for group details components
    groupDetailsModule.InitializeDomElements();
    // Initialize DOM elements for entity components
    entityModule.InitializeDomElements();
    // Initialize DOM elements for option-question components
    questionOptionsModule.InitializeDomElements();
    // Add events for archtiecture components
    architectureModule.domElements.architectureAddBtn.on('click', architectureModule.addToArchitectureDropdown.bind(null, htmlTemplates.optionTemplate));
    // Add events for Group components
    groupModule.domElements.groupAddBtn.on('click', groupModule.addToGroupDropdown.bind(null, htmlTemplates.optionTemplate));
    // display group details component
    groupDetailsModule.domElements.groupDetailsDisplayBtn.on('click', groupDetailsModule.displayGroupDetailsContainer.bind(null));
    // hide group details component
     groupDetailsModule.domElements.saveGroupDetailsBtn.on('click', groupDetailsModule.hideGroupDetailsContainer.bind(null ,questionOptionsModule.questionDetailsObj, questionOptionsModule.questionEntityMappingObj));
    // Add events for common dom components
    commonFuncModule.domElements.editBtn.on('click', commonFuncModule.editElement.bind(null));
    // Edit and saves the element
    commonFuncModule.domElements.editSaveBtn.on('click', commonFuncModule.saveElement.bind(null));
    // Add events for entity components
    entityModule.domElements.entityAddBtn.on('click', entityModule.addToEntityDropdown.bind(null, htmlTemplates.optionTemplate, questionOptionsModule.domElements.entityDropdownList));
    // Add events for option components
    questionOptionsModule.domElements.optionAddBtn.on('click', questionOptionsModule.addToOptionDropdown.bind(null, htmlTemplates.optionTemplate));
    // Add events for question components
    questionOptionsModule.domElements.questionOptionSaveBtn.on('click', questionOptionsModule.addToQuestionDropdown.bind(null,  htmlTemplates.optionTemplate));
    // display selected question
    questionOptionsModule.domElements.questionDropdownList.on('change',questionOptionsModule.displaySelectedQuestion.bind(null , htmlTemplates.optionTemplate , serviceCallModule));
})