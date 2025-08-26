// login functionality
// document.getElementById('loginBtn').addEventListener('click',function(e){
//      e.preventDefault();
//     const phnNumber= 123456;
//     const pin=1234;
//     const uNum= document.getElementById('pNum').value
//     const nConverted=parseInt(uNum);
    
//     const uPin=document.getElementById('uPin').value
//     const convertedPin=parseInt(uPin)
//         // console.log(nConverted,convertedPin)

//     if(phnNumber===nConverted && pin===convertedPin){
//         window.location.href='./home.html'
//     }
//     else{
//         alert('Invalid credentials')
//     }
//     }
        
// )


// updated login functionality and better

document.getElementById('loginBtn').addEventListener('click',function(e){
    e.preventDefault();
    const validPhn=12345678912;
    const validPin=1234;
    const userPhn=parseInt(document.getElementById('pNum').value);
    const userPin=parseInt(document.getElementById('uPin').value);
    if(validPhn===userPhn&&validPin===userPin){
        window.location.href='./home.html'
    }
    else{
        alert('Invalid credentials')
    }
})