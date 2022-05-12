let word = document.createElement('div');
word.textContent = "멋사";
document.body.append(word);

let form_tag = document.createElement('form');
document.body.append(form_tag);

let input_tag = document.createElement('input');
form_tag.append(input_tag);

let button_tag = document.createElement('button');
button_tag.textContent = "입력";
form_tag.append(button_tag);

let result_tag = document.createElement('div');
document.body.append(result_tag);

input_tag.focus();


form_tag.addEventListener('submit', (e) => {
    e.preventDefault();
    if(word.textContent[word.textContent.length-1] === input_tag.value[0]) {
        result_tag.textContent ="딩동댕";
        word.textContent = input_tag.value;
    }else{
        result_tag.textContent = "땡";
    }
});