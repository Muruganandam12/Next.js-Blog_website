export default function About() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                        About Us
                    </h2>
                    <div className="border-b-2 border-indigo-200 dark:border-indigo-700 w-20 mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Welcome to our blog! We're passionate about sharing thoughts, ideas, and tutorials 
                        that inspire and educate our readers.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Our mission is to create a community where knowledge is freely shared and 
                        everyone can grow together.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Whether you're here to learn or to share your own insights, we're glad you're part 
                        of our journey.
                    </p>
                    
                    <div className="mt-10">
                        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}