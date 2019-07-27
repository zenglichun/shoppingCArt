let date=[
    {
        sum: 0,
        
    },
    {
        flag:1,
        imgSrc:"https://f11.baidu.com/it/u=32057038,317415881&fm=72",
        goodName:"狗狗一号",
        goodPrice:18,
        num:1
    },
    {
        flag:2,
        imgSrc:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2071948473,1010365220&fm=26&gp=0.jpg",
        goodName:"狗狗二号",
        goodPrice:28,
        num:1
    },
    {
        flag:3,
        imgSrc:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3051592192,1422888722&fm=26&gp=0.jpg",
        goodName:"狗狗三号",
        goodPrice:38,
        num:1
    },
    {
        flag:4,
        imgSrc:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3100471743,4243261788&fm=26&gp=0.jpg",
        goodName:"狗狗四号",
        goodPrice:48,
        num:1
    },
    {
        flag:5,
        imgSrc:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3672724211,207396175&fm=26&gp=0.jpg",
        goodName:"狗狗五号",
        goodPrice:58,
        num:1
    },
    {
        flag:6,
        imgSrc:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3102830555,2065337148&fm=26&gp=0.jpg",
        goodName:"狗狗六号",
        goodPrice:68,
        num:1
    }                 
]
let lastCountArr = [];
for(let i=0; i<date.length-1; i++){ 
    lastCountArr.push(0)
}
const reducer = (state = date, action) => {
    state[0].sum = 0
    switch (action.type) {
        case "加一" :  
            if(action.id){
                state[action.id].num ++
                    
                if(action.target.parentNode.parentNode.parentNode.firstChild.checked){
                    lastCountArr[action.id*1-1] = state[action.id].num
                }
                else{
                    lastCountArr[action.id*1-1] = 0
                }
                for(let j=0; j<lastCountArr.length; j++){
                    state[0].sum += lastCountArr[j] * state[j+1].goodPrice
                }
                
            }
            return {...state}
        case "减一":
            if(action.id){
                if(state[action.id].num === 1){
                        state[action.id].num = 1
                }else{
                    state[action.id].num --
                }  
                if(action.target.parentNode.parentNode.parentNode.firstChild.checked){
                    lastCountArr[action.id*1-1] = state[action.id].num
                }
                else{
                    lastCountArr[action.id*1-1] = 0
                }
                for(let j=0; j<lastCountArr.length; j++){
                    state[0].sum += lastCountArr[j] * state[j+1].goodPrice
                }    
            }
            return {...state}
        case "求和":
            if(action.checked){                
                lastCountArr[action.index] = state[action.index*1+1].num
            }else{
                lastCountArr[action.index] = 0
            }
            for(let j=0; j<date.length-1; j++){
                state[0].sum += lastCountArr[j] * state[j+1].goodPrice*1
            }
            return {...state}
        default:
            return {...state}
    }
}
export default reducer