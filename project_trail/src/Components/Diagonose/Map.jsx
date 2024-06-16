import React, { useState } from 'react';
import './Map.css';

const Map = () => {
    const [isMapOpen, setIsMapOpen] = useState(false);

    const openMap = () => {
        setIsMapOpen(true);
    };

    const closeMap = () => {
        setIsMapOpen(false);
    };

    return (
        <>
            <button className="map-button" onClick={openMap}>Locate Nearby Doctors</button>
            {isMapOpen && (
                <div className="map-overlay">
                    <div className="map-container">
                        <button className="close-button" onClick={closeMap}>Close Map</button>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d57156.05793407265!2d80.16775395427484!3d26.447552523988293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snearby%20doctors!5e0!3m2!1sen!2sin!4v1715615529856!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: "0" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default Map;
