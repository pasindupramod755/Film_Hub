for (let i = 0; i < 10; i++) {
    document.getElementById("mainDetails").innerHTML += `
            <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#"><img class="w-full h-60 object-cover rounded-t-lg" src="assets/image-1.jpg" alt="" /></a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Noteworthy</h5>
                    </a>
                    <div class="flex justify-center">
                        <a href="#"
                            class="mr-1.5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg">
                            Show More
                        </a>
                        <a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg">
                            Download
                        </a>
                    </div>
                </div>
            </div>
`
}