
const calculateDistance = (lat1: any, lon1: any, lat2: any, lon2: any) => {
    const earthRadius = 6371; // Earth's radius in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
    return distance;
};

const toRadians = (degrees: any) => degrees * Math.PI / 180;


const isWithinMaxDistance = (reference: any, location: any, maxDistance: any) => {
    const distance = calculateDistance(reference.latitude, reference.longitude, location?.latitude, location?.longitude);
    return distance <= maxDistance;
};

export default isWithinMaxDistance;




// const reference = { latitude: -32.8574, longitude: -68.8368 };
// const location = { latitude: -32.855, longitude: -68.832 };
// const maxDistance = 5; // 5 kilómetros