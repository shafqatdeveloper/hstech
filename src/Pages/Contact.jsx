import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { MdOutlineMail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post("http://localhost:5000/api/contact/create", values);

        toast.success("Thank You! We'll get back to you soon");
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);

        if (error.response) {
          toast.error(
            `Error:  ${error.response.data.message}` || "An error occurred."
          );
        } else if (error.request) {
          toast.error("No response from the server. Please try again later.");
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      }
    },
  });

  return (
    <div>
        <div className="w-full mb-10">
        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.5488148483983!2d73.07500105474308!3d30.674831161790788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922c8054b35b1fd%3A0x26b46e3573068eef!2sCircle%20Rd%2C%20Farid%20Town%2C%20Sahiwal%2C%20Pakistan!5e0!3m2!1sen!2s!4v1742049450650!5m2!1sen!2s" height="300" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      <div className="text-black min-h-screen flex justify-center flex-col md:flex-row p-2 md:p-6 gap-4">
        <div className="w-full md:w-4/6 bg-white p-2 md:p-8 shadow-lg">
          <h1 className="text-2xl font-bold text-[var(--color-sky)]">
            Contact Us
          </h1>
          <div className="w-full flex pt-3">
            <div className="bg-darkSky h-[1.3px] w-1/5"></div>
            <div className="bg-gray-200 h-[1.3px] w-4/5"></div>
          </div>

          <form className="mt-8" onSubmit={formik.handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              )}
            </div>

            {/* Email */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              )}
            </div>

            {/* Subject */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-100"
                {...formik.getFieldProps("subject")}
              />
              {formik.touched.subject && formik.errors.subject && (
                <div className="text-red-500 text-sm">
                  {formik.errors.subject}
                </div>
              )}
            </div>

            {/* Message */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300"
                {...formik.getFieldProps("message")}
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <div className="text-red-500 text-sm">
                  {formik.errors.message}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--color-sky)] text-white py-2 cursor-pointer mt-6 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-full md:w-2/6 bg-gradient-to-bl h-full text-white rounded-md md:rounded-none md:rounded-r-md from-darkRed via-violet to-darkSky py-5 px-7">
          <h1 className="text-lg font-medium">Information</h1>
          <div className="w-full flex pt-2">
            <div className="bg-red-500 h-[0.7px] w-2/6"></div>
            <div className="bg-white h-[0.7px] w-4/6"></div>
          </div>
          <Link
            className="flex items-center text-sm gap-1 hover:underline mt-5"
            to={"mailto:business@hstechnologies.com"}
          >
            <MdOutlineMail />
            business@hstechnologies.com
          </Link>
          <Link
            className="flex items-center text-sm gap-1 hover:underline mt-1"
            to={"tel:+923000293355"}
          >
            <FaMobileAlt />
            +923000293355
          </Link>
          <h1 className="mt-5 text-lg font-medium">Working Hours</h1>
          <div className="w-full flex pt-2">
            <div className="bg-red-500 h-[0.8px] w-2/5"></div>
            <div className="bg-white h-[0.8px] w-3/5"></div>
          </div>
          <h1 className="text-sm mt-5">
            <span className="font-bold">Moday - Friday</span>
            <span> - 09am to 07pm</span>
          </h1>
          <h1 className="text-sm">
            <span className="font-bold">Saturday - Sunday</span>
            <span> - Closed</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
