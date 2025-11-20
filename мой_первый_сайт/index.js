// Функция для изменения текста заголовка
function changeText() {
    const title = document.getElementById('main-title');
    const texts = [
        'Привет! Это JavaScript!',
        'Ты нажал на кнопку!',
        'Волшебство в действии!',
        'JavaScript - это круто!'
    ];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    title.textContent = randomText;
}

// Функция для изменения цвета заголовка
function changeColor() {
    const title = document.getElementById('main-title');
    const colors = ['#ff6b6b', '#48cae4', '#52b788', '#ffd166', '#9d4edd'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    title.style.color = randomColor;
}

// Функция для показа сообщения
function showMessage() {
    alert('🎉 Поздравляю! Ты только что использовала JavaScript!');
}

// Функция для сброса всего
function resetAll() {
    const title = document.getElementById('main-title');
    title.textContent = 'Добро пожаловать на мой сайт!';
    title.style.color = '#000000';
    counter = 0;
    document.getElementById('counter').textContent = '0';
    document.getElementById('greeting').textContent = '';
    document.getElementById('userName').value = '';
}

// Работа со счётчиком
let counter = 0;

function increaseCounter() {
    counter++;
    document.getElementById('counter').textContent = counter;
    updateCounterColor();
}

function decreaseCounter() {
    counter--;
    document.getElementById('counter').textContent = counter;
    updateCounterColor();
}

function updateCounterColor() {
    const counterElement = document.getElementById('counter');
    if (counter > 0) {
        counterElement.style.color = 'green';
    } else if (counter < 0) {
        counterElement.style.color = 'red';
    } else {
        counterElement.style.color = 'black';
    }
}

// Функция для приветствия пользователя
function greetUser() {
    const userName = document.getElementById('userName').value;
    const greetingElement = document.getElementById('greeting');
    
    if (userName.trim() === '') {
        greetingElement.textContent = 'Пожалуйста, введите ваше имя!';
        greetingElement.style.color = 'red';
    } else {
        const greetings = [
            `Привет, ${userName}! Рад тебя видеть!`,
            `Добро пожаловать, ${userName}!`,
            `Как дела, ${userName}?`,
            `${userName}, ты сегодня отлично выглядишь!`
        ];
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        greetingElement.textContent = randomGreeting;
        greetingElement.style.color = '#28a745';
    }
}