"use client";
import { ContactForm } from "@prisma/client";
import React, { useEffect, useState } from "react";
type Credentials = { email?: string; password?: string } | null;

const AllContact = ({ data }: { data: ContactForm[] }) => {
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
  const [submitted, setSubmitted] = useState<Credentials>(null);
  useEffect(() => {
    try {
      // Guard: getItem may return null if nothing saved.
      const raw = sessionStorage.getItem("credential");
      if (!raw) {
        // nothing saved yet
        setSubmitted(null);
        return;
      }

      // Parse only when raw is a string; wrap in try/catch for safety
      const parsed = JSON.parse(raw) as Credentials;
      setSubmitted(parsed);
    } catch (err) {
      // Handle malformed JSON gracefully instead of crashing
      console.error("Failed to read/parse credential from sessionStorage:", err);
      setSubmitted(null);
    }
  }, []);
  if (
    adminEmail === submitted?.email &&
    adminPassword === submitted?.password
  ) {
    return (
      <div>
        <table className="w-full bg-primary border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Company Name</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">ZIP</th>
              <th className="px-4 py-2">Radius</th>
              <th className="px-4 py-2">Message</th>
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
              } = singleData;
              return (
                <tr key={i} className="text-center">
                  <td className="px-4 py-2">{i + 1}</td>
                  <td className="px-4 py-2">{name}</td>
                  <td className="px-4 py-2">{email}</td>
                  <td className="px-4 py-2">{phoneNumber}</td>
                  <td className="px-4 py-2">{companyName}</td>
                  <td className="px-4 py-2">{address}</td>
                  <td className="px-4 py-2">{zip}</td>
                  <td className="px-4 py-2">{radius}</td>
                  <td className="px-4 py-2">{message}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default AllContact;
