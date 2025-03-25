import React, { useState } from 'react';

// Import your actual app images here
import Image1 from '../assets/app/image-1.jpg';
import Image2 from '../assets/app/image-2.jpg';
import Image3 from '../assets/app/image-3.jpg';
import Image4 from '../assets/app/image-4.jpg';
import Image5 from '../assets/app/image-5.jpg';
import Image6 from '../assets/app/image-6.jpg';

export default function AppImageShowcase() {
    const [selectedImage, setSelectedImage] = useState(null);

    const appImages = [
        {
            src: Image1,
            alt: "Locus App Screenshot 1",
            description: "Login"
        },
        {
            src: Image2,
            alt: "Locus App Screenshot 2",
            description: "Interactive map view"
        },
        {
            src: Image3,
            alt: "Locus App Screenshot 3",
            description: "Explore local communities"
        },
        {
            src: Image4,
            alt: "Locus App Screenshot 4",
            description: "Add new community"
        },
        {
            src: Image5,
            alt: "Locus App Screenshot 5",
            description: "Discover nearby connections"
        },
        {
            src: Image6,
            alt: "Locus App Screenshot 6",
            description: "Register"
        }
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="p-8 text-center mx-4 sm:mx-10 md:mx-20 mt-10">
            <h2 className="lg:text-6xl text-3xl font-josefin font-semibold mb-10 text-[#00BF63]">
                App Preview
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-14">
                {appImages.map((image, index) => (
                    <div
                        key={index}
                        className="relative group border-2 cursor-pointer overflow-hidden rounded-lg  shadow-lg hover:scale-105 transition-transform duration-300 "

                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full md:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                            <p className="text-white opacity-0 group-hover:opacity-100 text-center px-4 transition-opacity duration-300">
                                {image.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}