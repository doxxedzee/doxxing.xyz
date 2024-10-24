(() => {

    let text = "would you like to enter hell?"

    let elem = document.getElementById("enter-type-in")
    let i = 0
    let speed = 50

    let elements_to_appear = document.getElementsByClassName("appear")

    function typeWriter() {
        if (i < text.length) {
            elem.innerHTML += text.charAt(i)
            i++
            setTimeout(typeWriter, speed)
        } else {
            for (let i = 0; i < elements_to_appear.length; i++) {
                elements_to_appear[i].animate([
                    { opacity: 0 },
                    { opacity: 1 }
                ], {
                    duration: 1000,
                    iterations: 1,
                    fill: "forwards"
                })
            }
        }
    }

    typeWriter()
})()
