// THE PAGES ON THE WEBSITE ARE NOT INTEGRATED IN THE HTML. INSTEAD, changePage.js SCRIPT GRAB THE ELEMENTS FROM HERE!
const pages = {
    about: 
    `
    <div>
        <h2 class="portfolio"> about </h2>
        <hr/>
        <p>My name is <i>Nathan Hammer</i>. I am an developer, artist, and game designer.</p>

        <p>I graduated from Penn State Behrend with a <b> Bachelor of Arts in Digital Media, Arts, and Technology</b>, along with a minor in <b>Game Development</b>. From a young age, I have been interested in programming, drawing, and design, especially the ways digital tools can feel intuitive, expressive, and engaging.</p>


        <p>I am especially interested in the connection between creativity and technical design. Whether I am developing a game, designing a website, or creating visual work, I enjoy building experiences that feel intuitive and expressive. In other words, technical problem-solving with creative solutions is my forte. </p>
    </div>
    <div style="display: flex;">
        <div style="flex: 100%;">
            <h3 class="portfolio"> socials </h3>
            <hr/>
            <p> I can be found on various social media platforms:
            <ul>
                <li><a href="https://github.com/nhammer514">GitHub</a></li>
                <li><a href="https://www.youtube.com/@physkill">YouTube</a></li>
                <li><a href="https://www.linkedin.com/in/natehammer/">LinkedIn</a></li>
            </ul>
        </div>
    </div>
    `,

    notes: 
    `
    <h2 class="portfolio"> notes </h2>
    <p> This page is for the notes that I write in class. </p>
    `,

    projects: 
    `
    <h2 class="portfolio"> projects </h2>
    <hr/>
    <div class="portfolio-grid">
        <article class="project-card">
            <a href="https://brahmavidya.itch.io/mouse-messiah">
            <div class="image-wrap">
                <img src="./images/portfolio/mouse_messiah.png" alt="Project 1 screenshot">
                <div class="project-overlay">
                    <div class="project-text">
                        <span class="project-title">Mouse Messiah</span>
                        <small class="project-category">Indie game passion project</small>
                        <small class="project-category">( 2025 - Present )</small>
                    </div>
                </div>
            </div>
            </a>
        </article>
        <article class="project-card">
            <a href="https://github.com/nhammer514/Scaniverse-Galley">
            <div class="image-wrap">
                <img src="./images/portfolio/scaniverse.png" alt="Project 3 screenshot">
                <div class="project-overlay">
                    <div class="project-text">
                        <span class="project-title">Scaniverse Gallery</span>
                        <small class="project-category">Game for academic showcase</small>
                        <small class="project-category">( 2026 )</small>
                    </div>
                </div>
            </div>
            </a>
        </article>
        <article class="project-card">
            <a href="https://brahmavidya.itch.io/mouse-messiah">
            <div class="image-wrap">
                <img src="./images/portfolio/zone.png" alt="Project 4 screenshot">
                <div class="project-overlay">
                    <div class="project-text">
                        <span class="project-title">seattlevidya</span>
                        <small class="project-category">Silly YouTube animations</small>
                        <small class="project-category">( 2017 - Present )</small>
                    </div>
                </div>
            </div>
            </a>
        </article>
        <article class="project-card">
            <div class="image-wrap">
                <img src="./images/portfolio/burkhart.png" alt="Project 5 screenshot">
                <div class="project-overlay">
                    <div class="project-text">
                        <span class="project-title">Burkhart Building Industries</span>
                        <small class="project-category">Contract website</small>
                        <small class="project-category">( 2026 )</small>
                    </div>
                </div>
            </div>
        </article>
        <article class="project-card">
            <a href="https://frankensteinvariorum.org/">
            <div class="image-wrap">
                <img src="./images/portfolio/frankenstein.png" alt="Project 5 screenshot">
                <div class="project-overlay">
                    <div class="project-text">
                        <span class="project-title">Frankenstein Variorum</span>
                        <small class="project-category">Student Assistant for XML</small>
                        <small class="project-category">( 2023 )</small>
                    </div>
                </div>
            </div>
        </a>
        </article>
    </div>
    `,

    resume: 
    `
    <h2 class="portfolio"> resumé </h2>
    <hr/>
    <embed src="files/nhammer_resume.pdf" width="100%" height="100%" />
    `
}

function fetchContents(el_id){
    return (pages[el_id]);
}