import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { searchEvents, sortEventsByPrice } from './event.js';

const events = [
    { title: 'Tech Summit', city: 'Abuja', price: 120 },
    { title: 'Music Festival', city: 'Lagos', price: 10 },
    { title: 'Design Expo', city: 'Ibadan', price: 60 },
    { title: 'Lagos Workshop', city: 'Lagos', price: 25 }
];

describe('searchEvents', () => {
    it('returns events in the requested city at or below the maximum price', () => {
        const result = searchEvents(events, 'lagos', 25);

        assert.deepEqual(result, [
            { title: 'Music Festival', city: 'Lagos', price: 10 },
            { title: 'Lagos Workshop', city: 'Lagos', price: 25 }
        ]);
    });

    it('returns an empty list when no events match', () => {
        const result = searchEvents(events, 'Nairobi', 100);

        assert.deepEqual(result, []);
    });
});

describe('sortEventsByPrice', () => {
    it('sorts events from the lowest price to the highest', () => {
        const result = sortEventsByPrice(events);

        assert.deepEqual(result.map((event) => event.price), [10, 25, 60, 120]);
    });

    it('does not change the original events list', () => {
        const originalOrder = [...events];

        sortEventsByPrice(events);

        assert.deepEqual(events, originalOrder);
    });
});
