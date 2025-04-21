
export default function Contact() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-8">
                <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>
                <p className="text-gray-600 mb-8 text-center">
                    Have questions or feedback? We'd love to hear from you!
                </p>
                
                <form className="space-y-6">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="name" className="text-gray-700 font-medium">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Your name"
                        />
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="your.email@example.com"
                        />
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="message" className="text-gray-700 font-medium">Message</label>
                        <textarea 
                            id="message" 
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition min-h-[150px]"
                            placeholder="Your message here..."
                        ></textarea>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Send Message
                    </button>
                </form>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Other ways to reach us</h3>
                    <div className="flex flex-col space-y-2 text-gray-600">
                        <p>Email: contact@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Address: 123 Main St, City, Country</p>
                    </div>
                </div>
            </div>
        </main>
    );
}