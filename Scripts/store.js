const store = {
    state: {
        architectureDetailsObj: {},
        questionEntityMappingObj: {},
        questionDetailsObj:{},
        editMode: false,
        architectureIdCounter: 1,
        groupIdCounter: 1,
        entityIdCounter: 101,
        optionIdCounter: 1,
        questionIdCounter: 1001
    },
    // Action for incrementing architecure Id counter
    incrementArchitectureIdCounter() {
        this.state.architectureIdCounter += 1;
    },
    // Action for incrementing group Id counter
    incrementGroupIdContainer() {
        this.state.groupIdCounter += 1;
    },
    //Action for incrementing entity Id counter
    incrementEntityIdCounter() {
        this.state.entityIdCounter += 1;
    },
    // Action for incrementing option Id counter
    incrementOptionIdCounter() {
        this.state.optionIdCounter += 1;
    },
    // Action for incrementing option Id counter
    incrementQuestionIdCounter() {
        this.state.questionIdCounter += 1;
    },
    setArchitectureDetailsObj (architectureDetailsObj){
        this.state.architectureDetailsObj = architectureDetailsObj;
    },
    setQuestionEntityMappingObj (questionEntityMappingObj){
        this.state.questionEntityMappingObj = questionEntityMappingObj;
    },
    setQuestionDetailsObj (questionDetailsObj){
        this.state.questionDetailsObj = questionDetailsObj;
    }
}