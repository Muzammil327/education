import React from "react";

export default function Input(props: {
  optiontext: string;
  opt: string;
}) {
  return (
    <>
      <label
        htmlFor={props.optiontext}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.optiontext}
      </label>
      <div className="mt-2">
        <input
          id="text"
          name="text"
          value={props.opt}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          type="text"
          autoComplete="text"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
}
