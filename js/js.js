// menu declaration

const home = document.getElementById('homeLink');
const about = document.getElementById('aboutLink');
const resume = document.getElementById('resumeLink');
const services = document.getElementById('servicesLink');
const portfolio = document.getElementById('portfolioLink');
const blog = document.getElementById('blogLink');
const contact = document.getElementById('contactLink');

// content declaration

const homeContent = document.querySelector('.homeContent');
const aboutContent = document.querySelector('.aboutContent');
const resumeContent = document.querySelector('.resumeContent');
const servicesContent = document.querySelector('.servicesContent');
const portfolioContent = document.querySelector('.portfolioContent');
const blogContent = document.querySelector('.blogContent');
const contactContent = document.querySelector('.contactContent');

// other declaration

const aboutBtn = document.getElementById('aboutBtn');
const contactBtn = document.getElementById('contactBtn');

aboutBtn.onclick = function () {
    home.classList.remove('active');
    about.classList.add('active');
    homeContent.classList.remove('homeActive');
    homeContent.classList.add('aboutActive');
    aboutContent.classList.remove('homeActive');
    aboutContent.classList.add('aboutActive');
    resumeContent.classList.remove('homeActive');
    resumeContent.classList.add('aboutActive');
    servicesContent.classList.remove('homeActive');
    servicesContent.classList.add('aboutActive');
    portfolioContent.classList.remove('homeActive');
    portfolioContent.classList.add('aboutActive');
    blogContent.classList.remove('homeActive');
    blogContent.classList.add('aboutActive');
    contactContent.classList.remove('homeActive');
    contactContent.classList.add('aboutActive');
}
contactBtn.onclick = function () {
    about.classList.remove('active');
    contact.classList.add('active');
    homeContent.classList.remove('aboutActive');
    homeContent.classList.add('contactActive');
    aboutContent.classList.remove('aboutActive');
    aboutContent.classList.add('contactActive');
    resumeContent.classList.remove('aboutActive');
    resumeContent.classList.add('contactActive');
    servicesContent.classList.remove('aboutActive');
    servicesContent.classList.add('contactActive');
    portfolioContent.classList.remove('aboutActive');
    portfolioContent.classList.add('contactActive');
    blogContent.classList.remove('aboutActive');
    blogContent.classList.add('contactActive');
    contactContent.classList.remove('aboutActive');
    contactContent.classList.add('contactActive');
}

const toggle = document.getElementById('toggle');
const sideBar = document.getElementById('side');

toggle.onclick = function () {
    toggle.classList.toggle('active');
    sideBar.classList.toggle('active');
}
document.onclick = function(e) {
    if (e.target.id !== 'toggle' && e.target.id !== 'side') {
        toggle.classList.remove('active');
        sideBar.classList.remove('active');
    }
}

// start coding

