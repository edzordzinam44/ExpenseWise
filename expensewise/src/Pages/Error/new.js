import React from 'react';

const inputClasses = "w-full border border-input rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-primary";
const labelClasses = "block text-sm font-medium text-primary";
const buttonClasses = "w-full bg-primary text-primary-foreground rounded-md py-2 hover:bg-primary/80 transition duration-300";

const New = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background dark:bg-black">
            <div className="bg-card dark:bg-card rounded-lg shadow-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-primary text-center mb-6">Sign Up</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className={labelClasses}>Username</label>
                        <input type="text" id="username" name="username" className={inputClasses} placeholder="Enter your username" />
                    </div>
                    <div>
                        <label htmlFor="email" className={labelClasses}>Email</label>
                        <input type="email" id="email" name="email" className={inputClasses} placeholder="Enter your email" />
                    </div>
                    <div>
                        <label htmlFor="password" className={labelClasses}>Password</label>
                        <input type="password" id="password" name="password" className={inputClasses} placeholder="Enter your password" />
                    </div>
                    <button type="submit" className={buttonClasses}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default New;
