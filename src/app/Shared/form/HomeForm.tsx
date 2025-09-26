"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
};

const HomeForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Save data to sessionStorage
    sessionStorage.setItem("homeFormData", JSON.stringify(data));
    console.log("Saved to sessionStorage:", data);
    reset(); // Clear the form after submission
    router.push("/contact#contact-form");
  };

  return (
    <form
      className="bg-secondary rounded-md p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-center text-white font-medium text-xl">
        Request a Call Back
      </h3>
      <div className="space-y-6 mt-6">
        <div>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            className={`w-full p-3 rounded-md ${
              errors.name ? "border-2 border-red-500" : "bg-white"
            }`}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <input
            type="text"
            {...register("phoneNumber", { required: "Phone Number is required" })}
            placeholder="Phone Number"
            className={`w-full p-3 rounded-md ${
              errors.phoneNumber ? "border-2 border-red-500" : "bg-white"
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}
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
            className={`w-full p-3 rounded-md ${
              errors.email ? "border-2 border-red-500" : "bg-white"
            }`}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Your Message"
            className={`px-3 py-5 w-full resize-none rounded-md ${
              errors.message ? "border-2 border-red-500" : "bg-white"
            }`}
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

export default HomeForm;
