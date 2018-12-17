const commonFuncModule = (() => {
    let domElements = {};
    const editElement = (event) => {
        let formGroup = '.form-group';
        let $dropDownElement = $(event.currentTarget).parent().siblings('select');
        let $selectedOption = $dropDownElement.find('option:selected')
        let selectedOptionVal = $selectedOption.attr('data-name');
        let $formGroup = $dropDownElement.closest(formGroup);
        let $inputElement = $formGroup.siblings(formGroup).find('input[type=text]');
        let $saveEditBtn = domElements.saveEditBtn;
        let $addBtn = domElements.addBtn;
        $inputElement.val(selectedOptionVal);
        $inputElement.focus();
        $saveEditBtn.removeClass('display-none');
        $addBtn.addClass('display-none');
    }
    const saveElement = (optionTemplate, event) => {
        let formGroup = '.form-group';
        let inputGroup = '.input-group';
        let $inputElement = $(event.currentTarget).closest(inputGroup).find('input[type=text]');
        let $inputParentElement = $inputElement.closest(formGroup);
        let $dropDownElement = $inputParentElement.siblings(formGroup).find('select');
        let $selectedOption = $dropDownElement.find('option:selected')
        let inputElementName = $inputElement.val();
        $inputElement.val('');
        let $addBtn = domElements.addBtn;
        let $saveEditBtn = domElements.saveEditBtn;
        $selectedOption.text(inputElementName);
        $selectedOption.attr('data-name', inputElementName);
        $addBtn.removeClass('display-none');
        $saveEditBtn.addClass('display-none');
    }
    // Initialize DOM elements
    const InitializeDomElements = () => {
        domElements.editBtn = $('.edit-btn');
        domElements.inputGroupAppend = $('.input-group-append');
        domElements.formGroup = $('.form-group');
        domElements.saveEditBtn = $('.edit-save-btn');
        domElements.addBtn = $('.add-btn');
    }
    return {
        domElements,
        InitializeDomElements,
        editElement,
        saveElement
    }
})();