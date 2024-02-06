import React, { useState } from 'react';

const Popup = () => {
    const [show, setShowModal] = useState(false);

    // Function to handle closing the modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            {/* Render the modal only when 'show' is true */}
            {show && (
                <div className='fixed inset-0  w-full h-full bg-[#00000065] flex items-center justify-center'>
                    <div className="max-w-sm w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto shadow-md rounded-lg overflow-hidden border-2 border-[#ff8080] relative">
                        {/* Cross button to close the modal */}
                        <button className="absolute top-0 right-0 p-2 text-white" onClick={closeModal}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <img className="w-full h-56 object-cover" src="https://picsum.photos/200" alt="sfasdf" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Lorem ipsum dolor sit amet consectetur.</h2>
                            <p className="text-[#a8a8a8]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolor eos in esse, id cum libero quia deleniti consequuntur commodi!
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Button to open the modal */}
            <button onClick={() => setShowModal(true)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border border-blue-700 rounded-md shadow-md transition duration-300 ease-in-out">
    Click me
</button>

        </div>
    );
}

export default Popup;
