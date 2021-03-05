module.exports = {
    add: function(x,y){
        return x+y;
    },
    validateString: function (str){
        if(typeof(str)=='string') return true;
        else return false;
    }
}