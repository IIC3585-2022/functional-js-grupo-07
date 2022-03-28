module.exports = {
    SumArray: function(arr){
        return arr.reduce(function(a, b){
            return a + b
        }, 0);
    },
    
    AverageArray: function(arr){
        return arr.reduce(function(a, b){
            return a + b
        }, 0) / (arr.length === 0 ? 1 : arr.length);
    },
    
    MaxArray: function(arr){
        return arr.reduce(function(a, b){
            return Math.max(a, b);
        })
    },
    
    MinArray: function(arr){
        return arr.reduce(function(a, b){
            return Math.min(a, b);
        })
    },
    
    UniqArray: function(arr){
        var res = [];

        for(var i = 0; i < arr.length; i++){
            if(res.indexOf(arr[i]) === -1){
                res.push(arr[i]);
            }
        }

        return res;
    },
    
    UniqArraySort: function(arr){
        var res = [];

        for(var i = 0; i < arr.length; i++){
            if(res.indexOf(arr[i]) === -1){
                res.push(arr[i]);
            }
        }
        var sort = res.sort(function(a, b){
            return a - b;
        });
        return sort;
    },
    
    UniqStringArray: function(arr){
        var res = [];

        for(var i = 0; i < arr.length; i++){
            if(res.indexOf(arr[i]) === -1){
                res.push(arr[i]);
            }
        }

        var sort = res.sort();
        return sort;
    }
}