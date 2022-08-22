const input = document.getElementById("inpt")
const btn = document.getElementById("btn")
const feedback = document.getElementById("feedback")


btn.addEventListener("click", (e) => {
    e.preventDefault()
    let answer = input.value.toLowerCase()
    console.log(answer)
    let reverseString = answer.split("").reverse().join("")
    if (answer == reverseString) {
        feedback.innerText = ("is a palindrome")
        feedback.classList.add('burlywood')
        feedback.classList.remove('red')
    }
    else {
        feedback.innerText = ("is not a palindrome")
        feedback.classList.add('red')
        feedback.classList.remove('burlywood')

    }
})



