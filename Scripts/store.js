const store = {
    state: {
        architectureObj: {},
        entityObj:{},
        option:{},
        questionOptionObj:{},
        editMode: false,
        architectureIdCounter: 1,
        entityIdCounter: 1,
        optionIdCounter: 1,
        questionIdCounter: 1
    },
    // Action for incrementing architecure Id counter
    incrementArchitectureIdCounter() {
        this.state.architectureIdCounter += 1;
    },
    //Action for incrementing entity Id counter
    incrementEntityIdCounter() {
        this.state.entityIdCounter += 1;
    },
    incrementOptionIdCounter() {
        this.state.optionIdCounter += 1;
    },
    incrementQuestionIdCounter() {
        this.state.questionIdCounter += 1;
    },
}