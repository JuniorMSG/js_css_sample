// Import the SCSS file for Parcel to process it
import '../css/parcel.scss';

// Your JavaScript code can go here
console.log('Parcel script loaded');

async function test() {
    const promise = Promise.resolve('123');
    console.log(await promise);
}

test()