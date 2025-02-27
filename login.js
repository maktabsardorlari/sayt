function checkLogin() {
    var correctUsername = "admin"; // To‘g‘ri login
    var correctPassword = "1234";  // To‘g‘ri parol

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === correctUsername && password === correctPassword) {
        alert("Xush kelibsiz!");
        window.open("dashboard.html", "_blank"); // Yangi oynada ochish
    } else {
        errorMessage.textContent = "Login yoki parol xato! Qayta urinib ko‘ring.";
    }
}
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    // Oddiy login va parol (faqat test uchun)
    if (username === "admin" && password === "1234") {
        window.location.href = "index.html"; // Asosiy sahifaga o'tish
    } else {
        errorMessage.textContent = "Login yoki parol noto‘g‘ri!";
    }
}

function checkLogin() {
    var correctUsername = "admin"; // To‘g‘ri login
    var correctPassword = "1234";  // To‘g‘ri parol

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === correctUsername && password === correctPassword) {
        alert("Xush kelibsiz!");
        window.location.href = "dashboard.html"; // Login muvaffaqiyatli bo‘lsa, boshqa sahifaga yo‘naltirish
    } else {
        errorMessage.textContent = "Login yoki parol xato! Qayta urinib ko‘ring.";
    }
}
function checkLogin() {
    // To‘g‘ri login va parol
    var correctUsername = "admin";
    var correctPassword = "1234";

    // Foydalanuvchi kiritgan ma’lumotlar
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === correctUsername && password === correctPassword) {
        alert("Xush kelibsiz!"); 
        window.location.href = "dashboard.html"; // Yangi sahifaga yo‘naltirish
    } else {
        errorMessage.textContent = "❌ Login yoki parol noto‘g‘ri! Qayta urinib ko‘ring.";
    }
}