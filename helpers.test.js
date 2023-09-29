const {
  findMean,
  findMedian,
  findMode,
} = require("./helpers");

describe("#findMedian", function(){
  it("finds the median of another even set", function(){ 
    expect(findMedian([7, 5, 3, 1])).toEqual(4);
  })
  it("finds the median of another odd set", function () { 
    expect(findMedian([5, 3, 7, 9, 1])).toEqual(5);
  })
})

describe("#findMean", function () {
  it("finds the mean of an empty array", function () { 
    expect(findMean([])).toEqual(0)
  })
  it("finds the mean of another array of numbers", function () { 
    expect(findMean([10, 20, 30, 40])).toEqual(25);
  })
})

describe("#findMode", function () {
  it("finds the mode", function () { 
    expect(findMode([1,1,1,2,2,3])).toEqual(1)
  })
  it("finds the mode of another set of numbers", function () { 
    expect(findMode([4,4,5,6,6,6,7,7])).toEqual(6);
  })
})