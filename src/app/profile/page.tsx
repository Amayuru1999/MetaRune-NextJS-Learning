import React from 'react';
import ProPic from './../pro.jpg';

const ProfilePage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
                    <img
                        src={ProPic.src}
                        alt="Profile Picture"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900">Amayuru Upanith</h2>
                    <p className="text-gray-600">Software Developer</p>
                    <p className="text-gray-500 mt-2">San Francisco, CA</p>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">About Me</h3>
                <p className="mt-2 text-gray-600">
                    Passionate developer with experience in building scalable web
                    applications. I love working with the latest technologies and am
                    always looking for new challenges.
                </p>
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
                <ul className="mt-2 text-gray-600">
                    <li>Email: johndoe@example.com</li>
                    <li>Phone: (555) 123-4567</li>
                </ul>
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Skills</h3>
                <div className="mt-2 flex flex-wrap space-x-2">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded">JavaScript</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded">React</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded">Node.js</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded">TypeScript</span>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Projects</h3>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                    <li>Project 1: A full-stack web application for managing tasks.</li>
                    <li>Project 2: A mobile app for tracking fitness activities.</li>
                    <li>Project 3: An e-commerce platform with a custom CMS.</li>
                </ul>
            </div>
        </div>
    );
};

export default ProfilePage;
