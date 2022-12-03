let x, y, hero, player1, player2

let xspeed = Math.round(Math.random())
if (x == 0) xspeed = -1

let yspeed = Math.random() / 2

let player1_speed = 0, player2_speed = 0
let player1_y, player2_y

let count1, count2

document.addEventListener("DOMContentLoaded", function () {
    W = document.activeElement.clientWidth
    H = document.activeElement.clientHeight

    hero = document.getElementsByClassName('hero')[0]

    player1 = document.getElementsByClassName('player1')[0]
    player2 = document.getElementsByClassName('player2')[0]

    count1 = document.getElementsByClassName('count1')[0]
    count2 = document.getElementsByClassName('count2')[0]

    player1_y = H / 2 - 125
    player1.style.top = player1_y

    player2.style.left = W - 50
    player2.style.top = H / 2 - 125

    hero.style.left = W / 2 + 'px'
    hero.style.top = H / 2 + 'px'

    x = W / 2 - 25
    y = W / 2 - 25

    addEventListener('keydown', change_speed)
    setInterval(move, 1)
})

function change_speed(e) {
    switch (e.key) {
        case 'KeyW': player1_speed = -1; break;
        case 'KeyS': player1_speed = 1; break;
    }
}

function loose(n) {
    xspeed *= -1
    x = W / 2
    y = H / 2
    if (n == 1) count1.innerHTML = parseInt(count1.innerHTML) + 1
    if (n == 2) count1.innerHTML = parseInt(count1.innerHTML) + 1
}
function move() {
    x += xspeed
    y += yspeed

    if ((x < 50 && (y > player1_y && y < player1_y + 250)) ||
        (x + 25 > W - 50 && (y > player2_y && y < player2_y + 250))) {
        xspeed *= -1
        yspeed += 1
        yspeed *= -1
    }

    if (x < 0) loose(1)
    if (x > W) loose(2)
    if (y < 0 || x > H - 50) yspeed *= -1

    hero.style.left = x
    hero.style.top = y

    player1_y += player1_speed
    player1.style.top += player1_y


    player2_y += player2_speed
    player2.style.top += player2_y
}