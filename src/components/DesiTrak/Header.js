import '../../styles/DesiTrak/DesiTrak.css';

function Header() {
    return (
        <div>
            <a href="https://github.com/AruGyani/desi-recipe-app"><h1 className="display-2">desitrak</h1></a>
            <p className="lead">A <code>React</code> and <code>Node</code> powered Meal-Prep application targeted to the Desi and Arab communities for tracking calories and discovering recipes.</p>
            <hr/><br/><br/>
            <p>I developed <strong>desitrak</strong> after realizing that tracking the nutrition and calories in my cultural food was next to impossible due to the sole reason that traditional Western measurements weren't applied. </p>
            <p>Working from ground up, I wanted to develop features that would prove both useful to users and to myself as I learned more about web development. I built a SHA-256 hash based login authentication system that communicated to a MongoDB server through REST API calls. The application applies concepts of both responsive and accessible web design to ensure a positive user experience.</p>

            <a href="https://github.com/AruGyani/desi-recipe-app">Click here to see the code.</a>
        </div>
    );
}

export default Header;