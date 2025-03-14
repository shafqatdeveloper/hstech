import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

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
        await axios.post("http://localhost:5000/api/quote/create", {
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
    <div className="bg-darkSky text-black min-h-screen flex items-center justify-center p-2 md:p-6">
      <div className="md:max-w-2xl w-full bg-white p-2 md:p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-[var(--color-sky)] mb-8">Request a Quote</h1>

        <form onSubmit={formik.handleSubmit}>
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
    </div>
  );
};

export default HireUs;