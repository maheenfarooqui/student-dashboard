import React from "react";
import UseUser from "../context/User";

const Profile = () => {
  const { name, email, role, course } = UseUser();

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12 transition-colors duration-300 dark:bg-black">
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-medium text-[#9EC302]">
            Student Dashboard
          </p>

          <h1 className="mt-1 text-3xl font-bold text-black dark:text-white">
            My Profile
          </h1>
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-[#111]">

          {/* Header */}
          <div className="bg-black px-6 py-8">
            <div className="flex items-center gap-5">

              {/* Avatar */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#9EC302] text-2xl font-bold text-black">
                {name?.charAt(0)}
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  {name}
                </h2>

                <p className="text-[#9EC302]">
                  {role}
                </p>
              </div>

            </div>
          </div>

          {/* Information */}
          <div className="grid gap-5 p-6 sm:grid-cols-2">

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-[#181818]">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Full Name
              </p>

              <p className="mt-1 font-semibold text-black dark:text-white">
                {name}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-[#181818]">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Email
              </p>

              <p className="mt-1 font-semibold text-black dark:text-white">
                {email}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-[#181818]">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Role
              </p>

              <p className="mt-1 font-semibold text-[#9EC302]">
                {role}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-[#181818]">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Course
              </p>

              <p className="mt-1 font-semibold text-black dark:text-white">
                {course}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;