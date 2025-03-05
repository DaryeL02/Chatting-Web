function enter_is_pressed(event){
    let input_field = document.getElementById('input_field');
    if (event.key === 'Enter'){
        // console.log("La tecla enter ha sido presionada");
        send_message(input_field.value);
        input_field.value = '';
    }
}

function send_message(message) {
    console.log(message);

    let chat_container = document.getElementById('chat_container');

    if (message !== ''){
        const message_div = document.createElement('div');
        message_div.className = 'chat_message';
        message_div.textContent = "@Usuario: " + message;
        chat_container.appendChild(message_div);

    }   
}