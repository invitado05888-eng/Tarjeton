const imagen = document.getElementById("imagen");

imagen.addEventListener("click", function (e) {

    // Obtener las dimensiones y posición del contenedor
    const rect = imagen.getBoundingClientRect();

    // Posición donde se hizo clic
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Crear la mancha
    const mancha = document.createElement("div");

    mancha.classList.add("mancha");

    // Posición
    mancha.style.left = `${x}px`;
    mancha.style.top = `${y}px`;

    // Tamaño aleatorio entre 40px y 80px
    const tamaño = Math.floor(Math.random() * 41) + 40;

    mancha.style.width = `${tamaño}px`;
    mancha.style.height = `${tamaño}px`;

    
    const opacidad = (Math.random() * 0.3) + 0.7;

    mancha.style.opacity = opacidad;
    
    // Rotación aleatoria entre 0 y 360 grados
    const rotacion = Math.floor(Math.random() * 361);

    mancha.style.transform =
        `translate(-50%, -50%) rotate(${rotacion}deg)`;

    // Agregar la mancha al contenedor
    imagen.appendChild(mancha);

});

