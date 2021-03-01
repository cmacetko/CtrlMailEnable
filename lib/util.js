module.exports = {

    forEach: function(collection, callback, scope)
    {
      
        if (Object.prototype.toString.call(collection) === '[object Object]') 
        {

            for (var prop in collection) 
            {
                
                if (Object.prototype.hasOwnProperty.call(collection, prop)) 
                {

                    callback.call(scope, collection[prop], prop, collection);

                }

            }

        } else {

            for (var i = 0, len = collection.length; i < len; i++) 
            {

                callback.call(scope, collection[i], i, collection);

            }

        }

    },

    isArray: function(obj)
    {
      
        return Object.prototype.toString.call(obj) === '[object Array]';

    },

    replaceAll: function(string, search, replace) 
    {

        return string.split(search).join(replace);

    },

    valuesToArray: function(obj) 
    {

        var result = [];
        for (var key in obj) {
           if (obj.hasOwnProperty(key)) {
               result.push(obj[key]);
           }
        }
        
        return result;

    }

}