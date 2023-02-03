// INSTRUCTIONS //
// Implement a function called saturdayFun. 
// It should return a String like "This Saturday, I want to ....!" 
// Fill in the ... with the activity that's passed in as the first parameter. 
// If nothing is passed in, default to "roller-skate". 


// Using if / else statements
function saturdayFun(activity = "roller-skate") {
    if (activity !== "roller-skate") {
        return `This Saturday, I want to ${activity}!`;
}
    else {
        return "This Saturday, I want to roller-skate!";
}
}

// Ability to override activity 
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// INSTRUCTIONS //
// Implement a function expression called mondayWork. 
// The function should return a String like "This Monday, I will ... ." 
// Fill in the ... with the activity that's passed in as the first parameter. 
// If nothing is passed in, default to "go to the office"

// Using if / else statements
function mondayWork(mondayActivity = "go to the office") {
    if (mondayActivity !== "go to the office") {
        return `This Monday, I will ${mondayActivity}.`;
    }
    else {
        return "This Monday, I will go to the office."
    }
}

// Ability to override activity
function mondayWork(mondayActivity = "go to the office") {
    return `This Monday, I will ${mondayActivity}.`;
}


// INSTRUCTIONS //
// Implement a function called wrapAdjective:
// // - It should return a function. This "inner" function should:
// // // - take a single parameter that should default to "special". Name it however you wish.
// // // - return a String of the form "You are ...!" where ... should be the adjective this function received wrapped in visual flair.
// // - It should take as parameter a String that will be used to create visual flair.
// // - You may call the parameter whatever you like, but its default value should be "*".
// // - Call example: const encouragingPromptFunction = wrapAdjective("!!!")
function wrapAdjective(moreAdjectives = "*") {
    return function specialAdjective(adjective = "special") {
        return `You are ${moreAdjectives}${adjective}${moreAdjectives}!`;
    }
}