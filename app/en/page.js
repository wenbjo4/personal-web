import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 py-12">
      
      <header className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-20 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-48 h-48 overflow-hidden flex-shrink-0">
              <img
                src="https://picsum.photos/400/400"
                alt="Profile Picture"
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
                className="object-cover"
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-4xl font-bold mb-2">Hsueh-Chien Cheng</h1>
              <p className="text-xl mb-4">Computer Science Student</p>
              
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">Education</h2>
                <ul className="space-y-2">
                  <li>National Taiwan University of Science and Technology - Department of Computer Science (2020-Present)</li>
                  <li>Da-An Vocational High School - Information Technology Department (2017-2020)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded">C</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded">C++</span>
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded">Python</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded">Unity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="w-full max-w-5xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/project1.jpg"
                alt="Project 1"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">Web Development</span>
              <h4 className="font-semibold text-lg mt-2">Project 1</h4>
              <p className="text-gray-600 mt-2">A brief description of project 1</p>
              <div className="mt-4 flex gap-2">
                <a href="#" className="text-blue-600 hover:underline">Demo</a>
                <a href="#" className="text-blue-600 hover:underline">Code</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 