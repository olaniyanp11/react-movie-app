import React from "react";
import '../assets/about.css';

function About() {
    return (
        <div className="About">
            <h2>About Our Movie Search App</h2>
            <p>
                Welcome to our Movie Search App! This app allows you to search for your favorite movies and discover new ones.
            </p>
            <p>
                Features:
                <ul>
                    <li>Search for movies using the search bar.</li>
                    <li>View movie details, including title, poster, type, and release year.</li>
                </ul>
            </p>
            <p>
                This app is powered by the OMDB API and built with React. It's a simple and convenient way to explore movies and find information about them.
            </p>
            <p>
                Thank you for using our app. We hope you enjoy your movie search experience!
            </p>
        </div>
    );
}

export default About;
