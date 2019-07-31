let data=[
    {
        imgSrc:"https://f11.baidu.com/it/u=32057038,317415881&fm=72",
        goodName:"狗狗一号",
        goodPrice:10,
        num:0,
        checked: false,
        place:"深圳南山区",
        age:1,
        type:"哈士奇",
        sex:"公",
        describe:"该狗狗很乖，温顺可爱，无遗传病史"     
    },
    {
        imgSrc:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2071948473,1010365220&fm=26&gp=0.jpg",
        goodName:"狗狗二号",
        goodPrice:20,
        num:0,
        checked: false,
        place:"深圳宝安区",
        age:2,
        type:"阿拉斯加",
        sex:"母",
        describe:"该狗狗很聪明，记性好，不怕弄丢，无遗传病史" 
    },
    {
        imgSrc:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3051592192,1422888722&fm=26&gp=0.jpg",
        goodName:"狗狗三号",
        goodPrice:30,
        num:0,
        checked: false,
        place:"深圳罗湖区",
        age:3,
        type:"柯基",
        sex:"公",
        describe:"该狗狗比较憨厚，就知道吃，但很可爱，无遗传病史"  
    },
    {
        imgSrc:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3100471743,4243261788&fm=26&gp=0.jpg",
        goodName:"狗狗四号",
        goodPrice:40,
        num:0,
        checked: false,
        place:"深圳福田区",
        age:4,
        type:"西施犬",
        sex:"母",
        describe:"该狗狗较调皮，喜欢上蹿下跳，无遗传病史"  
    },
    {
        imgSrc:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3672724211,207396175&fm=26&gp=0.jpg",
        goodName:"狗狗五号",
        goodPrice:50,
        num:0,
        checked: false,place:"深圳龙华区",
        age:5,
        type:"博美犬",
        sex:"公",
        describe:"该狗狗较活泼，喜欢粘人，无遗传病史"  
    },
    {
        imgSrc:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3102830555,2065337148&fm=26&gp=0.jpg",
        goodName:"狗狗六号",
        goodPrice:60,
        num:0,
        checked: false,place:"深圳龙岗区",
        age:6,
        type:"澳洲牧牛犬",
        sex:"母",
        describe:"该狗狗有点懒，不喜欢动，无遗传病史"  
    }                 
];


let initState = {
    list: data,
    detail: {}
    
}


// let lastCountArr = [];
// for(let i=0; i<initState.list.length; i++){ 
//     lastCountArr.push(0)
// }
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "addOne" : 
        
            // if(action.id){
            //     state[action.id].num ++                    
            //     if(action.target.parentNode.parentNode.parentNode.firstChild.checked){
            //         lastCountArr[action.id*1-1] = state[action.id].num
            //     }
            //     else{
            //         lastCountArr[action.id*1-1] = 0
            //     }
            //     for(let j=0; j<lastCountArr.length; j++){
            //         state[0].sum += lastCountArr[j] * state[j+1].goodPrice
            //     }                
            // }
            // return {...state}
            
            {
                const target = state.list[action.idx]; //拿到子目标
                const good = Object.assign({}, target, { num: target.num + 1 }); //修改子目标
                // console.log(state.list[action.idx]) //修改前的子目标数据
                const list = [].concat(state.list);  //克隆一份数据源的目标属性
                list.splice(action.idx, 1, good);  //根据得到的修改后的子目标对克隆到的数据源目标属性修改
                // console.log(initState.list[action.idx]) //原始数据，自始至终不会改变
                return { ...state, list };  //返回修改后的数据，会重新渲染
            }
        case "subOne":
            // if(action.id){
            //     if(state[action.id].num === 1){
            //             state[action.id].num = 1
            //     }else{
            //         state[action.id].num --
            //     }  
            //     if(action.target.parentNode.parentNode.parentNode.firstChild.checked){
            //         lastCountArr[action.id*1-1] = state[action.id].num
            //     }
            //     else{
            //         lastCountArr[action.id*1-1] = 0
            //     }
            //     for(let j=0; j<lastCountArr.length; j++){
            //         state[0].sum += lastCountArr[j] * state[j+1].goodPrice
            //     }    
            // }
            // return {...state}
            {
                const target = state.list[action.idx];
                const good = Object.assign({}, target, { num: target.num < 2 ? 1 : target.num -1 })
                const list = [].concat(state.list);
                list.splice(action.idx, 1, good);
                return { ...state, list };
            }

        case "checkValue":
            // if(action.checked){                
            //     lastCountArr[action.index] = state[action.index*1+1].num
            // }else{
            //     lastCountArr[action.index] = 0
            // }
            // for(let j=0; j<state.list.length-1; j++){
            //     state[0].sum += lastCountArr[j] * state[j+1].goodPrice*1
            // }
            // return {...state}
           {
                const target = state.list[action.idx];
                const good = Object.assign({}, target, { checked: !target.checked })
                const list = [].concat(state.list);
                list.splice(action.idx, 1, good);
                return { ...state, list };
           }
        case "addTo":
            {
                const target = state.list[action.idx];
                const good = Object.assign({}, target, { num: target.num + 1 })
                const list = [].concat(state.list);
                list.splice(action.idx, 1, good);
                return { ...state, list };
            }
        case "toDetail":
            {
                const target = state.list[action.idx];
                const detail = Object.assign({},target);
                console.log(detail);
                console.log("=========")
                console.log(initState.detail)
                return { ...state,detail}

            }
        case "delect":
            {
                const target = state.list[action.idx];
                const good = Object.assign({},target,{num: 0});
                const list = [].concat(state.list);
                list.splice(action.idx,1,good);
                return { ...state, list };
            }
            
        default:
            return state;
    }
}
export default reducer