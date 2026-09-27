
document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("page") === "contact") {
    let map;

    function initMap() {
      map = L.map('map-canvas').setView([51.359750, -0.136040], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        .addTo(map);

      loadStore();
    }

    function loadStore() {
      const store = {
        name: "EFEX Academy",
        address: "EFEX Academy, London, UK",
        category: "Advertising & Banner Printing",
        coords: { lat: 51.359750, lng: -0.136040 },
        description: "Professional banner printing, shop signage, vehicle graphics and custom advertising solutions."
      };

      placeStoreMarker(store);
      initGeolocation();
    }

    function placeStoreMarker(store) {
      const redIcon = L.icon({
        iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -51],
        shadowSize: [41, 41]
      });

      const popup = `
        <div class="store-popup">
          <strong>${store.name}</strong><br>
          ${store.address}<br>
          <em>${store.category}</em><br>
        </div>
      `;

      L.marker([store.coords.lat, store.coords.lng], { icon: redIcon })
        .addTo(map)
        .bindPopup(popup)
        .openPopup();
    }

    function initGeolocation() {
      if (!navigator.geolocation) return;

      navigator.geolocation.getCurrentPosition(pos => {
        const userIcon = L.divIcon({
          className: "user-location-dot",
          html: "📍"
        });

        L.marker([pos.coords.latitude, pos.coords.longitude], { icon: userIcon })
          .addTo(map)
          .bindPopup("<strong>You are here</strong>");
      });
    }

    function openDirections(lat, lng) {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
    }

    initMap();
  }
});