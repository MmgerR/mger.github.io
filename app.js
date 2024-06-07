let tg = window.Telegram.WebApp;
let buy = document.getElementById("buy");
let order = document.getElementById("order");
tg.expand();

byu.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("form").style.display = "block";
});

order.addEventListener("click", () => {
    document.getElementById("error").innerText = '';
    let name = document.getElementById("user_name").value;
    let email = document.getElementById("user_email").value;
    let phone = document.getElementById("user_phone").value;

    if(name.length < 5) {
        document.getElementById("error").innerText = "Ошибка в поле Имя";
        return;               
    }

    if(name.length < 5) {
        document.getElementById("error").innerText = "Ошибка в поле Имя";
        return;
    }

    if(name.length < 5) {
        document.getElementById("error").innerText = "Ошибка в поле Имя";
        return;                
    }

    let data = {
        name: name,
        email: email,
        phone: phone,
    }

    tg.sendData(JSON.stringify(data));
    tg.close();
});