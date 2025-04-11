import Image from "next/image";
export default function Home() {
  return ( 
    <>
       <main className="container mx-auto px-4 py-6">
      <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
      <p>Here you can the latest articles</p>
    </main>
     <div className="flex justify-end px-4 mb-6">
     <input type="text" className="px-4 py-2 border border-gray-300 rounded-md" placeholder="Search..." />
     <button className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4">Search</button>
   </div>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border border-gray-200 p-4">
          <img className="w-full h-48 object-cover mb-4" src="https://fastly.picsum.photos/id/58/1280/853.jpg?hmac=YO3QnOm9TpyM5DqsJjoM4CHg8oIq4cMWLpd9ALoP908" alt="Post Image"/>
          <h2 className="text-xl font-semibold mb-2">Post Title 1</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="border border-gray-200 p-4">
          <img className="w-full h-48 object-cover mb-4" src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4" alt="Post Image"/>
          <h2 className="text-xl font-semibold mb-2">Post Title 2</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="border border-gray-200 p-4">
          <img className="w-full h-48 object-cover mb-4" src="https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ" alt="Post Image"/>
          <h2 className="text-xl font-semibold mb-2">Post Title 3</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
    </div> 
    </>
  )
 
}