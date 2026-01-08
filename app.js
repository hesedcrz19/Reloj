// ----------------------- HEADER ----------------------
const COLOR_THEME_BUTTON = document.querySelector(".header__options__theme__label");
const COLOR_OPTIONS = document.querySelectorAll(".header__options__theme__label__color");


const COLOR_SELECTIONED = (event)=>{

}

const SHOW_COLOR_ANIMATION = ()=>{
    setTimeout(()=>{
        COLOR_OPTIONS.forEach((color)=>{
            color.style.display = 'block';
            color.style.animationName = "show-color-options";
        })
    },80)
}
const HIDE_COLOR_ANIMATION = ()=>{
    COLOR_OPTIONS.forEach((color)=>{
        color.style.animationName = "hide-color-options";
    })
}

const  TOGGLE_COLOR_OPTIONS = (event)=>{
    event.preventDefault();
    let open = event.currentTarget.classList.contains('open');
    if(open){
        HIDE_COLOR_ANIMATION();
        setTimeout(()=>{
            COLOR_THEME_BUTTON.classList.remove('open');
            COLOR_THEME_BUTTON.classList.add('close');
            COLOR_THEME_BUTTON.ani
        },300)
    }else{
        COLOR_THEME_BUTTON.classList.remove('close');
        COLOR_THEME_BUTTON.classList.add('open');
        SHOW_COLOR_ANIMATION();
    }
}

COLOR_THEME_BUTTON.addEventListener('click',TOGGLE_COLOR_OPTIONS);