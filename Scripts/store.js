const store = {
    state: {
        architectureObj: {},
        editMode: false,
        architectureIdCounter: 1
    },

    // Action for incrementing architecure Id counter
    incrementArchitectureIdCounter() {
        this.state.architectureIdCounter += 1;
    }
}