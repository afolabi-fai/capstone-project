import { Event, searchEvents, sortEventsByPrice } from './event.js';

// Create an event with a maximum capacity of 3 seats
const myConcert = new Event("Tech Summit 2026", 3);

// Test 1: Normal booking
console.log(myConcert.bookTickets(2, "Alice")); 
// Expected: Success! Booked 2 ticket(s) for Alice.

// Test 2: Trying to book more than remaining capacity (only 1 seat left)
console.log(myConcert.bookTickets(2, "Bob")); 
// Expected: Event is sold out! Bob has been added to the waitlist.

// Test 3: Invalid quantity validation check
console.log(myConcert.bookTickets(1, "Charlie")); 
// Expected: Error: Ticket quantity must be a positive whole number.

// Search a list of events by city and maximum ticket price
const events = [
	{ title: "Tech Summit 2026", city: "Abuja", price: 120 },
	{ title: "Music Festival", city: "Lagos", price: 10},
	{ title: "Design Expo", city: "Ibadan", price: 60 }
];

const matchingEvents = searchEvents(events, "Lagos", 10);
console.log(matchingEvents);
// The Music Festival matches; the original events list remains unchanged.

const eventsByPrice = sortEventsByPrice(events);
console.log(eventsByPrice);
// Events are ordered from the lowest ticket price to the highest.