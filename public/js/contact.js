function addValue() {
    tomail = "newlifetanaka@gmail.com";
    message = document.getElementById("message").value;
    email = document.getElementById("email").value;
    title = document.getElementById("title").value;
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
            const formData = new FormData();
            formData.append("some_key", "some_value");
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "http://localhost:5000");

            xhr.addEventListener('load', (evt) => {
                console.log('** xhr: load');
                let response = JSON.parse(xhr.responseText);
                console.log(response);
            });
            xhr.addEventListener('error', (evt) => {
                console.log('** xhr: error');
            });
        
            xhr.send(formData);
        }
}  
