const widthValues: number[] = [36, 48, 60]; // Example width values
const heightValues: number[] = [48, 60, 72]; // Example height values

const priceChart: { [key: string]: number } = {};

for (const width of widthValues) {
  for (const height of heightValues) {
    const key: string = `${width}x${height}`;
    priceChart[key] = 0; // Set the initial price to 0 or specify the actual price
  }
}

console.log(priceChart);
