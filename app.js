// ----------------------- HEADER ----------------------
const COLOR_THEME = document.querySelector(".header__options__theme");
const COLOR_THEME_BUTTON = document.querySelector(".header__options__theme__label");
const COLOR_OPTIONS = document.querySelectorAll(".header__options__theme__label__color");


const COLOR_SELECTIONED = (event)=>{
    if(!event.target.matches('.header__options__theme__label__color'))return

    TOGGLE_COLOR_OPTIONS();

    let oldColor = getComputedStyle(COLOR_THEME_BUTTON).getPropertyValue('--color-option');;
    let newColor = getComputedStyle(event.target).getPropertyValue('--color-option');

    COLOR_THEME_BUTTON.style.setProperty('--color-option',newColor)
    event.target.style.setProperty('--color-option',oldColor)

    document.documentElement.style.setProperty('--primary-color',newColor)
}

document.createElement('p').style.getPropertyValue

const RECURSIVE_TOGGLE_COLOR_OPTIONS = ()=>{
    let locked = false;

    return ()=>{
        if(locked) return;
        let open = COLOR_THEME_BUTTON.classList.contains('open');
    
        if(open){
            locked = true
    
            COLOR_OPTIONS.forEach((color)=>{
                color.style.animationName = "hide-color-options";
            })

            setTimeout(()=>{
                COLOR_THEME_BUTTON.classList.remove('open');
                COLOR_THEME_BUTTON.classList.add('close');
                setTimeout(()=>{
                    locked = false
                    removeEventListener('click',TOGGLE_COLOR_OPTIONS)
                },50)
            },300)
        }else{
            locked = true
    
            COLOR_THEME_BUTTON.classList.remove('close');
            COLOR_THEME_BUTTON.classList.add('open');
            setTimeout(()=>{
                COLOR_OPTIONS.forEach((color)=>{
                    color.style.display = 'block';
                    color.style.animationName = "show-color-options";
                })

                setTimeout(()=>{
                    locked = false
                    addEventListener('click',TOGGLE_COLOR_OPTIONS)
                },300)
            },50)
        }
    }
}

const TOGGLE_COLOR_OPTIONS = RECURSIVE_TOGGLE_COLOR_OPTIONS();

COLOR_THEME_BUTTON.addEventListener('click',TOGGLE_COLOR_OPTIONS);
COLOR_THEME.addEventListener('click',COLOR_SELECTIONED);

const funcion = ()=>{
    let contador = 0
    console.log('funcion')
    return ()=>{
        contador++
        console.log(contador)
    }
}