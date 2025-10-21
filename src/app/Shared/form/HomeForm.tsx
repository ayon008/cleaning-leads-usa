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
      role="form"
      aria-label="Request a Call Back form"
      itemScope
      itemType="http://schema.org/ContactAction"
    >
      <h3 className="text-center text-white font-medium text-xl">Request a Call Back</h3>
      <div className="space-y-6 mt-6">
        <div>
          <label htmlFor="homeform-name" className="sr-only">
            Your Name
          </label>
          <input
            id="homeform-name"
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            aria-describedby={errors.name ? "homeform-name-error" : undefined}
            autoComplete="name"
            className={`w-full p-3 rounded-md ${errors.name ? "border-2 border-red-500" : "bg-white"}`}
            itemProp="agent"
          />
          {errors.name && (
            <p id="homeform-name-error" className="text-red-500" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="homeform-phone" className="sr-only">
            Phone Number
          </label>
          <input
            id="homeform-phone"
            type="tel"
            {...register("phoneNumber", { required: "Phone Number is required" })}
            placeholder="Phone Number"
            aria-describedby={errors.phoneNumber ? "homeform-phone-error" : undefined}
            inputMode="tel"
            autoComplete="tel"
            className={`w-full p-3 rounded-md ${errors.phoneNumber ? "border-2 border-red-500" : "bg-white"}`}
            itemProp="telephone"
          />
          {errors.phoneNumber && (
            <p id="homeform-phone-error" className="text-red-500" role="alert">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="homeform-email" className="sr-only">
            Your Business Email
          </label>
          <input
            id="homeform-email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
            placeholder="Your Business Email"
            aria-describedby={errors.email ? "homeform-email-error" : undefined}
            autoComplete="email"
            className={`w-full p-3 rounded-md ${errors.email ? "border-2 border-red-500" : "bg-white"}`}
            itemProp="email"
          />
          {errors.email && (
            <p id="homeform-email-error" className="text-red-500" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="homeform-message" className="sr-only">
            Your Message
          </label>
          <textarea
            id="homeform-message"
            {...register("message", { required: "Message is required" })}
            placeholder="Your Message"
            aria-describedby={errors.message ? "homeform-message-error" : undefined}
            className={`px-3 py-5 w-full resize-none rounded-md ${errors.message ? "border-2 border-red-500" : "bg-white"}`}
            itemProp="description"
          ></textarea>
          {errors.message && (
            <p id="homeform-message-error" className="text-red-500" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-tertiary text-white hover:bg-white hover:text-tertiary duration-200 transition-all ease-linear rounded-md text-base py-4 cursor-pointer"
          aria-label="Submit request form"
          itemProp="potentialAction"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default HomeForm;
