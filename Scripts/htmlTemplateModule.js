const htmlTemplateModule = () => {
    let templateObj = {};
    templateObj.optionTemplate = `<option value = '#value#' data-name = '#name#'>#option#</option>`;
    return templateObj;
}