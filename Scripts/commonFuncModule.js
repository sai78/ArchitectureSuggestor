const commonFuncModule = (() => {
    let domElements = {};
    const editElement = (event) => {
        let formGroup = '.form-group',
            inputGroupAppend = '.input-group-append',
            editSaveBtn = '.edit-save-btn',
            addBtn = '.add-btn',
            formControl = '.form-control',
            $dropDownElement = $(event.currentTarget).parent().siblings('select'),
            $selectedOption = $dropDownElement.find('option:selected'),
            selectedOptionVal = $selectedOption.attr('data-name'),
            $formGroup = $dropDownElement.closest(formGroup),
            $inputElement = $formGroup.siblings(formGroup).find('input[type=text]'),
            $saveEditBtn = $inputElement.siblings(inputGroupAppend).find(editSaveBtn),
            $addBtn = $inputElement.siblings(inputGroupAppend).find(addBtn);
        $inputElement.val(selectedOptionVal);
        $inputElement.focus();
        $saveEditBtn.removeClass('display-none');
        $addBtn.addClass('display-none');
    }
    const saveElement = (optionTemplate, event) => {
        let formGroup = '.form-group',
            inputGroup = '.input-group',
            inputGroupAppend = '.input-group-append',
            editSaveBtn = '.edit-save-btn',
            addBtn = '.add-btn',
            row = '.row',
            formControl = '.form-control',
            $inputElement = $(event.currentTarget).closest(inputGroup).find('input[type=text]'),
            $inputParentElement = $inputElement.closest(formGroup),
            $dropDownElement = $inputParentElement.siblings(formGroup).find('select'),
            $dropDownElementForQuestion = $dropDownElement.closest(row).siblings(row).find(formGroup).find(formControl),
            $selectedOption = $dropDownElement.find('option:selected'),
            $selectedOptionForQuestion = $dropDownElementForQuestion.find('option:selected'),
            inputElementName = $inputElement.val(),
            $addBtn = $inputElement.siblings(inputGroupAppend).find(addBtn),
            $saveEditBtn = $inputElement.siblings(inputGroupAppend).find(editSaveBtn);
        $inputElement.val('');
        $selectedOption.text(inputElementName);
        $selectedOption.attr('data-name', inputElementName);
        $selectedOptionForQuestion.text(inputElementName);
        $selectedOptionForQuestion.attr('data-name', inputElementName);
        $addBtn.removeClass('display-none');
        $saveEditBtn.addClass('display-none');
    }
    // Initialize DOM elements
    const InitializeDomElements = () => {
        domElements.editBtn = $('.edit-btn');
        domElements.inputGroupAppend = $('.input-group-append');
        domElements.formGroup = $('.form-group');
        domElements.deleteBtn = $('.delete-btn');
        domElements.editSaveBtn = $('.edit-save-btn');
    }
    return {
        domElements,
        InitializeDomElements,
        editElement,
        saveElement
    }
})();