document
  .getElementById("card-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("card-title").value;
    const description = document.getElementById("card-description").value;
    const bgColor = document.getElementById("card-bg-color").value;
    const borderColor = document.getElementById("card-border-color").value;

    
    if (!title || !description || !bgColor || !borderColor) {
      alert("Por favor, complete todos los campos obligatorios.");
      return; 
    }

    
    if (title.length < 10 || title.length > 200) {
      alert("El título debe tener entre 10 y 200 caracteres.");
      return;
    }

    
    if (description.length < 10 || description.length > 200) {
      alert("La descripción debe tener entre 10 y 200 caracteres.");
      return;
    }

    
    const images = [
      "./img/usados1.jpg",
      "./img/usados2.jpg",
      "./img/usados3.jpg",
      "./img/usados4.jpg",
      "./img/usados5.jpg",
    ];

    // Obtener la URL de la imagen proporcionada por el usuario o elegir una aleatoria
    const imageUrl =
      document.getElementById("card-image").value ||
      images[Math.floor(Math.random() * images.length)];

    // Mostrar por consola valores del formulario
    console.log({
      title: title,
      description: description,
      imageUrl: imageUrl,
      bgColor: bgColor,
      borderColor: borderColor,
    });

    // Crear nueva card
    const cardContainer = document.getElementById("cards-container");
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.backgroundColor = bgColor;
    newCard.style.borderColor = borderColor;

    // Maquetar la card
    newCard.innerHTML = `
      <img id="imagenResultado" class="rounded mx-auto" src="${imageUrl}" alt="Card Image">
      <div class="card-content">
          <p>${title}</p>
          <p>${description}</p>
      </div>
    `;

    
    cardContainer.appendChild(newCard);

    
    document.getElementById("card-form").reset();
  });
