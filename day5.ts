//Question no 13
let transports: string[] = ['Honda 125', 'Kawasaki Ninja', 'Range Rover'];
transports.forEach(transports => {
    console.log('I would like to own a', {transports});


//Question no 14
let guests: string[] = ["Ali","Hamza","Umar"];
guests.forEach (guests => {
    console.log('Dear', {guests}, 'would you like to join me for dinner?');
});

//Question no 15
let unableToAttend = 'Hamza';
console.log({unableToAttend}, "can't make it to dinner,");

//replaceing the old guest
let newGuest = "Usman";
guests[guests.indexOf(unableToAttend)] = newGuest;

//New invitations
guests.forEach(guests => {
    console.log('Dear', {guests}, 'would you like to join me for dinner?');
});