// THE PAGES ON THE WEBSITE ARE NOT INTEGRATED IN THE HTML. INSTEAD, THEY GRAB THE ELEMENTS FROM HERE!
const pages = {
    about: 
    `
    <div>
        <h2 class="portfolio"> about </h2>
        <hr/>
        <p> 
            My name is Nathan Hammer and I am from Pittsburgh, Pennsylvania.
            I am currently pursuing a <b>B.A. in Digital Media, Arts, and Technology @ Penn State Behrend</b>, along with <b>minors in Game Development and Marketing</b>.
            Most of my work revolves around programming, web design, game development, and server management.
        </p>
        <p>
            I have always been curious about the inner-workings of computers and video games.
            At a young age, I taught myself how to make Team Fortress 2 levels, which sparked my passion for software that synergize artistry with mechanical design.
            This lead to me dabbling into programming, so that I could create games of my own.
            Later, I started to experiment with servers and Linux, developing an understanding of network infrastructure and security.
            Now, here I am, studying all of these things in college. Whenever I have the free time, I like to work on game prototypes or engage in spontaneous coding challenges.
        </p>
        <p>
            
            I am always exercising my skill set -- in and outside of school.
            There is never a moment where I am not learning and applying new concepts. 
        </p>
    </div>
    <div style="display: flex;">
        <div style="flex: 50%;">
            <h2 class="portfolio"> socials </h2>
            <hr/>
            <p> I can be found on various social medias and forums:
            <ul>
                <li>GitHub</li>
                <li>YouTube</li>
                <li>LinkedIn</li>
            </ul>
        </div>
        <div style="flex: 50%;">
            <h2 class="portfolio"> faq </h2>
            <hr/>
            <p> 
            HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi HI HI HI hi 
            </p> 
        </div>
    </div>
    `,

    blog: 
    `
    <h2 class="portfolio"> blog </h2>
    <p> This stuff should work. </p>
    `,

    projects: 
    `
    <h2 class="portfolio"> projects </h2>
    <p> Hello world! </p>
    `,

    resume: 
    `
    <h2 class="portfolio"> resumé </h2>
    <p> :) </p>
    `
}

function fetchContents(el_id){
    return (pages[el_id]);
}