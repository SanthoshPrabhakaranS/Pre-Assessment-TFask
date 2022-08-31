const objectOne = {
    1:{
        'operation':'success',
        'color':'blue',
        'place':'mumbai'
    },
    2:{
        'operation':'failed',
        'color':'yellow',
        'place':'chennai'
    },
    3:{
        'operation':'success',
        'color':'red',
        'place':'bangalore'
    },
    4:{
        'operation':'failed',
        'color':'navy',
        'place':'kolkatta'
    },
    5:{
        'operation':'failed',
        'color':'orange',
        'place':'hyderabad'
    },
    6:{
        'operation':'success',
        'color':'purple',
        'place':'delhi'
    },
}
 
Object.keys(objectOne).map(find)

function find(key) { 
    if(objectOne[key].operation === 'failed'){
        objectOne[key].color = 'RED'
    }
}
    
console.log(objectOne)






