let showBtn=document.querySelector('.show');
let input=document.querySelector('input')
;

showBtn.addEventListener('click',()=>{
 if(input.type == 'password'){
  input.type='text'
  showBtn.innerHTML='Hide'
 }
 else{
  input.type = 'password'
  showBtn.innerHTML='Show'
 }
})