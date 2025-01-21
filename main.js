function reverse_array(value){
    var len = value.length;
    var empty_array = [];
    for(var b = 0; b < len; b++){
        empty_array[b] = value[len - b - 1];
        
    }
    return empty_array;

}
var alphabet = ["a","b","c","d","e"];
var alphabet = reverse_array(alphabet);
console.log("Original array - ",alphabet);