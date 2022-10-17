(function(){
    let testArray = [];

    let instructors = ["David", "Cody", "Codey The Duck"];

    const falsyValues = [false, null, "", 0, undefined, NaN];

    console.log(instructors.length);
    console.log([].length);
    console.log([10,9,8,7,6,5,4,3,2,1,0].length);

    console.log(instructors[0]);
    instructors[0] = "'Lord Megatron' David";
    console.log(instructors[0]);
    instructors[1] = "'Emperor Starscream' Cody";
    console.log(falsyValues[falsyValues.length - 1]);

    let randomIndex = Math.floor(Math.random() * instructors.length);
    alert("One of our instructors is named: " + instructors[randomIndex]);

    console.log(instructors);

    for(let i = 0; i <= instructors.length - 1; i++){
        console.log("One of your instructors is named:" + instructors[i]);
    }

    instructors.forEach(function(instructor){
        console.log("One of your instructors is named: " + instructor);
    });

    function logInfo(element) {
        console.log(element);
    }

    falsyValues.forEach(logInfo);
    instructors.forEach(logInfo);

    for(let instructor of instructors) {
        console.log("One of your instructors is named: " + instructors);
    }

})();