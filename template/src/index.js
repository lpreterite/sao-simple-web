import "./index.scss"
import { search, msg } from "./utils"
(ctx=>{
    const $btns = document.querySelectorAll('.btn')
    $btns.forEach($btn=>{
        if($btn.hasAttribute("disabled")) return
        $btn.addEventListener("click", function(e){
            msg(e.target.dataset['msg'], e.target, {container: ".container"})
        })
    })
})(window)