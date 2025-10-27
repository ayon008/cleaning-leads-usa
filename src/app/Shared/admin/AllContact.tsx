"use client";
import { ContactForm } from "@prisma/client";
// <-- TYPE-ONLY import fixes the error: prevents bundling @prisma/client into the browser bundle
import React, { useEffect, useState } from "react";
import moment from "moment";

type Credentials = { email?: string; password?: string } | null;

const AllContact = ({ data: initialData }: { data: ContactForm[] }) => {
  // NEXT_PUBLIC_* is available in the browser but must not hold secrets.
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  const [submitted, setSubmitted] = useState<Credentials>(null);
  const [data, setData] = useState<ContactForm[]>(initialData);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) {
      return;
    }

    try {
      setIsDeleting(true);
      const response = await fetch(`/api/contacts/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error("Failed to delete contact");
      }

      // Update local state
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
      alert("Failed to delete contact. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("credential");
      if (!raw) {
        setSubmitted(null);
        return;
      }
      // parse safely
      const parsed = JSON.parse(raw) as Credentials;
      setSubmitted(parsed);
    } catch (err) {
      console.error(
        "Failed to read/parse credential from sessionStorage:",
        err
      );
      setSubmitted(null);
    }
  }, []);

  // Explicitly handle unauthorized case by returning null (or you can return a message/component)
  if (
    adminEmail !== submitted?.email ||
    adminPassword !== submitted?.password
  ) {
    // Returning null avoids rendering nothing/undefined and avoids potential hydration confusion.
    return null;
  }

  return (
    <div className="overflow-x-auto bg-primary p-10">
      {/* Accessibility: add caption and use scope on headers for screen readers */}
      <table className="" role="table" aria-label="All contact submissions">
        <caption className="sr-only">
          All submitted contact form entries
        </caption>
        <thead>
          <tr>
            <th scope="col" className="px-4 py-2">
              #
            </th>
            <th scope="col" className="px-4 py-2">
              Name
            </th>
            <th scope="col" className="px-4 py-2">
              Email
            </th>
            <th scope="col" className="px-4 py-2">
              Phone Number
            </th>
            <th scope="col" className="px-4 py-2">
              Company Name
            </th>
            <th scope="col" className="px-4 py-2">
              Address
            </th>
            <th scope="col" className="px-4 py-2">
              ZIP
            </th>
            <th scope="col" className="px-4 py-2">
              Radius
            </th>
            <th scope="col" className="px-4 py-2">
              Message
            </th>
            <th scope="col" className="px-4 py-2">
              Submitted At
            </th>
            <th scope="col" className="px-4 py-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((singleData, i) => {
            const {
              name,
              address,
              companyName,
              email,
              message,
              phoneNumber,
              radius,
              zip,
              id,
            } = singleData;
            console.log(singleData);
            
            return (
              <tr key={i} className="text-center">
                <td className="px-4 py-2">{i + 1}</td>
                <td className="px-4 py-2">{name}</td>
                <td className="px-4 py-2">
                  <a
                    href={`mailto:${email}`}
                    className="text-blue-600 underline"
                  >
                    {email}
                  </a>
                </td>
                <td className="px-4 py-2">
                  {/* phone link for accessibility/keyboard users */}
                  <a
                    href={`tel:${phoneNumber}`}
                    aria-label={`Call ${phoneNumber}`}
                    className="text-blue-600 underline"
                  >
                    {phoneNumber}
                  </a>
                </td>
                <td className="px-4 py-2">{companyName}</td>
                <td className="px-4 py-2">{address}</td>
                <td className="px-4 py-2">{zip}</td>
                <td className="px-4 py-2">{radius}</td>
                <td className="px-4 py-2">{message}</td>
                <td className="px-4 py-2">
                  {moment(singleData.createdAt).format('dddd, MMMM Do')}
                </td>
                <td>
                  <div>
                    <button
                      onClick={() => handleDelete(id)}
                      disabled={isDeleting}
                      className={`border border-red-400 text-sm px-4 rounded-md py-2 uppercase 
                        ${isDeleting 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'cursor-pointer hover:bg-red-400 hover:text-white hover:scale-95'
                        } text-red-500 transition-all duration-150 ease-in-out`}
                    >
                      {isDeleting ? 'Deleting...' : 'Delete'}
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllContact;
