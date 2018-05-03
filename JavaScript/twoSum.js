/*var twoSum = function(nums, target) {
    for(var i=0;i<nums.length-1;i++){
        for(var j=i+1;j<=nums.length-1;j++){
            if(nums[i]+nums[j]==target){
                return [i,j];  
            }
        }
    }
    return null;    
};*/
var twoSum = function(nums, target) {
    var n = nums.length;
    var d = {};
    for(var i=0;i<n;i++){
        var a = target-nums[i];
        if (d.hasOwnProperty(nums[i])){
           return [d[nums[i]],i];
        }
        else{
            d[a]=i;
        }        
    }
}
