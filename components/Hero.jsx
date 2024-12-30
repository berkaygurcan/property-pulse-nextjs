const Hero = () => {
    return ( 
        <section className="bg-blue-700 py-20 mb-4">
        <div
          class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
          <div class="text-center">
            <h1
              class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              Find The Perfect Rental
            </h1>
            <p class="my-4 text-xl text-white">
              Discover the perfect property that suits your needs.
            </p>
          </div>
          {/* <!-- Form Component --> */}
          <form
            class="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center"
          >
            <div class="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
              <label htmlFor="location" class="sr-only">Location</label>
              <input
                type="text"
                id="location"
                placeholder="Enter Location (City, State, Zip, etc"
                class="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div class="w-full md:w-2/5 md:pl-2">
              <label htmlFor="property-type" class="sr-only">Property Type</label>
              <select
                id="property-type"
                class="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
              >
                <option value="All">All</option>
                <option value="Apartment">Apartment</option>
                <option value="Studio">Studio</option>
                <option value="Condo">Condo</option>
                <option value="House">House</option>
                <option value="Cabin Or Cottage">Cabin or Cottage</option>
                <option value="Loft">Loft</option>
                <option value="Room">Room</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              class="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Search
            </button>
          </form>
        </div>
      </section>
     );
}
 
export default Hero;