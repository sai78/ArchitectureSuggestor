const groupDetailsModule = ( () =>{

    let domElements={};


    const displayGroupDetailsContainer = () =>{

        let $groupDetailsContainer= domElements.groupDetailsContainer;
        $groupDetailsContainer.removeClass('display-none');

    }

    const hideGroupDetailsContainer = () =>{
        let $groupDetailsContainer= domElements.groupDetailsContainer;
        $groupDetailsContainer.addClass('display-none');
    }
    
    // Initialize DOM elements for group  details Component
      const InitializeDomElements = () => {
        domElements.groupDetailsDisplayBtn = $('#group-details-display-btn');
        domElements.groupDetailsContainer = $('#group-details-container');
        domElements.saveGroupDetailsBtn = $('#save-group-details-btn');
      }

      return{
                domElements,
                InitializeDomElements,
                displayGroupDetailsContainer,
                hideGroupDetailsContainer
}
})()