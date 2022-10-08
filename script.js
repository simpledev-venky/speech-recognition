const container = document.querySelector('.container')
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const speech = new SpeechRecognition()

if (speech) {
    console.log("browser suppot")
    // console.log(speech)
    speech.interimResults = true
    speech.continuous = true
    speech.lang = 'english'
    const para = document.createElement('p')
    speech.addEventListener('result', (e) => {
        const txt = Array.from(e.results).map(t => t[0]).map(t => t.transcript).join('')
        console.log(txt)
        container.appendChild(para)
        para.innerText = txt
    })
    // speech.addEventListener('end',()=>{speech.start()})
    startbtn.addEventListener('click', () => { speech.start() })
    stopbtn.addEventListener('click', () => { speech.stop() })

}
else {
    document.write("browser do not suppot")

}

