    // this is what you would do if you liked things to be easy:
    // var stringifyJSON = JSON.stringify;

    // but you don't so you're going to write it from scratch:

    var stringifyJSON = function(obj) {
      // sortingHat(obj);
      // your code goes here
      return stringify(obj);
    };

    var sortingHat = function(input) {
        switch (typeof(input)){
            case 'object':
                return objectifier(input);
                break;
            case 'number':
                return input.toString();
                break;
            case 'string':
                return '\"' + input + '\"';
                break;
            case 'boolean':
                return input.toString();
                break;
            case 'undefined':
                return null;
                break;
            default:
                console.log('Huh? Well this was unexpected.');
        }
    };

    var objectifier = function(object){
        if (object === null){
        console.log("That shit is null");
        return 'null';
        }
        else if (Array.isArray(object)) {
            console.log("That's an array, baby!")
            return arrayStringify(object);
        }
        else {
            console.log("That's an object. Let's do something with it.")
        }
    };

    var arrayStringify = function(array){
        var arrayHolder = '[';
        if (array.length === 0){
            arrayHolder += ']';
            return arrayHolder
        }
        else if (array.length === 1) {
            arrayHolder += sortingHat(array[0]);
            arrayHolder += ']';
            return arrayHolder
        }
        else {
            for (var i = 0; i < array.length - 1; i++) {
                arrayHolder += sortingHat(array[i]);
                arrayHolder += ",";
            }
            var lastElement = array.pop();
            arrayHolder += sortingHat(lastElement);
            arrayHolder += ']';
            return arrayHolder;
        }
    };

        console.log(sortingHat([5]));

