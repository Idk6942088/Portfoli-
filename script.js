const projects = [{
    "id": 1,
    "name": "Drums",
    "description": "Ez egy olyan weboldal amin ha megnyomsz egy gombot hangot ad ki.",
    "img": "https://i.ibb.co/12xFh97/drumskep.png",
    "imgs": "https://i.ibb.co/12xFh97/drumskep.png",
    "github": "https://github.com/Idk6942088/a-hangok",
    "hosted": "https://idk6942088.github.io/a-hangok/"
},
{
    "id": 2,
    "name": "Utazási iroda",
    "description": "Ez a weboldal egy példa milyne lehet egy utazási iroda weboldala.",
    "img": "https://i.ibb.co/CzCFVzT/utazasikep.png",
    "imgs": "https://i.ibb.co/CzCFVzT/utazasikep.png",
    "github": "https://github.com/Idk6942088/utazasiiroda",
    "hosted": "https://idk6942088.github.io/utazasiiroda/"
}
];

const projectContainers = document.querySelectorAll('.project');

projects.forEach((project, index) => {
const projectHTML = `
    <h2>${project.name}</h2>
    <img class="img-fluid" src="${project.img}" alt="${project.name}">
    <p>${project.description}</p>
    <div class="buttons">
        <a href="${project.imgs}" class="btn btn-light">Képek</a>
        <a href="${project.github}" class="btn btn-light">GitHub</a>
        <a href="${project.hosted}" class="btn btn-light">Oldal</a>
    </div>
`;
projectContainers[index].innerHTML = projectHTML;
});
