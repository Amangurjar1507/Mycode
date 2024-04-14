let originalArray = [6, 4, 3, 7, 8, 1, 9, 5];

// Sorting the array
for (let i = 0; i < originalArray.length; i++) {
  for (let j = i + 1; j < originalArray.length; j++) {
    if (originalArray[i] > originalArray[j]) {
      // Swapping elements if they are in the wrong order
      let temp = originalArray[i];
      originalArray[i] = originalArray[j];
      originalArray[j] = temp;
    }
  }
}

console.log("ascending array", originalArray);

// Inserting element 2
originalArray.push(2);
console.log("insert array", originalArray);

// Sorting the array again
for (let i = 0; i < originalArray.length; i++) {
  for (let j = i + 1; j < originalArray.length; j++) {
    if (originalArray[i] > originalArray[j]) {
      // Swapping elements if they are in the wrong order
      let temp = originalArray[i];
      originalArray[i] = originalArray[j];
      originalArray[j] = temp;
    }
  }
}

console.log("sort again", originalArray);

// Finding the position of 2 using a for loop
let position = -1;
for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] === 2) {
    position = i;
    break;
  }
}

console.log("position", position);



let newObj = {  "A":"1",
    "B":"2",
    "C":"3",
    "D":"4",
    "E":"5",
 };

function newFuncation(item) {
  const result = [];
  for (let name in item) {
    result.push({ name: name, count: item[name] });
  }
  return result;
}
let newArray = newFuncation(newObj);

console.log('New', newArray);





let tempArr = [1,2,3,3,4,5,5,6,7,8,2,2]
// find duplicate data

let tempData  = []
let duplicateData  = []
let duplicateDataCount = []
tempArr.forEach(res=>{
    if(tempData.includes(res)){
        if(!duplicateData.includes(res)){
            duplicateData.push(res)
        }else{
            tempData.push(res)
        }
    }else{
        tempData.push(res)
    }
})


duplicateData.forEach(res=>{
    let num = tempArr.filter(values=>values == res)
    console.log(`number ${res} is duplicate ${num.length} times`);
})
console.log("Total duplicate data is::", duplicateData.length)
console.log("duplicate items", duplicateData)


let newObj = {  "A":"1",
    "B":"2",
    "C":"3",
    "D":"4",
    "E":"5",
 };

function newFuncation(item) {
  const result = [];
  for (let name in item) {
    result.push({ name: name, count: item[name] });
  }
  return result;
}
let newArray = newFuncation(newObj);

console.log('New', newArray);

let obj = {
  "A": "1",
  "B": "2",
  "C": "3",
  "D": "4",
  "E": "5",
};

let tep = [];
      tep.push({ key: "key", value: 'obj[key]' });
      
      new trrp =tep 
      trrp.push(obj)
