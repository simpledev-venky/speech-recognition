if (speech) {
    console.log("browser suppot")
    // console.log(speech)
    const container = document.querySelector('.container')

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const speech = new SpeechRecognition()
    speech.interimResults = true
    speech.continuous = true
    speech.lang = 'english'

    speech.addEventListener('result', (e) => {
        const txt = Array.from(e.results).map(t => t[0]).map(t => t.transcript).join('')
        console.log(txt)
        const para = document.createElement('p')
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

