import { Event } from './event.js';

// Create an event with a maximum capacity of 3 seats
const myConcert = new Event("Tech Summit 2026", 3);

// Test 1: Normal booking
console.log(myConcert.bookTickets(2, "Alice")); 
// Expected: Success! Booked 2 ticket(s) for Alice.

// Test 2: Trying to book more than remaining capacity (only 1 seat left)
console.log(myConcert.bookTickets(2, "Bob")); 
// Expected: Event is sold out! Bob has been added to the waitlist.

// Test 3: Invalid quantity validation check
console.log(myConcert.bookTickets(-1, "Charlie")); 
// Expected: Error: Ticket quantity must be a positive whole number.