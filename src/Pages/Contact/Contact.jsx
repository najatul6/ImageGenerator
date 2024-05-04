const Contact = () => {
  return (
      <div className="md:w-3/4 shadow-inner shadow-white rounded-2xl mx-auto">
          <div className="w-full p-8 my-4 mr-auto rounded-2xl shadow-2xl">
            <div className="my-3">
              <h1 className="font-bold uppercase text-3xl md:text-4xl text-white text-center">
                Send us a message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-full">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-dark-orange hover:bg-dark-blue hover:text-light-sky text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>
      </div>
  );
};

export default Contact;
