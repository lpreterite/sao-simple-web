import fromEntries from "object.fromentries"

export const search = (queryStr=location.search)=>fromEntries(queryStr.slice(1).split('&').map(str=>str.split('=')))
export const offset = (el) => {
    const rect = el.getBoundingClientRect()
    const win = el.ownerDocument.defaultView
    return {
        x: rect.left + win.pageXOffset,
        y: rect.top + win.pageYOffset
    }
}

var timer;
export function msg(message, target, options={}){
    const { duration, msgElement, container } = {duration:3000, container:"body", msgElement:"#msg", ...options}
    const originPoint = offset(document.querySelector(container))
    const targetPoint = offset(target)
    const $msg = document.querySelector(msgElement)
    $msg.innerText = message
    $msg.style.top = targetPoint.y - originPoint.y - $msg.clientHeight - 6 + "px"
    $msg.style.left = targetPoint.x - originPoint.x - $msg.clientWidth/2 + target.clientWidth/2 + "px"
    $msg.classList.add("msg--shown")
    if(!!timer) clearTimeout(timer)
    timer = setTimeout(() => {
        $msg.classList.remove("msg--shown")
        timer = ""
    }, duration);
}