export class Event {
     constructor(title, totalSeats) {
         this.title = title;
         this.totalSeats = totalSeats; 
         this.bookedSeats = 0; 
         this.waitlist = [];
         }
bookTickets(quantity, attendeeName) {
    // Validation: Prevent negative or fractional tickets
    if (quantity <= 0 || !Number.isInteger(quantity)) {
        return "Error: Ticket quantity must be a positive whole number.";
    }

    // Check if seats are available
    if (this.bookedSeats + quantity <= this.totalSeats) {
        this.bookedSeats += quantity;
        return `Success! Booked ${quantity} ticket(s) for ${attendeeName}.`;
    } else {
        // If sold out, add to waitlist
        this.waitlist.push(attendeeName);
        return`Event is sold out! ${attendeeName} has been added to the waitlist.`; 
    }
   }
}

export function searchEvents(events, city, maxPrice) {
    const wantedCity = city.trim().toLowerCase();

    return events.filter((event) => {
        const eventCity = event.city.trim().toLowerCase();
        return eventCity === wantedCity && event.price <= maxPrice;
    });
}

export function sortEventsByPrice(events) {
    return [...events].sort((eventA, eventB) => eventA.price - eventB.price);
}
