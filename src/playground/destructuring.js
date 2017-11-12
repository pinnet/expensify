// const person = {
   
//     age:48,
//     name:'danny',
//     location:{
//         city: 'Brighton',
//         temp: 92
//     }
// }
// const Guest = ()=>{
//     console.log('this is a test');
//     return 'unknown';
// }
// const {name = Guest(),age} = person;

// console.log(name,age);

// const book = {
//     title:'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name:'Penguin'
//     }

// };
// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// const address = ['1299 S Juniper Street','Philly','Pen State','19247'];

// const [street, city, state, zip] = address;


const item = [ 'Cofee (hot)', '$2.00','$2.50','$2.75'];

const [description,,mediumPrice] = item;

console.log(`A medium ${description} cost ${mediumPrice}.`);