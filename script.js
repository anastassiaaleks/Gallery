const imgNumber=15
class modalWindow{
    constructor(){}
    create(){
        this.elem=document.createElement('div')
        this.elem.classList.add('mainDiv')
        document.body.appendChild(this.elem)
        this.createImg()
    }
    createImg(){
        for(let i=1; i<=imgNumber; i++){
            let imgDiv=document.createElement('div')
            imgDiv.classList.add('imgDiv')
            imgDiv.innerHTML=`
                <img id="${i}" src="./img/${i}.jpg" alt="" />
            `
            imgDiv.addEventListener('click', ()=>{this.modal(imgDiv.children[0])})
            this.elem.appendChild(imgDiv)
        } 
    }
    slider(flag, img){
        let arrImg=this.elem.querySelectorAll('img')
        arrImg.forEach((elem, index)=>{
            if(img.id==index+1 && elem.id>=1 && elem.id<=imgNumber){
                this.modalWimdowDiv.remove()
                if(flag==='left' && elem.id>1){
                    this.modal(arrImg[elem.id-2])
                }else if(flag==='right' && elem.id<imgNumber){
                    this.modal(arrImg[elem.id])
                }else{this.modal(img)}
            }
        })
    }
    modal(img){
        this.modalWimdowDiv=document.createElement('div')
        this.modalWimdowDiv.classList.add('modalMain')
        this.modalWimdowDiv.innerHTML=`
            <div class='modalDiv'>
                <img src="${img.src}" alt="" />
                <button class="close">x</button>
                <button class="left"><</button>
                <button class="right">></button>
            </div>
        `
        this.modalWimdowDiv.addEventListener('click', (event)=>{
            if(event.path[0].toString()=='[object HTMLDivElement]'){
                this.modalWimdowDiv.remove()
            }
        })
        let closeBtn=this.modalWimdowDiv.querySelector('.close')
        closeBtn.addEventListener('click', ()=>{this.modalWimdowDiv.remove()})

        let leftBtn=this.modalWimdowDiv.querySelector('.left')
        leftBtn.addEventListener('click', ()=>{this.slider("left", img)})
        
        let rightBtn=this.modalWimdowDiv.querySelector('.right')
        rightBtn.addEventListener('click', ()=>{this.slider("right", img)})

        document.body.appendChild(this.modalWimdowDiv)
    }
}
let modalW=new modalWindow().create()