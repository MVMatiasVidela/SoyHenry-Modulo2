const axios = require('axios');
  const genres = [
      "Acción",
      "Aventura",
      "Comedia",
      "Drama",
      "Ciencia ficción",
      "Fantasía",
      "Terror",
      "Romance",
      "Documental",
      "Animación",
      "Suspenso",
  ];
  
  const btnSubmit = document.getElementById('btnSubmit');
  const btnCleaner = document.getElementById('btnCleaner');
  const options = document.getElementById('options');
  const title = document.getElementById('title');
  const year = document.getElementById('year');
  const director = document.getElementById('director');
  const duration = document.getElementById('duration');
  const rate = document.getElementById('rate');
  const poster = document.getElementById('poster');
  
  function renderGenres() {
      options.innerHTML = '';
      for (const genre of genres) {
          const input = document.createElement('input');
          const label = document.createElement('label');
  
          input.type = 'checkbox';
          input.id = genre;
          input.name = 'genre[]';
          input.value = genre;
  
          label.htmlFor = genre;
          label.textContent = genre;
  
          options.appendChild(input);
          options.appendChild(label);
      }
  }
  
  renderGenres();
  
  function validateCheckboxes() {
      const checkboxes = document.querySelectorAll('input[name="genre[]"]');
      const selectedGenres = [];
      checkboxes.forEach(item => {
          if (item.checked) {
              item.classList.add("selected");
              selectedGenres.push(item.id);
          }
      });
      return selectedGenres;
  }
  
  function handleSubmit(event) {
      event.preventDefault();
      const selectedGenres = validateCheckboxes();
  
      if (![title.value, year.value, director.value, duration.value, rate.value, poster.value, selectedGenres].every(Boolean)) {
          return alert('Faltan llenar campos');
      }
  
      const movie = {
          title: title.value,
          year: year.value,
          director: director.value,
          duration: duration.value,
          rate: rate.value,
          poster: poster.value,
          genre: selectedGenres,
      };
  
      axios.post('http://localhost:3000/movies', movie)
          .then(() => {
              alert('Película enviada');
          })
          .catch(error => {
              console.error('Error al enviar la película:', error);
          });
  }
  
  function cleanInputs() {
      title.value = "";
      year.value = "";
      director.value = "";
      duration.value = "";
      rate.value = "";
      poster.value = "";
  }
  
  btnSubmit.addEventListener('click', handleSubmit);
  btnCleaner.addEventListener('click', cleanInputs);