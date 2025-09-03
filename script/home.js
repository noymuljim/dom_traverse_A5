function getElement(id){
    const element=document.getElementById(id)
    return element;
}


//heart count
const lovebtns=document.getElementsByClassName('love-btn')
    for( let lovebtn of lovebtns){
        lovebtn.addEventListener('click',function(){
            
            const loveValue=lovebtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[0].children[0].innerText;


      const currentLove=Number(loveValue)+ 1;

   getElement('love-count').innerText=currentLove



        })
    }
const callbtns=document.getElementsByClassName('call')
    for( let callbtn of callbtns){
        callbtn.addEventListener('click',function(){
            const coinValue=callbtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[1].children[0].innerText;

           
            const currentCoin=Number(coinValue)-20;
            getElement('coins').innerText=currentCoin
            



            const serviceName=callbtn.parentNode.parentNode.children[1].children[0].innerText;
            const serviceNumber=callbtn.parentNode.parentNode.children[2].children[0].innerText;
    
            alert("📞 "+ serviceName  +"  "+  serviceNumber)
           

            const cardContainer=document.getElementById('right-container');
            const newCard=document.createElement('div')

             newCard.innerHTML=`
                        <div class=" flex justify-between items-center bg-gray-100 p-3 rounded-lg my-3">
                        <div>
                            <h1>${serviceName}</h1>
                             <h1>${serviceNumber}</h1>
                        </div>
                        <h1>time</h1>
                        </div>
            `
            
            cardContainer.append(newCard)
        })
    }






    //clear btn

    document.getElementById('clear-btn').addEventListener('click',function(){
    const cartContainer=getElement('right-container');
    cartContainer.innerHTML='';
     
})











