let string ='';
let button =document.querySelectorAll('.but');
Array.from(button).forEach((button)=>{
    button.addEventListener('click',(e)=>{
      if(e.target.innerHTML=='='){
        try{string=eval(string);}
        catch{string='error';}
        document.querySelector('input').value=string;
      }else  if(e.target.innerHTML=='C'){
        string='';
        document.querySelector('input').value=string;
      }
      else{
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
      }
    })
})