import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    enquiryType: 'Advertising',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      alert(`Thank you ${formData.name}! We'll get back to you soon.`);
      setFormData({
        name: '',
        email: '',
        subject: '',
        enquiryType: 'Advertising',
        message: ''
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 text-left">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-gray-900 text-center mb-16">
          Contact us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&h=600&fit=crop" 
                alt="Professional chef"
                className="relative rounded-3xl w-full max-w-md object-cover shadow-xl"
              />
            </div>
          </div>


          <div className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100 transition-all"
                />
              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
                  Enquiry Type
                </label>
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100 transition-all bg-white appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.25rem'
                  }}
                >
                  <option value="Advertising">Advertising</option>
                  <option value="Partnership">Partnership</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Support">Support</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
                Messages
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your messages..."
                rows="6"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100 transition-all resize-none"
              />
            </div>

            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="px-12 py-4 bg-black text-white font-semibold rounded-2xl hover:bg-gray-800 transition-colors shadow-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;