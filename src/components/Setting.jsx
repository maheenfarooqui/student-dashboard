import React from "react";
import UseTheme from "../context/Theme";

const Setting = () => {
  const { theme, darkTheme, lightTheme } = UseTheme();

  function changeTheme(e) {
    if (e.currentTarget.checked) {
      darkTheme();
    } else {
      lightTheme();
    }
  }

  return (
    <div className="flex justify-end bg-gray-100 px-6 py-5 dark:bg-black">
      <div className="flex items-center gap-3">

        <span className="text-sm font-medium text-black dark:text-white">
 Light
        </span>

        {/* Toggle */}
        <label className="relative flex h-6 w-11 cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            onChange={changeTheme}
            checked={theme === "dark"}
          />

          {/* Background */}
          <span className="absolute inset-0 rounded-full border-1 border-[#9EC302] bg-gray-300 transition peer-checked:bg-[#9EC302] dark:bg-gray-700" />

          {/* Circle */}
          <span className="absolute left-[3px] h-5 w-5 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-5" />
        </label>

        <span className="text-sm font-medium text-black dark:text-white">
        Dark
        </span>

      </div>
    </div>
  );
};

export default Setting;