// "use client";
// // Note: No Prisma client used in this client component
// import React, { useEffect, useState } from "react";
// import moment from "moment";
// // Using fetch with cache: "no-store" for a no-cache implementation

// type Credentials = { email?: string; password?: string } | null;

// export type ContactForm = {
//   _id: string; // MongoDB _id converted to string
//   name: string;
//   email: string;
//   phoneNumber: string;
//   companyName: string;
//   address: string;
//   zip: string;
//   radius: string;
//   message: string;
//   createdAt: string | Date; // ISO string from MongoDB or Date object
// };

// const AllContact = () => {
//   // NEXT_PUBLIC_* is available in the browser but must not hold secrets.
//   const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
//   const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
//   const [submitted, setSubmitted] = useState<Credentials>(null);
//   const [isDeleting, setIsDeleting] = useState(false);

//   const [data, setData] = useState<ContactForm[]>([]);

//   // Fetch data with no-cache / no-store so we always get fresh results
//   const fetchData = async () => {
//     try {
//       const res = await fetch("https://www.cleaningleadsusa.com/api/sendinfo", {
//         cache: "no-store",
//       });
//       if (!res.ok) {
//         throw new Error(`Failed to fetch contact list: ${res.status}`);
//       }
//       const json = await res.json();
//       setData(json || []);
//     } catch (err) {
//       console.error("Error fetching contact list:", err);
//       setData([]);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [isDeleting]);

//   const handleDelete = async (id: string) => {
//     if (!window.confirm("Are you sure you want to delete this contact?")) {
//       return;
//     }

//     try {
//       setIsDeleting(true);
//       console.log(id);

//       const response = await fetch(
//         `https://www.cleaningleadsusa.com/api/contacts/${id}`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to delete contact");
//       }

//       // Refresh list after successful delete
//       await fetchData();
//     } catch (error) {
//       console.error("Error deleting contact:", error);
//       alert("Failed to delete contact. Please try again.");
//     } finally {
//       setIsDeleting(false);
//     }
//   };

//   return (
//     <div className="overflow-x-auto bg-primary p-10">
//       {/* Accessibility: add caption and use scope on headers for screen readers */}
//       <table className="" role="table" aria-label="All contact submissions">
//         <caption className="sr-only">
//           All submitted contact form entries
//         </caption>
//         <thead>
//           <tr>
//             <th scope="col" className="px-4 py-2">
//               #
//             </th>
//             <th scope="col" className="px-4 py-2">
//               Name
//             </th>
//             <th scope="col" className="px-4 py-2">
//               Email
//             </th>
//             <th scope="col" className="px-4 py-2">
//               Phone Number
//             </th>
//             <th scope="col" className="px-4 py-2">
//               Company Name
//             </th>
//             <th scope="col" className="px-4 py-2">
//               Address
//             </th>
//             <th scope="col" className="px-4 py-2">
//               ZIP
//             </th>
//             <th scope="col" className="px-4 py-2">
//               Radius
//             </th>
//             <th scope="col" className="px-4 py-2">
//               Message
//             </th>
//             <th scope="col" className="px-4 py-2">
//               Submitted At
//             </th>
//             <th scope="col" className="px-4 py-2">
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {data?.map((singleData, i) => {
//             const {
//               name,
//               address,
//               companyName,
//               email,
//               message,
//               phoneNumber,
//               radius,
//               zip,
//               _id,
//             } = singleData;
//             return (
//               <tr key={i} className="text-center">
//                 <td className="px-4 py-2">{i + 1}</td>
//                 <td className="px-4 py-2">{name}</td>
//                 <td className="px-4 py-2">
//                   <a
//                     href={`mailto:${email}`}
//                     className="text-blue-600 underline"
//                   >
//                     {email}
//                   </a>
//                 </td>
//                 <td className="px-4 py-2">
//                   {/* phone link for accessibility/keyboard users */}
//                   <a
//                     href={`tel:${phoneNumber}`}
//                     aria-label={`Call ${phoneNumber}`}
//                     className="text-blue-600 underline"
//                   >
//                     {phoneNumber}
//                   </a>
//                 </td>
//                 <td className="px-4 py-2">{companyName}</td>
//                 <td className="px-4 py-2">{address}</td>
//                 <td className="px-4 py-2">{zip}</td>
//                 <td className="px-4 py-2">{radius}</td>
//                 <td className="px-4 py-2">{message}</td>
//                 <td className="px-4 py-2">
//                   {moment(singleData.createdAt).format("dddd, MMMM Do")}
//                 </td>
//                 <td>
//                   <div>
//                     <button
//                       onClick={() => handleDelete(_id)}
//                       disabled={isDeleting}
//                       className={`border border-red-400 text-sm px-4 rounded-md py-2 uppercase
//                         ${
//                           isDeleting
//                             ? "opacity-50 cursor-not-allowed"
//                             : "cursor-pointer hover:bg-red-400 hover:text-white hover:scale-95"
//                         } text-red-500 transition-all duration-150 ease-in-out`}
//                     >
//                       {isDeleting ? "Deleting..." : "Delete"}
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllContact;

"use client";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";

export type ContactForm = {
  _id: string; // MongoDB _id converted to string
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  address: string;
  zip: string;
  radius: string;
  message: string;
  createdAt: string | Date; // ISO string from MongoDB or Date object
};

type Credentials = { email?: string; password?: string } | null;

const AllContact = () => {
  const [data, setData] = useState<ContactForm[]>([]);
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
  const [submitted, setSubmitted] = useState<Credentials>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/api/sendinfo");
      const data = response.data;
      console.log(data);
      setData(data);
    };
    fetchData();
  }, []);

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
              _id,
            } = singleData;
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
                  {moment(singleData.createdAt).format("dddd, MMMM Do")}
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
