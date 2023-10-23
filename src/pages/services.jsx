import React from "react";
import '../assets/about.css'; // Import the shared CSS

function Services() {
    return (
        <div className="About"> {/* Reuse the styling from "about.css" */}
            <h2>Our Services</h2>
            <p>
                Discover our range of services designed to meet your needs.
            </p>
            <p>
                Our services include:
                <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                </ul>
            </p>
            <p>
                We are dedicated to providing top-notch services for our customers.
            </p>
        </div>
    );
}

export default Services;
