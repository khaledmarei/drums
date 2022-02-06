let w= new Audio("sounds/tom-1.mp3")
let a = new Audio("sounds/tom-2.mp3")
let s = new Audio("sounds/tom-3.mp3")
let d = new Audio("sounds/tom-4.mp3")
let j = new Audio("sounds/snare.mp3")
let l = new Audio("sounds/kick-bass.mp3")
let k = new Audio("sounds/crash.mp3")












for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll('button')[i].addEventListener("click",function() {
kk=this.innerHTML
console.log(kk);

        switch (kk) {
            case 'w':
                w.play()
                break;
        
            case 'a' :
                a.play()
            break;
            case 's' :
                s.play()
                break;
                case 'd' :
                    d.play()
                    break;
                    case 'j' :
                        j.play()
                        break;
                        case 'k' :
                            k.play()
                            break;
                            case 'l' :
                                l.play()
                                break;
            default:
                break;
        }
})
}


document.addEventListener('keypress' , function (e) {

soo(e.key)
    
})



function soo(p) {
    console.log(p);
    switch (p) {
        case 'w':
            w.play()
            break;
    
        case 'a' :
            a.play()
        break;
        case 's' :
            s.play()
            break;
            case 'd' :
                d.play()
                break;
                case 'j' :
                    j.play()
                    break;
                    case 'k' :
                        k.play()
                        break;
                        case 'l' :
                            l.play()
                            break;
        default:
            break;
    }
}