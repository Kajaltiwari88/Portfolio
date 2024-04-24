import { useState } from "react";
import PageHeader from "../../Components/PageHeader";
import { FaPhoneSquare } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {
  const data = {
    name: "",
    company_name: "",
    phoneno: "",
    email: "",
    message: "",
  };
  const [inputData, setInputdata] = useState(data);
  const [errors, setErrors] = useState({});

  const handleData = (e) => {
    setInputdata({ ...inputData, [e.target.name]: e.target.value });

    setErrors((prevErrors) => {
      return { ...prevErrors, [e.target.name]: "" };
    });
  };
  const validateForm = () => {
    const errors = {};

    if (!inputData.name) {
      errors.name = "Name is required";
    }

    if (!inputData.company_name) {
      errors.company_name = "Company name is required";
    }

    if (!inputData.phoneno) {
      errors.phoneno = "Phone number is required";
    } else if (!/^\d{10}$/.test(inputData.phoneno)) {
      errors.phoneno = "Phone number is invalid";
    }

    if (!inputData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(inputData.email)) {
      errors.email = "Email is invalid";
    }

    if (!inputData.message) {
      errors.message = "Message is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.sendForm('service_83ve23h', 'template_57dj7nj', e.target, 'OJXmY7ESbBuxjSlqi')
        .then(() => {
          alert("Form submitted successfully!");
          setInputdata(data);
        }, (error) => {
          console.error('Error sending email:', error.message);
        });
    }
  };

  return (
    <div className=" relative">
      <section>
        <PageHeader header="Contact Me" icon={<FaPhoneSquare size={40} />} />
      </section>
      <div className="m-5">
        <p
          className="text-[#EAB543] text-4xl text-center font-bold
         underline underline-offset-8 "
        >{`Let's Have A Chat`}</p>
      </div>
      <div className="flex items-center justify-center">
        <div
          className=" bg-[#778ca3] border-4 border-black
        lg:w-fit p-3 rounded-2xl "
        >
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={inputData.name}
              onChange={handleData}
              className="p-4 lg:w-[500px] rounded-md focus:outline-none bg-gray-300 "
            />
            {errors.name && (
              <p className="text-2xl text-center text-red-600">{errors.name}</p>
            )}

            <input
              type="text"
              name="company_name"
              placeholder="Enter Your Company Name"
              value={inputData.company_name}
              onChange={handleData}
              className="p-4 lg:w-[500px] rounded-md focus:outline-none bg-gray-300 "
            />
            {errors.company_name && (
              <p className="text-2xl text-center text-red-600">
                {errors.company_name}
              </p>
            )}

            <input
              type="number"
              name="phoneno"
              placeholder="Enter Your Phone No."
              value={inputData.phoneno}
              onChange={handleData}
              className="p-4 lg:w-[500px] rounded-md focus:outline-none bg-gray-300 "
            />
            {errors.phoneno && (
              <p className="text-2xl text-center text-red-600">
                {errors.phoneno}
              </p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={inputData.email}
              onChange={handleData}
              className="p-4 lg:w-[500px] rounded-md focus:outline-none  bg-gray-300 "
            />
            {errors.email && (
              <p className="text-2xl text-center text-red-600">
                {errors.email}
              </p>
            )}

            <textarea
              name="message"
              rows="5"
              placeholder="Write Your Message Here"
              value={inputData.message}
              onChange={handleData}
              className="p-4 lg:w-[500px] rounded-md focus:outline-none resize-none bg-gray-300   "
            />
            {errors.message && (
              <p className="text-2xl text-center text-red-600">
                {errors.message}
              </p>
            )}

            <button
              type="submit"
              className="p-3 text-grabg-gray-100 text-2xl cursor-pointer
            rounded-lg bg-[#20bf6b] hover:bg-green-200 "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
