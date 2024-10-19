const pages = {
    about: 
    `
    <h2> about </h2>
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
    `,
    blog: 
    `
    <h2> blog </h2>
    <p> This stuff should work. </p>
    `,
    projects: 
    `
    <h2> projects </h2>
    <p> Hello world! </p>
    `,
    resume: 
    `
    <h2> resume </h2>
    <p> :) </p>
    `
}

function fetchContents(el_id){
    return (pages[el_id]);
}