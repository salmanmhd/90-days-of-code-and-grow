/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const ans = [];
  transactions.map((obj) => {
    let isAvailable = false;
    let category = obj.category;
    ans.map((el) => {
      if (el.category === category) {
        isAvailable = true;
        el.totalSpent = obj.price + el.totalSpent;
      }
    });
    if (!isAvailable) {
      const newObj = {
        category: obj.category,
        totalSpent: obj.price,
      };
      ans.push(newObj);
    }
  });
  return ans;
}

module.exports = calculateTotalSpentByCategory;
