import React from "react";

const InputCustom = ({
  labelContent,
  id,
  placeholder,
  name,
  onChange,
  value,
  classWrapper = "",
  onBlur,
  error,
  touched,
}) => {
  return (
    <>
      <div className={classWrapper}>
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {labelContent}
        </label>
        <input
          type="text"
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
        {error && touched ? (
          <p className="text-red-500 h-3">{error}</p>
        ) : (
          <p className="h-3"> </p>
        )}
      </div>
    </>
  );
};

export default InputCustom;
