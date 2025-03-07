import React, { useState } from "react";
import ProfilePic from "../../src/assets/profilePic.jpeg";
import { IoIosContact } from "react-icons/io";
import { LuShare2 } from "react-icons/lu";
import { FaYoutube, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";

const CardMain = () => {
    const [activeTab, setActiveTab] = useState("about");
    const galleryImages = [
        { id: 1, src: "https://miro.medium.com/v2/resize:fit:1024/1*gQzkQ3uJ0SwJL51t16bivw.jpeg" },
        { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRwodeVXMHTFAkRGkBZxrB8kOa-xIR7HrzQ&s" },
        { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMczrdspx7CSMGeVYE_LHR_iHAGYO-e5JTxg&s" },
        { id: 4, src: "https://cdn.prod.website-files.com/5fa88bfd6639f67f744775c3/605048588d70cfc53fd6a01d_Women-in-Tech3.jpg" },
        { id: 5, src: "https://code.berlin/content/uploads/08619234-1200x800.jpg" },
    ];

    return (
        <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
            <div className="relative w-full max-w-lg p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg">
                {/* Profile Picture */}
                <div className="flex justify-center -mt-12">
                    <img
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/30 shadow-lg"
                        src={ProfilePic}
                        alt="Profile"
                    />
                </div>

                <div className="text-center mt-4">
                    <h2 className="text-xl md:text-2xl font-semibold text-white">Sandaru De Silva</h2>
                    <p className="text-sm md:text-base text-gray-300">Software Engineer</p>
                </div>

                <div className="flex justify-between mt-4">
                    <button className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg p-2 text-xs md:text-sm w-[48%]">
                        <div className="flex items-center justify-center gap-2">
                            Save Me
                            <IoIosContact className="w-5 h-5" />
                        </div>
                    </button>

                    <button className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg p-2 text-xs md:text-sm w-[48%]">
                        <div className="flex items-center justify-center gap-2">
                            Share
                            <LuShare2 />
                        </div>
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex justify-around mt-6 border-b border-white/20 pb-2">
                    {["about", "gallery", "work"].map((tab) => (
                        <button
                            key={tab}
                            className={`text-sm md:text-lg px-2 md:px-4 pb-1 ${activeTab === tab ? "border-b-2 border-white text-white" : "text-gray-400"}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="mt-4">
                    {activeTab === "about" && (
                        <div>
                            <p className="text-lg">About me</p>
                            <p className="text-sm mt-2">"I’m Sandaru De Silva, a passionate Frontend Developer crafting experiences."</p>

                            {/* Social Media Links */}
                            <div className="mt-4 flex items-center space-x-6 justify-center">
                                {[FaYoutube, FaFacebook, FaLinkedin, FaInstagram].map((Icon, index) => (
                                    <button key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-lg p-2">
                                        <Icon className="w-4 h-4 md:w-5 md:h-5" />
                                    </button>
                                ))}
                            </div>

                            {/* Contact Details */}
                            <div className="mt-4 space-y-3 text-sm md:text-lg">
                                <div className="flex items-center space-x-3">
                                    <MdOutlinePhone className="w-4 h-4 md:w-5 md:h-5" />
                                    <p>070-3405699</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <TfiEmail className="w-4 h-4 md:w-5 md:h-5" />
                                    <p>sandarualoka99@gmail.com</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <IoLocationSharp className="w-4 h-4 md:w-5 md:h-5" />
                                    <p>Matara, Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === "gallery" && (
                        <div>
                            <p className="text-lg">Gallery</p>
                            <div className="mt-2 grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
                                {galleryImages.map((image) => (
                                    <img key={image.id} src={image.src} alt={`Gallery ${image.id}`} className="rounded-lg shadow-md object-cover w-full h-auto" />
                                ))}
                            </div>
                        </div>
                    )}
                    {activeTab === "work" && (
                        <div>
                            <p className="text-lg">Work</p>
                            <p className="text-sm mt-2">Regus Paramount Building Nawala - QuorTech.</p>
                        </div>
                    )}
                </div>
            </div>
            {/* //commit */}
        </div>
    );
};

export default CardMain;
