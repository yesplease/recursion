// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    var holderString = "";

    if (obj === null){
        console.log("That shit is null");
        holderString = "null";
        return holderString;
    } else if (typeof(obj) == 'object'){
        if (Array.isArray(obj)){
            console.log("it's an array, do shit with it!");
            holderString += "[";
            for (var i = 0; i < obj.length; i++){
                holderString += stringifyJSON(obj[i]);
            }
            holderString += "]";
        } else {
            console.log("It's an object, do shit with it!");
            for (var prop in obj){

            }
        }
    } else {
        console.log("it's neither object nor array");
        var stringThisThing = obj.toString();
        //console.log(typeof stringThisThing)
        //console.log("stringThisThing is now " + stringThisThing);
        holderString += stringThisThing;
    }
    console.log("holderString is now " + holderString);
    return holderString;
};
  

//console.log(stringifyJSON(true));
//console.log("This is what it should be " + JSON.stringify("Hello world"));
