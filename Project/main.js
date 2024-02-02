let users = generateRandomUsers(5); // Генерируем 5 случайных пользователей
let elem = document.querySelector('.list');
let winCount = 0;
let loseCount = 0;
let win = [2, 4]; // Пример выигрышных карточек

for (let user of users) {
    elem.insertAdjacentHTML('beforeend',
    `
    <div class='card' id='${user.id}' onclick='hello(${user.id})'>
        <h4 class='name'>${user.name}</h4>
        <p class='username'>${user.surname}</p>
        <p class='grade'>${user.grade}</p>
    </div>
    `
    );
}

function hello(id) {
    console.log(id);

    let modalText = document.getElementById('modalText');

    // Проверка, является ли карточка выигрышной или проигрышной
    if (winCount < 2 && win.includes(id)) {
        // Карточка выигрышная
        console.log('Угадал!');
        winCount++;
        modalText.textContent = 'Вы угадали!';
        showModal();
    } else if (loseCount < 3 && !win.includes(id)) {
        // Карточка проигрышная
        console.log('Не угадал!');
        loseCount++;
        modalText.textContent = 'Не угадали!';
        showModal();
    }

    // Скрыть карточку после проверки
    document.getElementById(id).style.display = 'none';

    // Проверка на завершение игры
    if (winCount === 2) {
        console.log('Вы выиграли!');
        playWinSound();
        modalText.textContent = 'Вы выиграли!';
        showModal();
    } else if (loseCount === 3) {
        console.log('Вы проиграли!');
        playLoseSound();
        modalText.textContent = 'Вы проиграли!';
        showModal();
    }
}

function generateRandomUsers(count) {
    let randomUsers = [];
    for (let i = 1; i <= count; i++) {
        let user = {
            id: i,
            name: `User${i}`,
            surname: `LastName${i}`,
            grade: `Grade${i}`
        };
        randomUsers.push(user);
    }
    return randomUsers;
}

function playWinSound() {
    document.getElementById('winSound').play();
}

function playLoseSound() {
    document.getElementById('loseSound').play();
}

function showModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
