if(localStorage.getItem("nameeee") != null){
    fetch("https://www.omdbapi.com/?apikey=1c768e4f&t=" + localStorage.getItem("nameeee"))
    .then((res) => res.json())
    .then((data) =>
        document.getElementById("ViewMain").innerHTML = `
    <div class="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6 m-7">
        <div class="max-w-5xl w-full bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div class="md:w-1/2">
                <img class="w-full h-full object-cover"
                    src="${data.Poster}"
                    alt="">
            </div>
            <div class="md:w-1/2 p-8 flex flex-col justify-center">
                <h1 class="text-4xl font-bold mb-4">${data.Title}</h1>
                <p class="text-lg text-gray-400 mb-2">${data.Year} • ${data.Runtime}</p>
                <p class="text-gray-300 mb-4"><span class="font-semibold">Genre: </span>${data.Genre}</p>
                <p class="text-gray-300 mb-4"><span class="font-semibold">Actors: </span>${data.Actors}</p>
                <p class="text-gray-400 leading-relaxed mb-6">${data.Plot}</p>
                <div class="flex flex-col sm:flex-row gap-4 mt-6">
                <div class="flex flex-col sm:flex-row gap-4 mt-6">
            <a href="index.html" class="w-full sm:w-auto">
                <button
                    class="w-full sm:w-auto px-6 py-3 text-base font-medium text-white bg-gray-600 rounded-lg shadow hover:bg-gray-700"
                    onclick="alert('⬅️ Going Back!')">
                    Back
                </button>
            </a>
            <a href="index.html" class="w-full sm:w-auto">
                <button
                    class="w-full sm:w-auto px-6 py-3 text-base font-medium text-white bg-green-600 rounded-lg shadow hover:bg-green-700"
                    onclick="alert('✅ Downloading Successful!')">
                    Download
                </button>
            </a>
        </div>


            </div>
        </div>
    </div>
`)
}else{
   document.getElementById("ViewMain").innerHTML = `
    <div class="min-h-screen flex items-center justify-center bg-gray-950 p-6">
        <div class="text-center">
            <h1 class="text-4xl font-bold text-red-500 mb-3">Film Not Found</h1>
            <p class="text-gray-400 mb-6">We couldn’t find the film you were looking for. Please try again.</p>
            <a href="index.html">
                <button class="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700">
                    🔙 Back to Home
                </button>
            </a>
        </div>
   ` 
}
