// const arr1 = [1, 2, 3, 4, 5, 6, 7,8,9,10,11]

// const [,,,,var5] = [1, 2, 3, 4, 5];
// const [,,,,,,,,,,fsdfdfsf] = arr1

// console.log(fsdfdfsf)

// const user = {
//     name: "Manjot",
//     email:"manjot@tickmark.io"
// }

let name1 = "Gagan"

let user = {
    name: "Manjot",
    email:"manjot@tickmark.io",
    address: [
        {
            addressLine1: "#45 Manjot Machines, NH1",
            city:"Amritsar",
            state: "Punjab",
            type: 'Shipping Address'
        },
        {
            addressLine1: "#22 abc street, NH33",
            city:"Ambala",
            state: "Haryana",
            type: 'Billing Address'
        },
        {
            addressLine1: "#7 z street, NH302",
            city:"Chandigarh",
            state: "Chandigarh",
            type: 'Gedi Address'

        }
    ]  
}

// let {name, email, address : { addressLine1, city, state } } = user

// let {address:[{city}]}=user
// 
// let {address:[,{state}]}=user

// let {address: [{state: state1},{state: state2}]}=user

let {address:[{city:Amritsar},{city:Ambala},{city:Chandigarh}]}=user



console.log(Amritsar,Ambala,Chandigarh)