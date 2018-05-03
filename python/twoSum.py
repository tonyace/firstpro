def twoSum(nums,target):    
    n = len(nums)
    d = {}
    for x in range(n):
        a = target - nums[x]
        if nums[x] in d:
            return d[nums[x]], x
        else:
            d[a] = x
