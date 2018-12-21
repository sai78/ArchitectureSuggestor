const commonFuncModule = (() => {
    let domElements = {};
    let formGroup = '.form-group';
    let inputGroupAppend = '.input-group-append';
    let editSaveBtn = '.edit-save-btn';
    let addBtn = '.add-btn';
    let formControl = '.form-control';
    let inputGroup = '.input-group';
    let row = '.row';
    // Edit the selected element and saves
    const editElement = (event) => {
        let $dropDownElement = $(event.currentTarget). parent(). siblings('select');
        let $selectedOption = $dropDownElement.find('option:selected');
        let selectedOptionVal = $selectedOption.attr('value');
        let $formGroup = $dropDownElement.closest(formGroup);
        let $inputElement = $formGroup. siblings(formGroup). find('input[type=text]');
        let $saveEditBtn = $inputElement. siblings(inputGroupAppend). find(editSaveBtn);
        let $addBtn = $inputElement. siblings(inputGroupAppend). find(addBtn);
        $inputElement.val(selectedOptionVal);
        $inputElement.focus();
        $saveEditBtn.removeClass('display-none');
        $addBtn.addClass('display-none');
    }
    // saves the edited the elements
    const saveElement = (event) => {
        let $inputElement = $(event.currentTarget). closest(inputGroup). find('input[type=text]');
        let $inputParentElement = $inputElement.closest(formGroup);
        let $dropDownElement = $inputParentElement.siblings(formGroup).find('select');
        let $dropDownElementForQuestion = $dropDownElement. closest(row). siblings(row). find(formGroup). find(formControl);
        let $selectedOption = $dropDownElement.find('option:selected');
        let $selectedOptionForQuestion = $dropDownElementForQuestion.find('option:selected');
        let inputElementName = $inputElement.val();
        let $addBtn = $inputElement. siblings(inputGroupAppend). find(addBtn);
        let $saveEditBtn = $inputElement. siblings(inputGroupAppend). find(editSaveBtn);
        $inputElement.val('');
        $selectedOption.text(inputElementName);
        $selectedOption.attr('value', inputElementName);
        $selectedOptionForQuestion.text(inputElementName);
        $selectedOptionForQuestion.attr('value', inputElementName);
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