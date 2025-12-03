import {
  getAcronym,
  extractNumbers,
  getUniqueColors,
  getTotalAmount,
  cleanMessage,
  getElectronicsProducts,
  formatUserProfiles,
  filterAndSum,
  addTenToOddNumbers,
  getTeamRoster,
  toCamelCase,
  getAverageHighScores,
  formatWords,
  adjustInventory,
  getLongNames,
  getWordsWithLength,
  getDiscountedPrices,
  formatAddresses,
  calculateDividedSum,
  getActiveIds,
  getUsernames
} from "./app.mjs";
let text1="The quick brown fox jumps over the lazy dog";
getAcronym(text1);
// 2 - masala
const data2 = [{ name: "Ali", value: "123abc456" },{ name: "Gulsara", value: "789xyz012" }];
extractNumbers(data2);
// 3 - masala
const colors3 = ["red", "blue", "green", "red", "blue", "red"];
getUniqueColors(colors3);
// 4 - masala
const transactions4 = [{ amount: "50.99$", date: "2024-11-15" },{ amount: "100.50$", date: "2024-11-16" },{ amount: "75.25$", date: "2024-11-17" }];
getTotalAmount(transactions4);
// 5 - masala
const message5 = "   hello   world   javascript   ";
cleanMessage(message5);
// 6 - masala
const products6 = [{ name: "Laptop", tags: "electronics,computers" },{ name: "Desk", tags: "furniture,office" },{ name: "Monitor", tags: "electronics,displays" },];
getElectronicsProducts(products6);
// 7 - masala
const usernames7 = ["Ali1991", "Gulsara2000", "Mirjon1985"];
formatUserProfiles(usernames7);
// 8 - masala
const items8 = [{ value: 10 }, { value: 20 }, { value: 30 }];
filterAndSum(items8);
// 9 - masala
const data9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
addTenToOddNumbers(data9);
// 10 - masala
const teams10 = [{ name: "TeamA", members: ["Ali", "Gulsara"] },{ name: "TeamB", members: ["Mirjon", "Oksana", "Rustam"] },];
getTeamRoster(teams10);
// 11 - masala
const text11 = "hello-world-javascript";
toCamelCase(text11)
// 12 - masala
const scores12 = [85, 92, 78, 95, 88, 76, 90, 87];
getAverageHighScores(scores12);
// 13 - masala
const data13 = ["apple", "BANANA", "ChErRy", "date"];
formatWords(data13);
// 14 - masala
const inventory14 = [{ sku: "ITEM-001", qty: 50 },{ sku: "ITEM-005", qty: 30 },{ sku: "ITEM-010", qty: 20 }];
adjustInventory(inventory14);
// 15 - masala
const names15 = ["Alice", "Bob", "Charlie", "David", "Eve"];
getLongNames(names15);
// 16 - masala
const text16 = "The quick brown fox, jumps over. the lazy dog!";
getWordsWithLength(text16);
// 17 - masala
const products17 = [{ name: "Laptop", price: 999, discount: 10 },{ name: "Mouse", price: 25, discount: 20 },{ name: "Monitor", price: 400, discount: 5 },{ name: "Keyboard", price: 150, discount: 30 },];
getDiscountedPrices(products17);
// 18 - masala
const addresses18 = [{ country: "Uzbekistan", city: "Tashkent", street: "Lenin St." },{ country: "Kazakhstan", city: "Almaty", street: "Abaya Ave." },];
formatAddresses(addresses18);
// 19 - masala
const numbers19 = [5, 12, 8, 3, 9, 15, 6, 2];
calculateDividedSum(numbers19);
// 20 - masala
const data20 = [{ id: 1, active: true },{ id: 2, active: false },{ id: 3, active: true },];
getActiveIds(data20);
// 21 - masala
const emails21 = ["Ali@EXAMPLE.COM", "Gulsara@TEST.ORG", "Mirjon@DEMO.NET"];
getUsernames(emails21);