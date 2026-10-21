const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Golden leaves dance gracefully upon the crisp autumn breeze, carpeting the quiet forest path in rich hues of amber, crimson, and burnt orange. The cool air carries the comforting scent of woodsmoke and fall pine. As twilight gently settles, nature embraces a peaceful, golden stillness before the winter cold.'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)