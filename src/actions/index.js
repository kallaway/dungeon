export const ADD_EXAMPLE = "ADD_EXAMPLE";

let nextExampleId = 0;
export const addExample = text => {
    return {
        type: "ADD_EXAMPLE",
        id: nextExampleId++,
        text
    };
};
