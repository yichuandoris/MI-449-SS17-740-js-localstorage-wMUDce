var daySwitchButton =
document.getElementById('daySwitchButton')

var theme = window.localStorage.getItem('theme')
if (theme === null) {
  theme = 'day-theme'
}
document.body.setAttribute('class', theme)

daySwitchButton.addEventListener('click', function () {
  if (theme === 'day-theme') {
    theme = 'night-theme'
  } else {
    theme = 'day-theme'
  }
  document.body.setAttribute('class', theme)
  window.localStorage.setItem('theme', theme)
})

var count = window.localStorage.getItem('count')
if (count === null) {
  count = 0
} else {
  count = parseInt(count)
}
count = count + 1
window.localStorage.setItem('count', count)

document.getElementById('count').innerHTML = 'You are visiting this page for ' + count + ' time(s)'
