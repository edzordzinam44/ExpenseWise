import React from 'react';

const sharedButtonClass = "bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80";

const ContactUs = () => {
    return (
        <div className="bg-background text-primary-foreground min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <p className="text-lg mb-4">Have any questions or feedback? Feel free to reach out to us via email.</p>
            <button className={sharedButtonClass}>Send Email</button>
        </div>
    );
};

export default ContactUs;