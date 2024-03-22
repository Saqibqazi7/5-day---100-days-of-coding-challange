//Question no 13
/*let transports: string[] = ['Honda 125', 'Kawasaki Ninja', 'Range Rover'];
transports.forEach(transports => {
    console.log('I would like to own a', {transports});
});*/
//Question no 14
var guests = ["Ali", "Hamza", "Umar"];
guests.forEach(function (guests) {
    console.log('Dear', { guests: guests }, 'would you like to join me for dinner?');
});
//Question no 15
var unableToAttend = 'Hamza';
console.log({ unableToAttend: unableToAttend }, "can't make it to dinner,");
//replaceing the old guest
var newGuest = "Usman";
guests[guests.indexOf(unableToAttend)] = newGuest;
//New invitations
guests.forEach(function (guests) {
    console.log('Dear', { guests: guests }, 'would you like to join me for dinner?');
});
