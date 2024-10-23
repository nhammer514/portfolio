const pages = {
    about: 
    `
<<<<<<< HEAD
    <div>
        <h2> about </h2>
        <hr/>
        <p> 
            My name is Nathan Hammer and I am from Pittsburgh, Pennsylvania.
            I am currently pursuing a B.A. in Digital Media, Arts, and Technology @ Penn State Behrend.
            Most of my work revolves around programming, web design, game development, and server management.
        </p>
        <p>
            I have always been curious about the inner-workings of computers and video games.
            At a young age, I taught myself how to make levels for Source engine games, like Team Fortress 2 . 
            It sparked my passion for games that synergize creativity and mechanical design. 
            Later, I started to experiment with game servers and mods, developing an understanding of server infrastructure and programming. 
            Whenever I have the free time, I like to work on game prototypes or engage with spontaneous coding challenges.
        </p>
        <p>
            I am always exercising my skill set -- in and outside of school.
            There is never a moment where I am not learning and applying new concepts. 
        </p>
    </div>
    <div style="display: flex;">
        <div style="flex: 40%;">
            <h2> socials </h2>
            <hr/>
            <p> I can be found on various social medias and forums:
            <ul>
                <li>GitHub</li>
                <li>YouTube</li>
                <li>Linkedin</li>
            </ul>
        </div>
        <div style="flex: 60%;">
            <h2> faq </h2>
            <hr/>
            <p> 
                My name is Nathan Hammer and I am from Pittsburgh, Pennsylvania.
                I am currently pursuing a B.A. in Digital Media, Arts, and Technology @ Penn State Behrend.
                Most of my work revolves around programming, web design, game development, and server management.
            </p>
        </div>
    </div>
=======
    <h2 class="portfolio"> about </h2>
    <p> 
        My name is Nathan Hammer and I am from Pittsburgh, Pennsylvania.
        I am currently pursuing a B.A. in Digital Media, Arts, and Technology @ Penn State Behrend.
        Most of my work revolves around programming, web design, game development, and server management.
    </p></br>
    <p>
        I have always been curious about the inner-workings of computers and video games.
        At a young age, I taught myself how to make levels for a game called Team Fortress 2, which has an art style designed around its mechanics. 
        It sparked my passion for software that synergizes creativity and technical design. 
        Later in life, I experimented with game servers and addons for Garry's Mod, and that has lead me to understand server infrastructure and programming.
        I am always exercising my skill set, in and outside of college.
        There is never a moment where I am not learning and applying new concepts. 
    </p>
>>>>>>> d5b0f95404d759db820a9d427a5b99224d9efe59
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
<<<<<<< HEAD
    <h2> resumé </h2>
=======
    <h2 class="portfolio"> resume </h2>
>>>>>>> d5b0f95404d759db820a9d427a5b99224d9efe59
    <p> :) </p>
    `
}

function fetchContents(el_id){
    return (pages[el_id]);
}