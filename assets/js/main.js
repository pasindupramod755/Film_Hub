let fileNameArray = [
    {
        "name": "Inception"
    },
    {
        "name": "Fun"
    },
    {
        "name": "Batman"
    },
    {
        "name": "War"
    },
    {
        "name": "Avengers"
    },
    {
        "name": "Titanic"
    },
    {
        "name": "The Matrix"
    },
    {
        "name": "Iron Man"
    },
    {
        "name": "Spider-Man"
    },
    {
        "name": "Frozen"
    },
    {
        "name": "The Lion King"
    },
    {
        "name": "Jurassic Park"
    },
    {
        "name": "leo"
    },
    {
        "name": "master"
    },
    {
        "name": "varisu"
    },
    // {
    //     "name": "bigil"
    // },
    // {
    //     "name": "sinhaya"
    // },
    // {
    //     "name": "tiger"
    // },
    // {
    //     "name": "liger"
    // },
    // {
    //     "name": "fox"
    // }
];


for (let i = 0; i < fileNameArray.length; i++) {
    fetch("https://www.omdbapi.com/?apikey=1c768e4f&t=" + fileNameArray[i].name)
        .then((res) => res.json())
        .then((data) =>
            document.getElementById("mainDetails").innerHTML += `
                <div
            class="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700">
            <img class="w-full h-72 object-cover" src="${data.Poster}" alt="${data.Title} Poster">
            <div class="p-5">
                <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center" id="filmName${i}">${data.Title}</h2>
                <p class="text-sm text-gray-600 dark:text-gray-400 text-center">${data.Year} • ${data.Genre}</p>
                <div class="flex items-center justify-center mt-3 space-x-2">
                    <span class="bg-blue-600 text-black text-xs font-semibold px-2 py-1 rounded-full">⭐
                        ${data.imdbRating}/10</span>
                    <span
                        class="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">${data.Rated}</span>
                </div>
                <div class="flex justify-center mt-4 space-x-3">
                    <button
                        class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700">Show
                        More</button>
                    <a href="view.html"><button onclick="downLoadFilm(${i})"
                        class="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg shadow hover:bg-green-700">Download</button></a>
                </div>
            </div>
        </div>
        `
        )
}

function downLoadFilm(index) {
    localStorage.setItem("nameeee", document.getElementById("filmName" + index).innerText);
    console.log("pasindu")
}

function search() {
    fetch("https://www.omdbapi.com/?apikey=1c768e4f&t=" + document.getElementById("default-search").value)
        .then((res) => res.json())
        .then((data) => {
            if (data.Response !== "False") {  
                document.getElementById("MainSearch").innerHTML = `
                <div class="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6 m-7">
                    <div class="max-w-5xl w-full bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                        <div class="md:w-1/2">
                            <img class="w-full h-full object-cover" src="${data.Poster}" alt="">
                        </div>
                        <div class="md:w-1/2 p-8 flex flex-col justify-center">
                            <h1 class="text-4xl font-bold mb-4">${data.Title}</h1>
                            <p class="text-lg text-gray-400 mb-2">${data.Year} • ${data.Runtime}</p>
                            <p class="text-gray-300 mb-4"><span class="font-semibold">Genre: </span>${data.Genre}</p>
                            <p class="text-gray-300 mb-4"><span class="font-semibold">Actors: </span>${data.Actors}</p>
                            <p class="text-gray-400 leading-relaxed mb-6">${data.Plot}</p>
                            <div class="flex flex-col sm:flex-row gap-4 mt-6">
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
                </div>`;
            } else {
                document.getElementById("MainSearch").innerHTML = `
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
                </div>`;
            }
        });
}
