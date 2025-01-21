async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Luisaphysics22/js-developer-portfolio/refs/heads/main/data/profile.json';
    const fetching = await fetch(url);
    return await fetching.json();
}

function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;
    
    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;

    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;

    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;

    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone}`;

    const email = document.getElementById('profile.email');
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages');
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    portfolio.innerHTML = profileData.portfolio.map(project =>{
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('');
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('updateProfessionalExperience');
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `
    }).join('');
}

(async function () {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData); // Atualiza as informações do perfil
    updateSoftSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);

})();
