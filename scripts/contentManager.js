// THE PAGES ON THE WEBSITE ARE NOT INTEGRATED IN THE HTML. INSTEAD, changePage.js SCRIPT GRAB THE ELEMENTS FROM HERE!
const pages = {
    about: 
    `
    <div>
        <h2 class="portfolio"> about </h2>
        <hr/>
        <p> 
            My name is Nate Hammer and I am from Pittsburgh, Pennsylvania.
            I am currently pursuing a <b>B.A. in Digital Media, Arts, and Technology @ Penn State Behrend</b>, along with <b>minors in Game Development and Marketing</b>.
            Most of my work revolves around programming, web design, game development, and server management.
        </p>
        <p>
            I have always been curious about the inner-workings of computers and video games.
            At a young age, I taught myself how to make levels for a game called Garry's Mod, which sparked my passion for software that synergizes artistry with mechanical design.
            This lead to me dabbling into modding and programming, so that I could develop games of my own.
            Later, I started to experiment with Linux servers to create websites, learning about network infrastructure and security.
            Now, here I am, studying all of these things in college. Whenever I have the free time, I like to work on game prototypes or engage in spontaneous coding challenges.
        </p>
        <p>
            
            I am always exercising my skill set -- in and outside of school.
            There is never a moment where I am not learning and applying new concepts. 
        </p>
    </div>
    <div style="display: flex;">
        <div style="flex: 50%;">
            <h3 class="portfolio"> socials </h3>
            <hr/>
            <p> I can be found on various social medias platforms:
            <ul>
                <li><a href="https://github.com/nhammer514">GitHub</a></li>
                <li><a href="https://www.youtube.com/@physkill">YouTube</a></li>
                <li><a href="https://www.linkedin.com/in/natehammer/">LinkedIn</a></li>
            </ul>
        </div>
        <div style="flex: 50%;">
            <h3 class="portfolio"> faq </h3>
            <hr/>
            <p> 
            HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi 
            </p> 
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
    <p> Hello world! </p>
    `,

    resume: 
    `
    <h2 class="portfolio"> resumé </h2>
    <hr/>
    <p> :) </p>
    `
}

function fetchContents(el_id){
    return (pages[el_id]);
}