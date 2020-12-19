let icons1 = document.querySelector('.fa-bars');
let icons2 = document.querySelector('.fa-times');
let aside = document.querySelector('aside')
let h1 = document.querySelector('header h1')
let age = document.getElementById('age'); 
let gender = document.getElementById('gender')
let active = document.getElementById('active')
let add =document.getElementById('add')
let add1 =document.getElementById('add1')
let result = document.getElementById('result') 
console.log(add1)
icons1.onclick = function()
{
    icons1.style.display="none"
    icons2.style.display="block"
    aside.style.display="block"
    h1.style.display="none"

}
icons2.onclick = function()
{
    icons1.style.display="block"
    icons2.style.display="none"
    aside.style.display="none"
    h1.style.display="block"

}

add.onclick = function()
{
    if(age.value >= 10 && age.value <= 100)
    {
        if(gender.value=='male')
        {
           if(active.value=='weak')
           {
                result.innerText = age.value*24*1*1.3 + '    ' + 'colories'       
                result.style.color="red"  
                result.style.backgroundColor="blue"     
           }
           else if(active.value=='average')
           {
             result.innerText = age.value*24*1*1.5 +'    '  + 'colories'  
             result.style.color="red"                    

           }
           else if(active.value=='High'|| active.value=="high")
           {
            result.innerText = age.value*24*1*1.8 + '   ' + 'colories'                 
            result.style.color="red"    

           }
           else
           {
                result.innerHTML = 'please eneter your active';
                result.style.color="red";
           }


        }
        else
        {
            result.innerHTML = 'please eneter your information';
            result.style.color="red";
        }
        
    }
  

    
}

add1.onclick = function()
{
    if(age.value >= 10 && age.value <= 100)
    {
        if(gender.value=='female')
        {
           if(active.value=='weak')
           {
               result.innerText = age.value*24*0.9*1.3 + '    ' + 'colories' 
               result.style.color="red"                 

           }
           else if(active.value=='average')
           {
            result.innerText = age.value*24*0.9*1.5 +'    '  + 'colories'
            result.style.color="red"                      
           }
           else if(active.value=='High'|| active.value=="high")
           {
            result.innerText =age.value*24*0.9*1.8 + '   ' + 'colories'
            result.style.color="red"                     

           }
           else
           {
                result.innerHTML = 'please eneter your active';
                result.style.color="red";
           }
        }
        
    }

}

