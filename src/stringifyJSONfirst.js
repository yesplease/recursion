// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    var holderString = "";

    if (obj === null){
        console.log("That shit is null");
        return holderString = "null";
    } else if (typeof(obj) == 'object'){
        //It's an object, yay! Now is it an array?
        if (Array.isArray(obj)){
            console.log("it's an array, do shit with it!");
            holderString += "[";
                //first test to see if it's empty
                if (obj.length === 0) {
                    holderString += "]";
                    //do I need to return this? 
                    return holderString;
                }else if (obj.length === 1){
                        console.log("array length is 1");
                        if (obj[0] === undefined) {
                        holderString += "]";
                        return holderString;
                        } else{
                            holderString += stringifyJSON(obj[0]);
                            holderString += "]";
                            return holderString;
                        }

                } else {
                    for (var i = 0; i < obj.length - 1; i++){
                        if (obj[i] === undefined) {
                        return holderString += "null";
                        } else {
                        holderString += stringifyJSON(obj[i]);
                        holderString += ",";
                        }
                    var lastItem = obj.pop();
                    holderString += stringifyJSON(lastItem);
                    holderString += "]";
                }
            }
        } else {
            console.log("It's an object, do shit with it!");
            // for (var prop in obj){

            // }
        }
    } else if (typeof(obj) == 'string') {
        console.log("STRING baby!");
        var stringTheString = obj.toString();
        //console.log(typeof stringThisThing)
        //console.log("stringThisThing is now " + stringThisThing);
        holderString += "\"";
        holderString+= stringTheString;
        holderString += "\"";

    } else if (typeof(obj) == 'number') {
        console.log("it's a number!");
        var stringThisThing = obj.toString();
        //console.log(typeof stringThisThing)
        //console.log("stringThisThing is now " + stringThisThing);
        //holderString += "\'";
        holderString+= stringThisThing;
        //holderString += "\'";
    }

// {
//         console.log("it's neither object nor array");
//         var stringThisThing = obj.toString();
//         //console.log(typeof stringThisThing)
//         //console.log("stringThisThing is now " + stringThisThing);
//         //holderString += "\'";
//         holderString+= stringThisThing;
//         //holderString += "\'";
//     }

    //console.log("holderString is now " + holderString);
    return holderString;
};
  

console.log(stringifyJSON(["hi"]));
//console.log("This is what it should be " + JSON.stringify("Hello world"));
