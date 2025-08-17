const fishes = document.querySelectorAll('.fish')
let fish = [...fishes]

// console.log([...fish])
fish.forEach(item => {
    item.addEventListener('mouseover', handleMouseOver)
    item.addEventListener('mouseleave', handleMouseLeave)
    item.addEventListener('mousemove', handleMouseMove)
})

function handlePosition(e) {
    const ID = e.target.getAttribute('data-hoverDiv-id')
    // console.log(ID)
    const wrapper = document.getElementById(ID)

    let top = ""

    if (!(e.target.getBoundingClientRect().top + wrapper.offsetHeight > innerHeight)) {
        top = `${e.clientY + e.target.offsetHeight}px`
    } else {
        top = `${e.clientY - (wrapper.offsetHeight + e.target.offsetHeight)}px`
    }

    return `position: fixed; left: ${e.clientX - wrapper.offsetWidth / 2}px; top:${top};`
}


function handleMouseOver (e) {
    const hoverContent = e.target.getAttribute("data-info")
    // console.log(hoverContent)

    const ID = Math.random().toString(36).substring(2,9)
    // console.log(ID)

    const wrapper = document.createElement('div')
    e.target.setAttribute('data-hoverDiv-id', ID)
    wrapper.setAttribute('data-hoverDiv-wrapper', '')
    wrapper.setAttribute("id", ID)

    // console.log(wrapper)

    wrapper.setAttribute('style', 'opacity: 1; transform: scale(0.5);')

    wrapper.innerHTML = hoverContent
    document.body.append(wrapper)

    wrapper.setAttribute('style', handlePosition(e))
}


function handleMouseLeave (e) {
    const ID = e.target.getAttribute('data-hoverDiv-id')

    document.getElementById(ID).style.opacity = 0
    document.getElementById(ID).style.transform = "scale(0.5)"

    setTimeout(() => {
        document.getElementById(ID).remove()
    }, 150)
}


function handleMouseMove (e) {
    const ID = e.target.getAttribute('data-hoverDiv-id')
    const wrapper = document.getElementById(ID)
    wrapper.setAttribute("style", handlePosition(e))
}




const audio = document.getElementById('bg-music');
    const toggleBtn = document.getElementById('music-toggle');

    let isPlaying = false;

    toggleBtn.addEventListener('click', () => {
      if (!isPlaying) {
        audio.play();
        toggleBtn.innerHTML = "<i class='ph-fill ph-speaker-high'></i>"
        isPlaying = true;
      } else {
        audio.pause();
        toggleBtn.innerHTML = "<i class='ph-fill ph-speaker-slash'></i>"
        isPlaying = false;
      }
    });