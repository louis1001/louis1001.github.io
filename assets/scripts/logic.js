
function translateTo(target) {
    localStorage.setItem('preferedLanguage', target)
    location.replace(target)
}