// Count Nested Keys

const nestedObj = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Wonderland",
    geo: {
      lat: 51.5074,
      lng: 0.1278
    }
  },
  hobbies: ["reading", "chess", { type: "sports", name: "tennis" }],
  contact: {
    email: "alice@example.com",
    phones: {
      home: "123-456-7890",
      work: "987-654-3210"
    }
  }
};

function isObject(obj){
    return obj !== null && typeof(obj) == 'object'; 
}

function getAllKeys(obj, keyPath = '', result = []) {
  for (let key in obj) {
    const currentPath = keyPath ? `${keyPath}.${key}` : key;
    const value = obj[key];

    if (isObject(value)) {
      if (Array.isArray(value)) {
        // Traverse array items (especially if they are objects)
        value.forEach((item, index) => {
          const arrayPath = `${currentPath}[${index}]`;
          if (isObject(item)) {
            getAllKeys(item, arrayPath, result);
          } else {
            result.push(arrayPath);
          }
        });
      } else {
        getAllKeys(value, currentPath, result);
      }
    } else {
      result.push(currentPath);
    }
  }
  return result;
}

console.log(getAllKeys(nestedObj))