const clicked = document.getElementById('viewCredentials');
clicked.addEventListener('click', (e)=>{
    e.preventDefault();
    const parent = clicked.parentElement;
    const staffName = document.getElementById('staffName').value;
    console.log(parent)
})