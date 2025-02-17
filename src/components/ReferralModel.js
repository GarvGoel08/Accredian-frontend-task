import React, { useState } from "react";
import ReferModal from "../images/ReferModal.png";

export default function ReferralModel({ setModalOpen }) {
  const [page, setPage] = useState(1);
  const [friendDetails, setFriendDetails] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [yourDetails, setYourDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleNext = () => {
    if (
      !friendDetails.name ||
      !friendDetails.email ||
      !friendDetails.phone ||
      !friendDetails.course
    ) {
      alert("Please fill in all the fields.");
      return;
    }
    setPage(2);
  };

  return (
    <div
      onClick={() => setModalOpen(false)}
      className="fixed inset-0 bg-black/20 w-full h-full flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white flex flex-row rounded-lg shadow-lg w-[400px] md:w-[650px]"
      >
        <div className="bg-theme justify-center items-center px-5 md:flex hidden">
          <img className="min-w-[250px]" src={ReferModal} alt="" />
        </div>
        <div className="p-6">
          <div className="flex flex-row mb-3 w-full justify-between items-center">
            <p className="text-[24px] md:text-[28px] font-semibold">Refer a <p className="inline text-theme">friend!</p></p>
            <button onClick={() => setModalOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {page === 1 ? (
            <div>
              <h2 className="text-xl font-bold mb-4">Friend Details</h2>
              <input
                className="w-full p-2 mb-2 border rounded"
                type="text"
                placeholder="Name"
                value={friendDetails.name}
                onChange={(e) =>
                  setFriendDetails({ ...friendDetails, name: e.target.value })
                }
              />
              <input
                className="w-full p-2 mb-2 border rounded"
                type="email"
                placeholder="Email"
                value={friendDetails.email}
                onChange={(e) =>
                  setFriendDetails({ ...friendDetails, email: e.target.value })
                }
              />
              <input
                className="w-full p-2 mb-2 border rounded"
                type="tel"
                placeholder="Phone Number"
                value={friendDetails.phone}
                onChange={(e) =>
                  setFriendDetails({ ...friendDetails, phone: e.target.value })
                }
              />
              <select
                className="w-full p-2 mb-4 border rounded"
                value={friendDetails.course}
                onChange={(e) =>
                  setFriendDetails({ ...friendDetails, course: e.target.value })
                }
              >
                <option value="">Select Course</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Cyber Security">Cyber Security</option>
              </select>
              <button
                className="w-full bg-theme text-white py-2 rounded"
                onClick={() => handleNext()}
              >
                Next
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-bold mb-4">Your Details</h2>
              <input
                className="w-full p-2 mb-2 border rounded"
                type="text"
                placeholder="Your Name"
                value={yourDetails.name}
                onChange={(e) =>
                  setYourDetails({ ...yourDetails, name: e.target.value })
                }
              />
              <input
                className="w-full p-2 mb-2 border rounded"
                type="email"
                placeholder="Your Email"
                value={yourDetails.email}
                onChange={(e) =>
                  setYourDetails({ ...yourDetails, email: e.target.value })
                }
              />
              <input
                className="w-full p-2 mb-4 border rounded"
                type="tel"
                placeholder="Your Phone Number"
                value={yourDetails.phone}
                onChange={(e) =>
                  setYourDetails({ ...yourDetails, phone: e.target.value })
                }
              />
              <div className="flex justify-between">
                <button
                  className="bg-gray-300 text-black py-2 px-4 rounded"
                  onClick={() => setPage(1)}
                >
                  Back
                </button>
                <button className="bg-green-500 text-white py-2 px-4 rounded">
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
