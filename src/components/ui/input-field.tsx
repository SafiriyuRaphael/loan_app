import React from "react";

export type InputFieldProps = {
  label?: string;
  name: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password" | "file" | "tel";
  value?: string | number | readonly string[] | undefined;
  onChange?: (e: any) => void;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
  readonly?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  inputMode?: "numeric" | "text";
  error?: string;
  accept?: string;
};

const InputField = ({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  variant = "primary",
}: InputFieldProps): React.ReactElement => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block font-semibold" htmlFor={name}>
          {label}
        </label>
      )}
      <div className=" border-2 rounded-lg border-gray-300 bg-white outline-none">
        <input
          className={` w-full py-2 rounded-lg  p-2 font-bold ${variant === "primary" ? "bg-white/30" : "bg-black/10"}`}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputField;
