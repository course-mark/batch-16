const iphoneDetails = {
    iphoneModel: 'iPhone 12',
    iphoneColor: 'blue',
    iphoneStorage: '128GB',
    iphonePrice: 799,
}

const samsungDetails = {
    samsungModel: 'Samsung S21',
    samsungColor: 'black',
    samsungStorage: '256GB',
    samsungPrice: 899,
}



const combineDetails = {
    ...iphoneDetails,
    ...samsungDetails,
}

const updatedIphoneDetails = {
    iphonePrice: 899,
    ...iphoneDetails,
}

console.log(updatedIphoneDetails)