document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const messageDiv = document.getElementById("message");

    // Перевіряємо, чи є вже збережені дані про користувача
    const savedUser = JSON.parse(localStorage.getItem("user"));

    // Якщо є, то заповнюємо поля
    if (savedUser) {
        document.getElementById("username").value = savedUser.username;
        document.getElementById("password").value = savedUser.password;
        messageDiv.textContent = "Дані збережено. Перевірте та увійдіть.";
    }

    // Обробка форми при натисканні кнопки "Увійти"
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Зупиняємо стандартну поведінку форми

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Якщо дані користувача вже є в localStorage
        if (savedUser && savedUser.username === username && savedUser.password === password) {
            messageDiv.textContent = "Вхід успішний!";
            messageDiv.style.color = "green";
        } else {
            // Якщо даних немає або вони не співпадають, зберігаємо нового користувача
            const user = {
                username: username,
                password: password
            };
            localStorage.setItem("user", JSON.stringify(user));
            messageDiv.textContent = "Користувач збережений. Можете увійти.";
            messageDiv.style.color = "blue";
        }
    });
});
