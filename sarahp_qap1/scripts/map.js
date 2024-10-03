// Initialize the map
const map = L.map('map').setView([47.5615, -52.7126], 12);

// Add the OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// List of bike park locations
const bikeParks = [
  { name: "Kenmount Terrace Skatepark", coords: [47.5570534, -52.7911818], address: "Kenmount Terrace<br>St. John's, NL"},
  { name: "The Loop", coords: [47.57176971435547,-52.7067985534668], address: "Bannerman Park<br>St. John's, NL" },
  { name: "Bowring Park Skatepark", coords: [47.5221223,-52.7547716], address: "305 Waterford Bridge Rd<br>St. John's, NL"},
  { name: "Kelly's Brook Trail", coords: [47.567196, -52.730664], address: "Kelly's Brook Trail<br>St. John's, NL"}
];

// Add markers for each bike park
bikeParks.forEach(park => {
  L.marker(park.coords).addTo(map)
    .bindPopup(`<b>${park.name}</b><br>
      ${park.address}`);
});



