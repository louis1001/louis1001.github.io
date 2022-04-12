
window.addEventListener('DOMContentLoaded', () => {
    const codes = document.querySelectorAll("pre[language]")
    // Process code block
    for (let codeBlock of codes) {
        let language = codeBlock.getAttribute("language")
        let code = codeBlock.querySelector("code")

        let highlighted = highlight(code.innerText, language)
        code.innerHTML = highlighted
    }
})