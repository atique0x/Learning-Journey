# Geolocation API

The **Geolocation API** allows web applications to access the geographical location of a device (with the user’s permission). It provides latitude, longitude, and other location-related data.

## How It Works

1. The browser asks the user for permission to access their location.
2. If granted, the API provides the current position or tracks changes in position.
3. The location data can come from GPS, Wi-Fi, IP address, or other sources depending on device capabilities.

## Key Methods

### 1. `navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)`

Gets the current geographic position once.

- **successCallback(position)** — called with position object on success.
- **errorCallback(error)** — called on error (e.g., permission denied).
- **options** — optional settings like accuracy, timeout, maximum age.

### 2. `navigator.geolocation.watchPosition(successCallback, errorCallback, options)`

Tracks position continuously, calls `successCallback` whenever position changes.

- Returns a watch ID that can be used to stop watching.

### 3. `navigator.geolocation.clearWatch(watchId)`

Stops watching the position for the given watch ID.

| Error Code             | Description                               | Typical Handling / Message Example        |
| ---------------------- | ----------------------------------------- | ----------------------------------------- |
| `PERMISSION_DENIED`    | User denied permission to access location | Ask user to allow location access         |
| `POSITION_UNAVAILABLE` | Location information is unavailable       | Inform user location cannot be determined |
| `TIMEOUT`              | Request to get location timed out         | Suggest user try again or check signal    |

## Position Object

The position object passed to success callback contains:

- `coords.latitude` — Latitude in decimal degrees.
- `coords.longitude` — Longitude in decimal degrees.
- `coords.accuracy` — Accuracy in meters.
- `coords.altitude` — Altitude (if available).
- `coords.speed` — Speed in meters/second (if available).
- `timestamp` — Time at which the position was retrieved.

## Example

Link: https://atique0x.github.io/Learning-Journey/Recap%20Javascript/Important%20Topics/27_browser_apis/27.1_geolocation_api/index.html

```js
function showLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log(lat, long);
        const map = document.getElementById("mapId");
        map.setAttribute(
          "src",
          `https://maps.google.com/maps?q=${lat},${long}&z=10&output=embed`
        );
      },
      (error) => {
        console.error("Error getting location:", error.message);
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
```
