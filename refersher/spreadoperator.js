//create a spread operator example
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combined = [...array1, ...array2];
// console.log(combined); // [1, 2, 3, 4, 5, 6]



//using object array 


export const CORE_CONCEPTS = [
    {
        image : "componentsImg",
        title : "Components",
        description:
        "the core UI building blocks - compose user interfaces by combining smaller, reusable pieces - of multiple components"
    },
    {
        image : "jsxImg",
        title : "JSX",
        description:
        "A syntax extension that allows mixing HTML with JavaScript"
    }];


    const a = {...CORE_CONCEPTS[0], ...CORE_CONCEPTS[1]};

    console.log(a);
