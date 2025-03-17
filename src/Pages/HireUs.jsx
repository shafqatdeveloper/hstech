import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { MdOutlineMail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../api";

const HireUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      description: "",
      budget: "",
      timeline: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      service: Yup.string().required("Please select a service"),
      description: Yup.string().required("Description is required"),
      budget: Yup.string().required("Budget range is required"),
      timeline: Yup.string().required("Timeline is required"),
    }),
    onSubmit: async (values,{resetForm}) => {
      try {
        await axios.post(`${API_BASE_URL}/quote/create`, {
          name: values.name,
          email: values.email,
          phone: values.phone,
          service: values.service,
          description: values.description,
          budget: values.budget,
          timeline: values.timeline,
        });
    
        toast.success("Thank You! We'll get back to you soon");
        resetForm()
      } catch (error) {
        console.error("Error submitting form:", error);
    
        if (error.response) {
          toast.error(`Error:  ${error.response.data.message}` || "An error occurred.");
        } else if (error.request) {
          toast.error("No response from the server. Please try again later.");
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      }
    },
  });


  return (
    <div className=" text-black min-h-screen flex justify-center flex-col md:flex-row p-2 md:p-6 gap-4">
      <div className="w-full md:w-4/6 bg-white p-2 md:p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-[var(--color-sky)]">Request a Quote</h1>
        <div className="w-full flex pt-3">
        <div className="bg-darkSky h-[1.3px] w-1/5"></div>
        <div className="bg-gray-200 h-[1.3px] w-4/5"></div>
      </div>

        <form className="mt-8" onSubmit={formik.handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name && <div className="text-red-500 text-sm">{formik.errors.name}</div>}
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email && <div className="text-red-500 text-sm">{formik.errors.email}</div>}
          </div>

          {/* Phone Number */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" name="phone" className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-100" {...formik.getFieldProps("phone")} />
            {formik.touched.phone && formik.errors.phone && <div className="text-red-500 text-sm">{formik.errors.phone}</div>}
          </div>

          {/* Service */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Service Required</label>
            <select name="service" className="mt-2 w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md" {...formik.getFieldProps("service")}>
              <option value="">Select Service</option>
              <option>Web Development (MERN)</option>
              <option>Android App Development</option>
              <option>IOS App Development</option>
              <option>Flutter App Development (Hybrid)</option>
              <option>Graphic Designing</option>
              <option>Software Quality Assurance</option>
              </select>
            {formik.touched.service && formik.errors.service && <div className="text-red-500 text-sm">{formik.errors.service}</div>}
          </div>

          {/* Project Description */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Project Description</label>
            <textarea name="description" rows="4" className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300" {...formik.getFieldProps("description")}></textarea>
            {formik.touched.description && formik.errors.description && <div className="text-red-500 text-sm">{formik.errors.description}</div>}
          </div>

          {/* Budget */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Budget Range</label>
            <select name="budget" className="mt-2 w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md" {...formik.getFieldProps("budget")}>
              <option value="">Select Budget Range</option>
              <option>$1,000 - $3,000</option>
              <option>$3,000 - $5,000</option>
              <option>$5,000+</option>
            </select>
            {formik.touched.budget && formik.errors.budget && <div className="text-red-500 text-sm">{formik.errors.budget}</div>}
          </div>
          <div className="mt-4">
          <select
              name="timeline"
              className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-[var(--color-sky)]"
              {...formik.getFieldProps("timeline")}
            >
              <option value="">Select Timeline</option>
              <option>1-3 Months</option>
              <option>3-6 Months</option>
              <option>6+ Months</option>
            </select>
            {formik.touched.timeline && formik.errors.timeline && <div className="text-red-500 text-sm">{formik.errors.timeline}</div>}
          </div>



          <button type="submit" className="w-full bg-[var(--color-sky)] text-white py-2 cursor-pointer mt-6 rounded-md">
            Submit
          </button>
        </form>
      </div>
      <div className="w-full md:w-2/6 bg-gradient-to-bl h-full text-white rounded-md md:rounded-r-md from-darkRed via-violet to-darkSky py-5 px-7">
      <h1 className="text-lg font-medium">Get In Touch</h1>
      <div className="w-full flex pt-2">
        <div className="bg-red-500 h-[0.7px] w-2/5"></div>
        <div className="bg-white h-[0.7px] w-3/5"></div>
      </div>
      <p className="text-sm font-light mt-5">Renowned mobile app and web development company delivering user-engaging mobile applications and responsive websites for multiple industry verticals.</p>
      <Link className="flex items-center text-sm gap-1 hover:underline mt-5" to={'mailto:business@hstechnologies.com'}>
        <MdOutlineMail/>
        business@hstechnologies.com
      </Link>
      <Link className="flex items-center text-sm gap-1 hover:underline mt-1" to={'tel:+923000293355'}>
        <FaMobileAlt/>
        +923000293355
      </Link>
      <h1 className="mt-5 text-lg font-medium">Working Hours</h1>
      <div className="w-full flex pt-2">
        <div className="bg-red-500 h-[0.8px] w-2/5"></div>
        <div className="bg-white h-[0.8px] w-3/5"></div>
      </div>
      <h1 className="text-sm mt-5"><span className="font-bold">Moday - Friday</span><span> - 09am to 07pm</span></h1>
      <h1 className="text-sm"><span className="font-bold">Saturday - Sunday</span><span> - Closed</span></h1>
      </div>
    </div>
  );
};

export default HireUs;