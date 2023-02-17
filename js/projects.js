const projects = [
  {
    title: "CriptoMoneda",
    subtitle: ` 🚀 En este proyecto se va vizualizar los diferentes tipos de cambio de moneda con respecto a las criptomonedas como las que son Bitcoin. <br>
               🚀 Se ha realizado con use state, use effect. <br> 
               🚀 Con esta aplicación podra evaluar el tipo de cambio de su criptomoneda.`,
    imgSrc: "assets/images/desktop-cripto.png",
    githubLink: "https://github.com/Mildark10/criptos",
    liveLink: "https://cambio-criptos.netlify.app/",
    technologies: ["React", "html5", "bootstrap"],
  },
  {
    title: "Control de Presupuestos",
    subtitle: ` 🚀 Se esta haciendo uso de librerias swipeable , y uso de hooks. <br>
                🚀 Con esta aplicación podra evaluar sus ingresos y egresos segun sus gastos mensuales. <br>
                🚀 Con esta aplicacion podra ingresar , editar y eliminar sus gastos ingresados en el sistema.`,
    imgSrc: "assets/images/desktop-cotizador.png",
    githubLink: "https://github.com/Mildark10/Control-Presupuesto",
    liveLink: "https://gastos-planificacion.netlify.app/",
    technologies: ["React", "html5", "sass"],
  },
  {
    title: "Aplicación de Citas Medicas",
    subtitle: `🚀 Esta aplicación usa hooks. <br>
               🚀 Tiene la dinamica de asiganar un fecha programada para una cita medica.<br>
               🚀 Puede editar y eliminar las citas programadas`,
    imgSrc: "assets/images/desktop-citas.png",
    githubLink: "https://github.com/Mildark10/citas-react",
    liveLink: "https://cita-medica.netlify.app/",
    technologies: ["React", "html5", "twcss"],
  },
  {
    title: "FrontendMentor - Calculadora",
    subtitle: ` 🚀 Con esta herramienta podra realizar operaciones matematicas. <br>
                🚀 Tiene un desplegador de botones para elegir el tema que mas le guste. ` ,
    imgSrc: "assets/images/desktop-preview.jpg",
    githubLink: "https://github.com/Mildark10/calculator-app-main",
    liveLink: "https://mildark10.github.io/calculator-app-main/",
    technologies: ["html5", "css3", "Javascript"],
  },
  {
    title: "FrontendMentor - Expenses chart component  ",
    subtitle: ` 🚀 Se ha realizado esta aplicacíon con el consumo de un json para despues ser mostrados en una interfaz amigable`,
    imgSrc: "assets/images/destop-sass.jpg",
    githubLink: "https://github.com/Mildark10/SASS",
    liveLink: "https://mildark10.github.io/SASS/",
    technologies: ["sass", "html5", "javascript","json"],
  },
  {
    title: "Consulta Sunat - Ruc",
    subtitle: ` 🚀 Se ha hecho el consumo de una api de sunat . <br>
                🚀 Realiza una busqueda del numero ruc ingresado en el sistema . <br>
                🚀 Lista el ruc buscado con los campos que se muestran en la interfaz.`,
    imgSrc: "assets/images/sunat.png",
    githubLink: "https://github.com/Mildark10/sunatPeru",
    liveLink: "https://buscador-ruc.netlify.app/#/",
    technologies: ["html5", "css3", "Javascript", "angular"],
  }
  
  // Add more projects here as needed
];
const sr = ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 200,
  reset: true,
});

const projectContainer = document.querySelector(".project-container");

function createProjectCard(project) {
  const projectImg = document.createElement("div");
  projectImg.style.border="1px solid #2874A6"
  projectImg.classList.add("project-img");
  projectImg.innerHTML = `
    <img src="${project.imgSrc}" style="width:80%; display: flex; margin: 0 auto;" alt="${project.title}" loading="lazy">
    <p class="h4  project-title">${project.title}</p>
    <p class="h4 project-subtitle" style="font-size:0.8em;">${project.subtitle}<br /><br />
      <div class="project-tecnology">
        ${project.technologies
          .map(
            (technology) =>
              `<div class="skill-card card-skills">
                <div class="tooltip">${technology}</div>
                <div class="card-icon icon-skills">
                  <img src="./assets/images/${technology.toLowerCase()}.png" alt="${technology} logo" id="logo-tecnologia">
                </div>
              </div>`
          )
          .join("")}
      </div>
    </p>
    <div class="project-btns">
      <a href="${project.githubLink}"   target="_blank" class="hero-social-link">
        <ion-icon id="icon-width" name="logo-github"></ion-icon>
        <div class="tooltip">GitHub</div>
      </a>
      <a href="${project.liveLink}"  target="_blank" class="hero-social-link icon">
        <ion-icon id="icon-width" name="eye-outline"></ion-icon>
        <div class="tooltip">Live</div>
      </a>
    </div>
  `;

  return projectImg;
}

function renderProjects() {
  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    projectContainer.appendChild(projectCard);
    sr.reveal(".project-img", {
      interval: 200,
      reset: true,
      beforeReveal: function (el) {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
      },
      afterReveal: function (el) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
        el.style.transition = "all 0.5s ease-in-out";
      },
    });    
  });
}

window.addEventListener("load", () => {
  renderProjects();
});
