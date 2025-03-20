// 收合功能
function scrollShow(scrollID) {
    const show = document.querySelector(scrollID)
    show.classList.add("show")
}

// 彈跳視窗
function popUpShow(showElement) {
    document.body.style.overflow = "hidden";
    const show = document.querySelector(showElement);
    show.classList.add("popControl--active");
    document.body.style.overflow = "hidden";
    show.style.overflowY = "scroll";
}

function popUpClose(showElement) {
    document.body.style.overflow = "visible";
    const show = document.querySelector(showElement);
    show.classList.remove("popControl--active");
    document.body.style.overflow = "visible";
    show.style.overflowY = "hidden";
}
// 導覽列
const SP_btn = document.querySelector('.SP_btn')
const navList = document.querySelector('.navList')
SP_btn.addEventListener('click', () => {
    SP_btn.classList.toggle("SP_btn--active")
    navList.classList.toggle("navList--active")
})
const navLink = document.querySelectorAll('.navLink')
navLink.forEach(item => {
    item.addEventListener('click', () => {
        SP_btn.classList.toggle("SP_btn--active")
        navList.classList.toggle("navList--active")
    })
})