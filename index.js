const dodger = document.getElementById('dodger')

const moveDodgerLeft = () => {
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)
    if(left > 0) {
    dodger.style.left = `${left - 5}px`
    }
}

const moveDodgerRight = () => {
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)
    if(left < 360) {
    dodger.style.left = `${left + 5}px`
    }
}

document.addEventListener('keydown', function(event) {
    if(event.key === 'ArrowLeft') {
        moveDodgerLeft()
    }
})

document.addEventListener('keydown', function(event) {
    if(event.key === 'ArrowRight') {
        moveDodgerRight()
    }
})   