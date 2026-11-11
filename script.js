// إنشاء النجوم
const stars = document.getElementById("stars");

for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");

    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(star);
}

// الدخول بكلمة السر
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", function () {

    const password = document.getElementById("password").value.trim();

    const correctPassword = "صدفة";

    if (password === correctPassword) {

        document.getElementById("loginPage").classList.add("hidden");

        document.getElementById("lovePage").classList.remove("hidden");

    } else {

        document.getElementById("error").textContent =
            "الجواب مو صحيح، جربي مرة تانية يا آلاء 🥺";

    }

});

// رسائل القلوب
const emojis = document.querySelectorAll(".love-emoji");

emojis.forEach(function (emoji) {

    emoji.addEventListener("click", function () {

        const message = emoji.getAttribute("data-message");

        document.getElementById("message").textContent = message;

    });

});