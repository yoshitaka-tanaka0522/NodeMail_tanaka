function addValue() {
    tomail = "newlifetanaka@gmail.com";
    message = document.getElementById("message").value;
    email = document.getElementById("email").value;
    title = document.getElementById("title").value;
    url = "'https://us-central1-newlifesakaeproject.cloudfunctions.net/sendMail?to=" + tomail + "&msg" + message + "&email" + email + "&title=" + title;
}

function sendparameter() {
    tomail = "newlifetanaka@gmail.com";
    message = document.getElementById("message").value;
    email = document.getElementById("email").value;
    title = document.getElementById("title").value;
    var currenturl = location.href;
    var domainnone = currenturl.replace('https://newlife-sakae.com/contact.html', '');
    if (message == "") {
        document.getElementById("message").style.border = 'solid 1px red';
        document.getElementById("messagenull").textContent = "お問い合わせ内容の入力をお願いいたします。"
    }
    if (email == "") {
        document.getElementById("email").style.border = 'solid 1px red';
        document.getElementById("emailnull").textContent = "メールアドレスの入力をお願いいたします。"
    }
        if (title == "") {
            document.getElementById("title").style.border = 'solid 1px red';
            document.getElementById("titlenull").textContent = "件名の入力をお願いいたします。"
        } else {
            location.href = domainnone + "https://us-central1-newlifesakaeproject.cloudfunctions.net/sendMail?to=" + tomail + "&title=" + title + "&email=" + email + "&msg=" + message;
        }
}