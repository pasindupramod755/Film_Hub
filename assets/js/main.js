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
    {
        "name": "bigil"
    },
    {
        "name": "sinhaya"
    },
    {
        "name": "tiger"
    },
    {
        "name": "liger"
    },
    {
        "name": "fox"
    }
];


for (let i = 0; i < fileNameArray.length; i++) {
    fetch("http://www.omdbapi.com/?apikey=1c768e4f&t=" + fileNameArray[i].name)
        .then((res) => res.json())
        .then((data) =>
            document.getElementById("mainDetails").innerHTML += `
                <div
            class="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700">
            <img class="w-full h-72 object-cover" src="${data.Poster}" alt="${data.Title} Poster">
            <div class="p-5">
                <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">${data.Title}</h2>
                <p class="text-sm text-gray-600 dark:text-gray-400 text-center">${data.Year} • ${data.Genre}</p>
                <div class="flex items-center justify-center mt-3 space-x-2">
                    <span class="bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">⭐
                        ${data.imdbRating}/10</span>
                    <span
                        class="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">${data.Rated}</span>
                </div>
                <div class="flex justify-center mt-4 space-x-3">
                    <button
                        class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700">Show
                        More</button>
                    <button onclick="downLoadFilm(${i})"
                        class="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg shadow hover:bg-green-700">Download</button>
                </div>
            </div>
        </div>
        `
        )
}

function downLoadFilm(index) {
    localStorage.setItem("nameeee", document.getElementById("filmName" + index).innerText);
}