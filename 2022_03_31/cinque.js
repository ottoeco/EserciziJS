console.log('lezione 4');
console.log('usiamo gli eventi del DOM senza ON\n con il Listener')
function miaFunzione(){
    alert('mouse')
    document.body.style.backgroundColor = "lightgreen"
  /*  btn.style.backgroundColor="blue"
    btn.style.width = '200px'
    btn.style.height = '300px'
    btn.textContent="NUOVONOME"*/
    btn.className='btn btn-dark'
/*    btn.classList.add("shadow");
    btn.classList.remove('');*/
}

let btn=document.querySelector('#mio_bottone')
btn.addEventListener('mouseover',miaFunzione)

//let bs=document.getElementsByTagName('button') 