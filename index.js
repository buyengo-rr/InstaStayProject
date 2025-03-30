document.addEventListener('DOMContentLoaded', () => {
    fetch('db.json')
      .then(response => response.json())
      .then(data => {
        displayHotels(data.hotels);
      })
      .catch(error => console.error('Error fetching data:', error));
  function displayHotels(hotels) {
      const servicesSection = document.querySelector('#services .container');
      const hotelsGrid = document.createElement('div');
      hotelsGrid.className = 'services-grid';
      hotels.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.className = 'service-card';
        hotelCard.innerHTML = `
          <div class="service-icon">
            <i class="fas fa-hotel"></i>
          </div>
          <img src="${hotel.image}" alt="${hotel.name}" style="width:100%; height:200px; object-fit:cover; border-radius:8px; margin-bottom:15px;">
          <h3>${hotel.name}</h3>
          <p><i class="fas fa-map-marker-alt"></i> ${hotel.location}</p>
          <p><i class="fas fa-star"></i> ${hotel.rating}/5</p>
          <p><strong>KSh ${hotel.price.toLocaleString()}/night</strong></p>
          <button class="btn book-btn" data-id="${hotel.id}">Book Now</button>
        `;
        hotelsGrid.appendChild(hotelCard);
      });
      servicesSection.appendChild(hotelsGrid);
  document.querySelectorAll('.book-btn').forEach(button => {
        button.addEventListener('click', (e) => {
          const hotelId = e.target.getAttribute('data-id');
          alert(`Booking hotel with ID: ${hotelId}`);
          
        });
      });
    }
  });