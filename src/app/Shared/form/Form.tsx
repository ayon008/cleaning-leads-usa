/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  address: string;
  zip: string;
  radius: string;
  message: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      address: "",
      zip: "",
      radius: "",
      message: "",
    },
  });

  // Load data from sessionStorage on mount
  useEffect(() => {
    const storedData = sessionStorage.getItem("homeFormData");
    if (storedData) {
      const parsedData: FormValues = JSON.parse(storedData);
      // Set each field value
      Object.keys(parsedData).forEach((key) => {
        setValue(key as keyof FormValues, parsedData[key as keyof FormValues]);
      });
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // Show loader first
    Swal.fire({
      title: "Sending...",
      text: "Please wait while we send your message.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch("https://www.cleaningleadsusa.com/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      const response2 = await fetch("https://www.cleaningleadsusa.com/api/sendinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result2 = await response2.json();
      const { email, name } = data;
      // await sendEmail("contact", email, { name });
      await fetch("https://www.cleaningleadsusa.com/api/notifyUser", {
        method: "POST",
        headers: {},
        body: JSON.stringify({ email, name }),
      });

      if (result.success && result2.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your lead has been submitted successfully.",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        sessionStorage.removeItem("homeFormData");
        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error sending message: ${result.error}`,
        });
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: error.message || "Something went wrong.",
      });
    }
  };

  return (
    <form
      className="bg-secondary rounded-md p-6 shadow-2xl"
      onSubmit={handleSubmit(onSubmit)}
      id="contact-form"
    >
      <div className="space-y-4">
        <div>
          <input
            type="text"
            {...register("name", { required: "Full Name is required" })}
            placeholder="Full Name"
            className="w-full bg-white p-3 rounded-md"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
            placeholder="Your Business Email"
            className="w-full bg-white p-3 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            {...register("phoneNumber", {
              required: "Phone Number is required",
            })}
            placeholder="Phone Number"
            className="w-full bg-white p-3 rounded-md"
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            {...register("companyName", {
              required: "Company Name is required",
            })}
            placeholder="Company Name"
            className="w-full bg-white p-3 rounded-md"
          />
          {errors.companyName && (
            <p className="text-red-500">{errors.companyName.message}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            {...register("address", { required: "Address is required" })}
            placeholder="Company Address"
            className="w-full bg-white p-3 rounded-md"
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            {...register("zip", { required: "Service Zip is required" })}
            placeholder="Service Zip"
            className="w-full bg-white p-3 rounded-md"
          />
          {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
        </div>

        <div>
          <input
            type="text"
            {...register("radius", { required: "Service Radius is required" })}
            placeholder="Service Radius"
            className="w-full bg-white p-3 rounded-md"
          />
          {errors.radius && (
            <p className="text-red-500">{errors.radius.message}</p>
          )}
        </div>

        <div>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Your Message"
            className="px-3 py-5 w-full bg-white resize-none rounded-md"
          ></textarea>
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-tertiary text-white hover:bg-white hover:text-tertiary duration-200 transition-all ease-linear rounded-md text-base py-4 cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