home.onclick = function () {
    // add active on links
    home.classList.add('active');
    about.classList.remove('active');
    resume.classList.remove('active');
    services.classList.remove('active');
    portfolio.classList.remove('active');
    blog.classList.remove('active');
    contact.classList.remove('active');
    // add class on contents

    // on homeContent
    homeContent.classList.add('homeActive');
    homeContent.classList.remove('aboutActive');
    homeContent.classList.remove('resumeActive');
    homeContent.classList.remove('servicesActive');
    homeContent.classList.remove('portfolioActive');
    homeContent.classList.remove('blogActive');
    homeContent.classList.remove('contactActive');
    // on aboutContent
    aboutContent.classList.add('homeActive');
    aboutContent.classList.remove('aboutActive');
    aboutContent.classList.remove('resumeActive');
    aboutContent.classList.remove('servicesActive');
    aboutContent.classList.remove('portfolioActive');
    aboutContent.classList.remove('blogActive');
    aboutContent.classList.remove('contactActive');
    // on resumeContent
    resumeContent.classList.add('homeActive');
    resumeContent.classList.remove('aboutActive');
    resumeContent.classList.remove('resumeActive');
    resumeContent.classList.remove('servicesActive');
    resumeContent.classList.remove('portfolioActive');
    resumeContent.classList.remove('blogActive');
    resumeContent.classList.remove('contactActive');
    // on servicesContent
    servicesContent.classList.add('homeActive');
    servicesContent.classList.remove('aboutActive');
    servicesContent.classList.remove('resumeActive');
    servicesContent.classList.remove('servicesActive');
    servicesContent.classList.remove('portfolioActive');
    servicesContent.classList.remove('blogActive');
    servicesContent.classList.remove('contactActive');
    // on PortfolioContent
    portfolioContent.classList.add('homeActive');
    portfolioContent.classList.remove('aboutActive');
    portfolioContent.classList.remove('resumeActive');
    portfolioContent.classList.remove('servicesActive');
    portfolioContent.classList.remove('portfolioActive');
    portfolioContent.classList.remove('blogActive');
    portfolioContent.classList.remove('contactActive');
    // on blogContent
    blogContent.classList.add('homeActive');
    blogContent.classList.remove('aboutActive');
    blogContent.classList.remove('resumeActive');
    blogContent.classList.remove('servicesActive');
    blogContent.classList.remove('portfolioActive');
    blogContent.classList.remove('blogActive');
    blogContent.classList.remove('contactActive');
    // on contactContent
    contactContent.classList.add('homeActive');
    contactContent.classList.remove('aboutActive');
    contactContent.classList.remove('resumeActive');
    contactContent.classList.remove('servicesActive');
    contactContent.classList.remove('portfolioActive');
    contactContent.classList.remove('blogActive');
    contactContent.classList.remove('contactActive');
}
about.onclick = function () {
    // add active on links
    home.classList.remove('active');
    about.classList.add('active');
    resume.classList.remove('active');
    services.classList.remove('active');
    portfolio.classList.remove('active');
    blog.classList.remove('active');
    contact.classList.remove('active');
    // add class on contents

    // on homeContent
    homeContent.classList.remove('homeActive');
    homeContent.classList.add('aboutActive');
    homeContent.classList.remove('resumeActive');
    homeContent.classList.remove('servicesActive');
    homeContent.classList.remove('portfolioActive');
    homeContent.classList.remove('blogActive');
    homeContent.classList.remove('contactActive');
    // on aboutContent
    aboutContent.classList.remove('homeActive');
    aboutContent.classList.add('aboutActive');
    aboutContent.classList.remove('resumeActive');
    aboutContent.classList.remove('servicesActive');
    aboutContent.classList.remove('portfolioActive');
    aboutContent.classList.remove('blogActive');
    aboutContent.classList.remove('contactActive');
    // on resumeContent
    resumeContent.classList.remove('homeActive');
    resumeContent.classList.add('aboutActive');
    resumeContent.classList.remove('resumeActive');
    resumeContent.classList.remove('servicesActive');
    resumeContent.classList.remove('portfolioActive');
    resumeContent.classList.remove('blogActive');
    resumeContent.classList.remove('contactActive');
    // on servicesContent
    servicesContent.classList.remove('homeActive');
    servicesContent.classList.add('aboutActive');
    servicesContent.classList.remove('resumeActive');
    servicesContent.classList.remove('servicesActive');
    servicesContent.classList.remove('portfolioActive');
    servicesContent.classList.remove('blogActive');
    servicesContent.classList.remove('contactActive');
    // on PortfolioContent
    portfolioContent.classList.remove('homeActive');
    portfolioContent.classList.add('aboutActive');
    portfolioContent.classList.remove('resumeActive');
    portfolioContent.classList.remove('servicesActive');
    portfolioContent.classList.remove('portfolioActive');
    portfolioContent.classList.remove('blogActive');
    portfolioContent.classList.remove('contactActive');
    // on blogContent
    blogContent.classList.remove('homeActive');
    blogContent.classList.add('aboutActive');
    blogContent.classList.remove('resumeActive');
    blogContent.classList.remove('servicesActive');
    blogContent.classList.remove('portfolioActive');
    blogContent.classList.remove('blogActive');
    blogContent.classList.remove('contactActive');
    // on contactContent
    contactContent.classList.remove('homeActive');
    contactContent.classList.add('aboutActive');
    contactContent.classList.remove('resumeActive');
    contactContent.classList.remove('servicesActive');
    contactContent.classList.remove('portfolioActive');
    contactContent.classList.remove('blogActive');
    contactContent.classList.remove('contactActive');
}
resume.onclick = function () {
    // add active on links
    home.classList.remove('active');
    about.classList.remove('active');
    resume.classList.add('active');
    services.classList.remove('active');
    portfolio.classList.remove('active');
    blog.classList.remove('active');
    contact.classList.remove('active');
    // add class on contents

    // on homeContent
    homeContent.classList.remove('homeActive');
    homeContent.classList.remove('aboutActive');
    homeContent.classList.add('resumeActive');
    homeContent.classList.remove('servicesActive');
    homeContent.classList.remove('portfolioActive');
    homeContent.classList.remove('blogActive');
    homeContent.classList.remove('contactActive');
    // on aboutContent
    aboutContent.classList.remove('homeActive');
    aboutContent.classList.remove('aboutActive');
    aboutContent.classList.add('resumeActive');
    aboutContent.classList.remove('servicesActive');
    aboutContent.classList.remove('portfolioActive');
    aboutContent.classList.remove('blogActive');
    aboutContent.classList.remove('contactActive');
    // on resumeContent
    resumeContent.classList.remove('homeActive');
    resumeContent.classList.remove('aboutActive');
    resumeContent.classList.add('resumeActive');
    resumeContent.classList.remove('servicesActive');
    resumeContent.classList.remove('portfolioActive');
    resumeContent.classList.remove('blogActive');
    resumeContent.classList.remove('contactActive');
    // on servicesContent
    servicesContent.classList.remove('homeActive');
    servicesContent.classList.remove('aboutActive');
    servicesContent.classList.add('resumeActive');
    servicesContent.classList.remove('servicesActive');
    servicesContent.classList.remove('portfolioActive');
    servicesContent.classList.remove('blogActive');
    servicesContent.classList.remove('contactActive');
    // on PortfolioContent
    portfolioContent.classList.remove('homeActive');
    portfolioContent.classList.remove('aboutActive');
    portfolioContent.classList.add('resumeActive');
    portfolioContent.classList.remove('servicesActive');
    portfolioContent.classList.remove('portfolioActive');
    portfolioContent.classList.remove('blogActive');
    portfolioContent.classList.remove('contactActive');
    // on blogContent
    blogContent.classList.remove('homeActive');
    blogContent.classList.remove('aboutActive');
    blogContent.classList.add('resumeActive');
    blogContent.classList.remove('servicesActive');
    blogContent.classList.remove('portfolioActive');
    blogContent.classList.remove('blogActive');
    blogContent.classList.remove('contactActive');
    // on contactContent
    contactContent.classList.remove('homeActive');
    contactContent.classList.remove('aboutActive');
    contactContent.classList.add('resumeActive');
    contactContent.classList.remove('servicesActive');
    contactContent.classList.remove('portfolioActive');
    contactContent.classList.remove('blogActive');
    contactContent.classList.remove('contactActive');
}
services.onclick = function () {
    // add active on links
    home.classList.remove('active');
    about.classList.remove('active');
    resume.classList.remove('active');
    services.classList.add('active');
    portfolio.classList.remove('active');
    blog.classList.remove('active');
    contact.classList.remove('active');
    // add class on contents

    // on homeContent
    homeContent.classList.remove('homeActive');
    homeContent.classList.remove('aboutActive');
    homeContent.classList.remove('resumeActive');
    homeContent.classList.add('servicesActive');
    homeContent.classList.remove('portfolioActive');
    homeContent.classList.remove('blogActive');
    homeContent.classList.remove('contactActive');
    // on aboutContent
    aboutContent.classList.remove('homeActive');
    aboutContent.classList.remove('aboutActive');
    aboutContent.classList.remove('resumeActive');
    aboutContent.classList.add('servicesActive');
    aboutContent.classList.remove('portfolioActive');
    aboutContent.classList.remove('blogActive');
    aboutContent.classList.remove('contactActive');
    // on resumeContent
    resumeContent.classList.remove('homeActive');
    resumeContent.classList.remove('aboutActive');
    resumeContent.classList.remove('resumeActive');
    resumeContent.classList.add('servicesActive');
    resumeContent.classList.remove('portfolioActive');
    resumeContent.classList.remove('blogActive');
    resumeContent.classList.remove('contactActive');
    // on servicesContent
    servicesContent.classList.remove('homeActive');
    servicesContent.classList.remove('aboutActive');
    servicesContent.classList.remove('resumeActive');
    servicesContent.classList.add('servicesActive');
    servicesContent.classList.remove('portfolioActive');
    servicesContent.classList.remove('blogActive');
    servicesContent.classList.remove('contactActive');
    // on PortfolioContent
    portfolioContent.classList.remove('homeActive');
    portfolioContent.classList.remove('aboutActive');
    portfolioContent.classList.remove('resumeActive');
    portfolioContent.classList.add('servicesActive');
    portfolioContent.classList.remove('portfolioActive');
    portfolioContent.classList.remove('blogActive');
    portfolioContent.classList.remove('contactActive');
    // on blogContent
    blogContent.classList.remove('homeActive');
    blogContent.classList.remove('aboutActive');
    blogContent.classList.remove('resumeActive');
    blogContent.classList.add('servicesActive');
    blogContent.classList.remove('portfolioActive');
    blogContent.classList.remove('blogActive');
    blogContent.classList.remove('contactActive');
    // on contactContent
    contactContent.classList.remove('homeActive');
    contactContent.classList.remove('aboutActive');
    contactContent.classList.remove('resumeActive');
    contactContent.classList.add('servicesActive');
    contactContent.classList.remove('portfolioActive');
    contactContent.classList.remove('blogActive');
    contactContent.classList.remove('contactActive');
}
portfolio.onclick = function () {
    // add active on links
    home.classList.remove('active');
    about.classList.remove('active');
    resume.classList.remove('active');
    services.classList.remove('active');
    portfolio.classList.add('active');
    blog.classList.remove('active');
    contact.classList.remove('active');
    // add class on contents

    // on homeContent
    homeContent.classList.remove('homeActive');
    homeContent.classList.remove('aboutActive');
    homeContent.classList.remove('resumeActive');
    homeContent.classList.remove('servicesActive');
    homeContent.classList.add('portfolioActive');
    homeContent.classList.remove('blogActive');
    homeContent.classList.remove('contactActive');
    // on aboutContent
    aboutContent.classList.remove('homeActive');
    aboutContent.classList.remove('aboutActive');
    aboutContent.classList.remove('resumeActive');
    aboutContent.classList.remove('servicesActive');
    aboutContent.classList.add('portfolioActive');
    aboutContent.classList.remove('blogActive');
    aboutContent.classList.remove('contactActive');
    // on resumeContent
    resumeContent.classList.remove('homeActive');
    resumeContent.classList.remove('aboutActive');
    resumeContent.classList.remove('resumeActive');
    resumeContent.classList.remove('servicesActive');
    resumeContent.classList.add('portfolioActive');
    resumeContent.classList.remove('blogActive');
    resumeContent.classList.remove('contactActive');
    // on servicesContent
    servicesContent.classList.remove('homeActive');
    servicesContent.classList.remove('aboutActive');
    servicesContent.classList.remove('resumeActive');
    servicesContent.classList.remove('servicesActive');
    servicesContent.classList.add('portfolioActive');
    servicesContent.classList.remove('blogActive');
    servicesContent.classList.remove('contactActive');
    // on PortfolioContent
    portfolioContent.classList.remove('homeActive');
    portfolioContent.classList.remove('aboutActive');
    portfolioContent.classList.remove('resumeActive');
    portfolioContent.classList.remove('servicesActive');
    portfolioContent.classList.add('portfolioActive');
    portfolioContent.classList.remove('blogActive');
    portfolioContent.classList.remove('contactActive');
    // on blogContent
    blogContent.classList.remove('homeActive');
    blogContent.classList.remove('aboutActive');
    blogContent.classList.remove('resumeActive');
    blogContent.classList.remove('servicesActive');
    blogContent.classList.add('portfolioActive');
    blogContent.classList.remove('blogActive');
    blogContent.classList.remove('contactActive');
    // on contactContent
    contactContent.classList.remove('homeActive');
    contactContent.classList.remove('aboutActive');
    contactContent.classList.remove('resumeActive');
    contactContent.classList.remove('servicesActive');
    contactContent.classList.add('portfolioActive');
    contactContent.classList.remove('blogActive');
    contactContent.classList.remove('contactActive');
}
blog.onclick = function () {
    // add active on links
    home.classList.remove('active');
    about.classList.remove('active');
    resume.classList.remove('active');
    services.classList.remove('active');
    portfolio.classList.remove('active');
    blog.classList.add('active');
    contact.classList.remove('active');
    // add class on contents

    // on homeContent
    homeContent.classList.remove('homeActive');
    homeContent.classList.remove('aboutActive');
    homeContent.classList.remove('resumeActive');
    homeContent.classList.remove('servicesActive');
    homeContent.classList.remove('portfolioActive');
    homeContent.classList.add('blogActive');
    homeContent.classList.remove('contactActive');
    // on aboutContent
    aboutContent.classList.remove('homeActive');
    aboutContent.classList.remove('aboutActive');
    aboutContent.classList.remove('resumeActive');
    aboutContent.classList.remove('servicesActive');
    aboutContent.classList.remove('portfolioActive');
    aboutContent.classList.add('blogActive');
    aboutContent.classList.remove('contactActive');
    // on resumeContent
    resumeContent.classList.remove('homeActive');
    resumeContent.classList.remove('aboutActive');
    resumeContent.classList.remove('resumeActive');
    resumeContent.classList.remove('servicesActive');
    resumeContent.classList.remove('portfolioActive');
    resumeContent.classList.add('blogActive');
    resumeContent.classList.remove('contactActive');
    // on servicesContent
    servicesContent.classList.remove('homeActive');
    servicesContent.classList.remove('aboutActive');
    servicesContent.classList.remove('resumeActive');
    servicesContent.classList.remove('servicesActive');
    servicesContent.classList.remove('portfolioActive');
    servicesContent.classList.add('blogActive');
    servicesContent.classList.remove('contactActive');
    // on PortfolioContent
    portfolioContent.classList.remove('homeActive');
    portfolioContent.classList.remove('aboutActive');
    portfolioContent.classList.remove('resumeActive');
    portfolioContent.classList.remove('servicesActive');
    portfolioContent.classList.remove('portfolioActive');
    portfolioContent.classList.add('blogActive');
    portfolioContent.classList.remove('contactActive');
    // on blogContent
    blogContent.classList.remove('homeActive');
    blogContent.classList.remove('aboutActive');
    blogContent.classList.remove('resumeActive');
    blogContent.classList.remove('servicesActive');
    blogContent.classList.remove('portfolioActive');
    blogContent.classList.add('blogActive');
    blogContent.classList.remove('contactActive');
    // on contactContent
    contactContent.classList.remove('homeActive');
    contactContent.classList.remove('aboutActive');
    contactContent.classList.remove('resumeActive');
    contactContent.classList.remove('servicesActive');
    contactContent.classList.remove('portfolioActive');
    contactContent.classList.add('blogActive');
    contactContent.classList.remove('contactActive');
}
contact.onclick = function () {
    // add active on links
    home.classList.remove('active');
    about.classList.remove('active');
    resume.classList.remove('active');
    services.classList.remove('active');
    portfolio.classList.remove('active');
    blog.classList.remove('active');
    contact.classList.add('active');
    // add class on contents

    // on homeContent
    homeContent.classList.remove('homeActive');
    homeContent.classList.remove('aboutActive');
    homeContent.classList.remove('resumeActive');
    homeContent.classList.remove('servicesActive');
    homeContent.classList.remove('portfolioActive');
    homeContent.classList.remove('blogActive');
    homeContent.classList.add('contactActive');
    // on aboutContent
    aboutContent.classList.remove('homeActive');
    aboutContent.classList.remove('aboutActive');
    aboutContent.classList.remove('resumeActive');
    aboutContent.classList.remove('servicesActive');
    aboutContent.classList.remove('portfolioActive');
    aboutContent.classList.remove('blogActive');
    aboutContent.classList.add('contactActive');
    // on resumeContent
    resumeContent.classList.remove('homeActive');
    resumeContent.classList.remove('aboutActive');
    resumeContent.classList.remove('resumeActive');
    resumeContent.classList.remove('servicesActive');
    resumeContent.classList.remove('portfolioActive');
    resumeContent.classList.remove('blogActive');
    resumeContent.classList.add('contactActive');
    // on servicesContent
    servicesContent.classList.remove('homeActive');
    servicesContent.classList.remove('aboutActive');
    servicesContent.classList.remove('resumeActive');
    servicesContent.classList.remove('servicesActive');
    servicesContent.classList.remove('portfolioActive');
    servicesContent.classList.remove('blogActive');
    servicesContent.classList.add('contactActive');
    // on PortfolioContent
    portfolioContent.classList.remove('homeActive');
    portfolioContent.classList.remove('aboutActive');
    portfolioContent.classList.remove('resumeActive');
    portfolioContent.classList.remove('servicesActive');
    portfolioContent.classList.remove('portfolioActive');
    portfolioContent.classList.remove('blogActive');
    portfolioContent.classList.add('contactActive');
    // on blogContent
    blogContent.classList.remove('homeActive');
    blogContent.classList.remove('aboutActive');
    blogContent.classList.remove('resumeActive');
    blogContent.classList.remove('servicesActive');
    blogContent.classList.remove('portfolioActive');
    blogContent.classList.remove('blogActive');
    blogContent.classList.add('contactActive');
    // on contactContent
    contactContent.classList.remove('homeActive');
    contactContent.classList.remove('aboutActive');
    contactContent.classList.remove('resumeActive');
    contactContent.classList.remove('servicesActive');
    contactContent.classList.remove('portfolioActive');
    contactContent.classList.remove('blogActive');
    contactContent.classList.add('contactActive');
}