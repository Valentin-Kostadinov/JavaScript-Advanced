function encodeAndDecodeMessages() {
    const textareas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    const map = {
        encode: {
            textarea: textareas[0],
            btn: buttons[0],
            func: (char) =>String.fromCharCode(char.charCodeAt(0) + 1)
        },
        decode: {
            textarea: textareas[1],
            btn: buttons[1],
            func: (char) => String.fromCharCode(char.charCodeAt(0) - 1)
        }
    }

    document.getElementById('main').addEventListener('click', function (e) {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }

        const type = e.target.textContent.toLowerCase().trim().includes('encode') ? 'encode' : 'decode';

        const message = map[type].textarea.value.split('').map(map[type].func).join('');

        map.encode.textarea.value = '';
        map.decode.textarea.value = message;

    })
}