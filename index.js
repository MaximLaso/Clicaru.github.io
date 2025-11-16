function handleClick(element){
    const isActive = element.classList.contains('active');
    if(!isActive){
        element.classList.add('active');
    }
    else{
        element.classList.remove('active');
    }
}
function join_button(){
    const modal = document.getElementById('modal_1');
    const isActive = modal.classList.contains('modal_1-active');
    if(!isActive){
        modal.classList.add('modal_1-active');
        // Полностью блокируем скролл страницы
        document.body.style.overflow = 'hidden';
        document.body.style.overflowX = 'hidden';
        document.body.style.overflowY = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.overflowX = 'hidden';
        document.documentElement.style.overflowY = 'hidden';
    }
    else{
        modal.classList.remove('modal_1-active');
        // Восстанавливаем скролл полностью
        document.body.style.overflow = '';
        document.body.style.overflowX = '';
        document.body.style.overflowY = '';
        document.documentElement.style.overflow = '';
        document.documentElement.style.overflowX = '';
        document.documentElement.style.overflowY = '';
    }
}

function switchForm(formType) {
    const modal1 = document.getElementById('modal_1');
    const modal2 = document.getElementById('modal_2');
    
    if (formType === 'signin') {
        modal1.classList.add('modal_1-active');
        modal2.classList.remove('modal_2-active');
    } else if (formType === 'signup') {
        modal1.classList.remove('modal_1-active');
        modal2.classList.add('modal_2-active');
    }
}


// Закрытие модального окна при клике вне его
document.addEventListener('click', function(event) {
    const modal = document.getElementById('modal_1');
    const modal2 = document.getElementById('modal_2');
    if (event.target === modal) {
        modal.classList.remove('modal_1-active');
        document.body.style.overflow = '';
        document.body.style.overflowX = '';
        document.body.style.overflowY = '';
        document.documentElement.style.overflow = '';
        document.documentElement.style.overflowX = '';
        document.documentElement.style.overflowY = '';
    }
    if (event.target === modal2) {
        modal2.classList.remove('modal_2-active');
        document.body.style.overflow = '';
        document.body.style.overflowX = '';
        document.body.style.overflowY = '';
        document.documentElement.style.overflow = '';
        document.documentElement.style.overflowX = '';
        document.documentElement.style.overflowY = '';
    }
})



