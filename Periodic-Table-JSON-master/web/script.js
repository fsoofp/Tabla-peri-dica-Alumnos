console.log("✅ Script cargado correctamente");

const apps = [
  { simbolo: "PS", nombre: "Photoshop", descripcion: "Edición de imágenes profesional", categoria: "diseno" },
  { simbolo: "AI", nombre: "Illustrator", descripcion: "Diseño vectorial avanzado", categoria: "diseno" },
  { simbolo: "VS", nombre: "VS Code", descripcion: "Editor de código para desarrolladores", categoria: "programacion" },
  { simbolo: "EX", nombre: "Excel", descripcion: "Hojas de cálculo avanzadas", categoria: "productividad" },
  { simbolo: "GC", nombre: "Google Classroom", descripcion: "Gestión educativa en línea", categoria: "educacion" },
];

const tabla = document.getElementById("tabla");
const popup = document.getElementById("popup");
const popupTitulo = document.getElementById("popupTitulo");
const popupDescripcion = document.getElementById("popupDescripcion");
const cerrarPopup = document.getElementById("cerrarPopup");

apps.forEach(app => {
  const div = document.createElement("div");
  div.className = `elemento ${app.categoria}`;
  div.textContent = app.simbolo;

  div.addEventListener("click", () => {
    popup.style.display = "flex";
    popupTitulo.textContent = app.nombre;
    popupDescripcion.textContent = app.descripcion;
  });

  tabla.appendChild(div);
});

cerrarPopup.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", e => {
  if (e.target === popup) popup.style.display = "none";
});
