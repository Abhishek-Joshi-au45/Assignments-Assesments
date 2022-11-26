
const InputValue = document.querySelector('#InputValue')
const MaxValue = document.querySelector('#MaxValue')

const btn = document.querySelector('#btn')

const res =  document.getElementById('result')

btn.addEventListener('click',(event)=>{
    if(InputValue.value > MaxValue.value){
       res.innerHTML = "InputValue should always less than Max vlaue"
    }
    else{
        res.innerHTML= "Ok"
    }


    // var sum = Number((InputValue).value)+Number((MaxValue).value);
    // document.getElementById('result').innerHTML = sum
    InputValue.value=null
    MaxValue.value=null
    event.preventDefault();
}
)
