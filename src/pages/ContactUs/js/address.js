export default async function address({ apiKey, lat, lng }) {
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`);
        if (!response.ok) {
            throw new Error('Failed to fetch address data');
        }
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            return data.results[0].formatted_address;
        } else {
            throw new Error('No address found');
        }
    } catch (error) {
        console.error('Error fetching address:', error);
        throw error; // re-throw the error so it can be caught by the caller
    }
}
