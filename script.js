// login functionality
document.getElementById('loginBtn').addEventListener('click',function(e){
     e.preventDefault();
    const phnNumber= 123456;
    const pin=1234;
    const uNum= document.getElementById('pNum').value
    const nConverted=parseInt(uNum);
    
    const uPin=document.getElementById('uPin').value
    const convertedPin=parseInt(uPin)
        // console.log(nConverted,convertedPin)

    if(phnNumber===nConverted && pin===convertedPin){
        window.location.href='./home.html'
    }
    else{
        alert('Invalid credentials')
    }
    }
        
)