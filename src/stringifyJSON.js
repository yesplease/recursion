
    // this is what you would do if you liked things to be easy:
    // var stringifyJSON = JSON.stringify;

    // but you don't so you're going to write it from scratch:

    var stringifyJSON = function(obj) {
      // sortingHat(obj);
      // your code goes here
      return sortingHat(obj);
    };

    var sortingHat = function(input) {
        switch (typeof (input)){
            case 'object':
                return objectifier(input);
            case 'number':
                return input.toString();
            case 'string':
                return '\"' + input + '\"';
            case 'boolean':
                return input.toString();
            case 'undefined':
                return null;
            default:
                console.log('Huh? Well this was unexpected.');
        }
    };

    var objectifier = function(object){
        if (object === null){
        //console.log("That shit is null");
        return 'null';
        }
        else if (Array.isArray(object)) {
            //console.log("That's an array, baby!")
            return arrayStringify(object);
        }
        else {
            //console.log("That's an object. Let's do something with it.")
            var objectHolder = '{';
            if(Object.getOwnPropertyNames(object).length === 0){
                objectHolder += '}';
                return objectHolder;
            }
            for (var prop in object){
                //console.log("This is the first key " + prop + " and its type is " + typeof prop);
                if (typeof object[prop] === 'function'){
                    return '{}';
                } 
                else if (typeof object[prop] === 'undefined'){
                    return '{}';
                }
                else {
                    objectHolder += sortingHat(prop);
                    objectHolder += ':';
                    objectHolder += sortingHat(object[prop]);
                    objectHolder += ',';
                }
            }
            //cuts off the trailing comma, then adds the closing brace
            objectHolder = objectHolder.substring(0, objectHolder.length - 1)+ '}';
            return objectHolder;
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

