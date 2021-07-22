const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const themeStyleSheet = document.getElementById('theme-style')
const themeDots = document.querySelectorAll('.theme-dot')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)


const setTheme = (mode) => {
  if (mode === 'pink'){

    themeStyleSheet.href="src/pink.css"

  } else if(mode === 'yellow'){

    themeStyleSheet.href="src/yellow.css"
  }
  else if(mode === 'blue'){

    themeStyleSheet.href="src/blue.css"

  }else if(mode === 'light'){

    themeStyleSheet.href="src/styles.css"

  }else if (mode === 'green'){

    themeStyleSheet.href="src/green.css"

  }
}



themeDots.forEach(themeDot => {
  themeDot.addEventListener('click', (e) => {
    
    const mode = e.target.dataset.mode
    setTheme(mode)
  })
})

