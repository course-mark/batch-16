const iphoneBag = [
    "iphone 12",
    "iphone 12 pro",
    "iphone 12 pro max",
]

const samsungBag = [
    "samsung s21",
    "samsung s21 ultra",
    "samsung s21 plus",
]

const combineBagDual = [
    iphoneBag,
    samsungBag,
]



const combineBag = [
    ...iphoneBag,
    ...samsungBag,
]
console.log(...combineBag); // two level array

// same as
// console.log("iphone 12", "iphone 12 pro", "iphone 12 pro max", "samsung s21", "samsung s21 ultra", "samsung s21 plus");
