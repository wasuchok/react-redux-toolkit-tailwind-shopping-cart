

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Company Name</h3>
          <p className="mt-4">A brief description of the company.</p>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold">Links</h4>
          <ul className="mt-4">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold">Social Media</h4>
          <ul className="mt-4">
            <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-bold">Contact Info</h4>
          <ul className="mt-4">
            <li><a href="tel:+1234567890" className="text-gray-400 hover:text-white">Phone: +1 (234) 567-890</a></li>
            <li><a href="mailto:info@example.com" className="text-gray-400 hover:text-white">Email: info@example.com</a></li>
            <li><span className="text-gray-400">Address: 123 Street, City, Country</span></li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-700 my-8" />
      <p className="text-center text-gray-400">© 2023 Company Name. All rights reserved.</p>
    </div>
  </footer>
  
    )
  }
  
  export default Footer