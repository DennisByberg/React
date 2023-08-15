// Skapa ett alias...
// type ReactSetState = React.Dispatch<React.SetStateAction<string>>;
type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;

const apiKey: string = "4b7c486a47f75f7b6f65c45f7b7a9c96";

// Reverse geocoding: omvandla coords till en adress
async function reverseGeocode(
  lat: number,
  lon: number,
  setAddress: ReactSetState<string>
) {
  // TODO: returnera ett objekt istället för en sträng...

  const numberOfResponses = 5;
  const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${numberOfResponses}&appid=${apiKey}`;
  const response = await fetch(url);
  // TODO: fixa interface för datan...
  const data: Place[] = await response.json();
  console.log("Reverse geocode", data);
  // Setaddress
  const firstAddress: string = data[0].name;
  setAddress(firstAddress);
}

interface Place {
  name: string;
}

function getPosition(setMessage: ReactSetState<string>) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        console.log("position is: ", position);
        // set message to longtidu & latitude.
        setMessage(
          `Your postion is: lat.${position.coords.latitude} long.${position.coords.longitude}`
        );
      },
      (error) => {
        console.log(error);
        setMessage("Please enable postion to use this app");
      }
    );
  }
}

export { getPosition, reverseGeocode };
