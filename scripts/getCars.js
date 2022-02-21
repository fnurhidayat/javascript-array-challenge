async function getCars() {
  const carsResponse = await fetch(
    "https://raw.githubusercontent.com/fnurhidayat/javascript-array-challenge/main/data/cars.json"
  );
  const cars = await carsResponse.json();
  return cars;
}
