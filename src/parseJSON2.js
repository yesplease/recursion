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
        else if (Array.isArray(objInput)) {
        return arrayStringify(objInput);

