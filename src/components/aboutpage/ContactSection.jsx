import { MapPin, PhoneCall, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
    newsletter: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const required = ["firstName", "lastName", "email", "mobile", "message"];
    const invalid = required.some((key) => formData[key] === "");

    if (!invalid) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
        newsletter: false,
      });
      return toast.success("Message sent");
    }
  }

  return (
    <div className="min-h-[calc(100vh-64px)] mt-[5rem] z-10 bg-contact-custom-radial to-red-500/50">
      <section className="container mx-auto py-8 px-2">
        <div className="flex flex-col font-light text-center items-center tracking-wider">
          <h1 className="text-4xl mb-6 ">Contact our team</h1>
          <p className="text-sm max-w-2xl leading-relaxed">
            Toitu Te Tiriti invites everyone to join us in creating a more
            equitable and just Aotearoa. Whether you are an educator, a student,
            or a community member, your voice and actions can contribute to this
            vital kaupapa.
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-center items-center lg:space-x-36 lg:py-8 px-4 md:px-0 mt-12 tracking-wide space-y-8 lg:space-y-0">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col leading-loose  w-full max-w-lg "
        >
          {/* Name */}
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="flex flex-col w-full">
              <label htmlFor="firstName">First name *</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="off"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="rounded text-sm text-stone-950 px-2 py-1 outline-none focus:ring focus:ring-red-700/40"
              />
            </div>
            <div className="flex flex-col w-full mt-4 lg:mt-0">
              <label htmlFor="lastName">Last name *</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="off"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="rounded text-sm text-stone-950 px-2 py-1 outline-none focus:ring focus:ring-red-700/40"
              />
            </div>
          </div>
          {/* Email */}
          <label htmlFor="email" className="mt-4">
            Email *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="rounded text-sm text-stone-950 px-2 py-1 outline-none focus:ring focus:ring-red-700/40"
          />

          {/* Mobile */}
          <label htmlFor="mobile" className="mt-4">
            Mobile *
          </label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            placeholder="+64 22 123 4567"
            value={formData.mobile}
            onChange={handleChange}
            className="rounded text-sm text-stone-950 px-2 py-1 outline-none focus:ring focus:ring-red-700/40"
          />

          {/* Message */}
          <label htmlFor="message" className="mt-4">
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Leave us a message..."
            value={formData.message}
            onChange={handleChange}
            className="rounded text-sm text-stone-950 px-2 py-1 outline-none focus:ring focus:ring-red-700/40 resize-none leading-normal min-h-28"
          ></textarea>

          {/* Newsletter */}
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="mr-2 size-4 accent-red-700/40"
            />
            <label htmlFor="newsletter" className="font-light">
              Sign up to our newsletter (optional)
            </label>
          </div>

          <button className="mt-4 border rounded py-2 px-4 hover:border-red-700/40 transition-colors duration-150">
            Send Message
          </button>
        </form>

        {/* Contact Us Info */}
        <div className="pt-12 lg:pt-0 lg:mt-0 lg:max-w-lg">
          <div className="sm:flex text-center lg:text-left lg:block space-y-10 sm:space-y-0 lg:space-y-10 ">
            {/* Call us */}
            <div>
              <h3 className="font-bold">Call us</h3>
              <p className="text-sm font-light mt-1 px-4 lg:px-0">
                Call our team Mon-Fri from 8am to 5pm
              </p>
              <div className="flex justify-center lg:justify-start items-center mt-4">
                <PhoneCall color="#10b981" size={20} />
                <p className="font-bold underline underline-offset-4 text-sm cursor-pointer ml-2">
                  (03) 123 4567
                </p>
              </div>
            </div>

            {/* Email us */}
            <div>
              <h3 className="font-bold">Email us</h3>
              <p className="text-sm font-light mt-1 px-4 lg:px-0">
                Send us an email and we&apos;ll be in touch as soon as possible
              </p>
              <div className="flex justify-center lg:justify-start items-center mt-4">
                <Mail color="#3b82f6" size={20} />
                <p className="underline underline-offset-4 text-sm cursor-pointer ml-2">
                  toitutetiriti@gmail.com
                </p>
              </div>
            </div>

            {/* Visit us */}
            <div>
              <h3 className="font-bold">Visit us</h3>
              <p className="text-sm font-light mt-1 px-4 lg:px-0">
                Chat to us in person at our Christchurch office
              </p>
              <div className="flex justify-center lg:justify-start items-center mt-4">
                <MapPin color="#ef4444" size={20} />
                <p className="underline underline-offset-4 text-sm cursor-pointer ml-2">
                  123 Main St, Christchurch Central
                </p>
              </div>
            </div>
          </div>

          {/* Short message */}
          <div className="max-w-xs mx-auto lg:mx-0 l mt-8 border-t py-6">
            <p className="text-center text-sm leading-relaxed tracking-wide">
              Together, let&apos;s honor Te Tiriti o Waitangi and build a future
              where all people of Aotearoa thrive.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
