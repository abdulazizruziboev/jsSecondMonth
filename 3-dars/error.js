try {
    let errorMessage = new Error("Failed to load DOM", {cause:"Load Error"}); // Xatolikni belgilash uchun habar
    console.log(Error.isError(errorMessage)) // mantiqiy tur qaytaradi
    throw errorMessage; // Errorni uloqtirih
} catch(errorMessage) { // Error ni tutib olish
    console.error(errorMessage);
    console.log(errorMessage.name) // Error tipini chiqaradi 
    console.log(errorMessage.message) // Error xabarini chiqaradi  
};
