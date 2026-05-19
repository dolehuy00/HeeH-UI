import * as React from "react";
import { cn } from "@heeh-ui/utils";

type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "className" | "size">;

type ClassNameProp = {
  className?: string;
};

type InputStyleProps = {
  size?: "sm" | "md" | "lg";
  state?: "default" | "invalid";
};

export type InputProps = NativeInputProps & ClassNameProp & InputStyleProps;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, state, disabled, "aria-invalid": ariaInvalid, ...props }, ref) => {
    const isInvalid = ariaInvalid === true || ariaInvalid === "true";
    const resolvedState = state ?? (isInvalid ? "invalid" : "default");

    return (
      <input
        ref={ref}
        className={cn(
          "heeh-input",
          `heeh-input--${size ?? "md"}`,
          `heeh-input--${resolvedState}`,
          disabled && "heeh-input--disabled",
          className
        )}
        disabled={disabled}
        aria-invalid={ariaInvalid}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn("heeh-textarea", className)} {...props} />
  )
);

Textarea.displayName = "Textarea";

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> & {
  options: SelectOption[];
  placeholder?: string;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, placeholder, ...props }, ref) => (
    <select ref={ref} className={cn("heeh-select", className)} {...props}>
      {placeholder ? <option value="">{placeholder}</option> : null}
      {options.map((option) => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
  )
);

Select.displayName = "Select";

export type CheckboxProps = Omit<NativeInputProps, "type"> &
  ClassNameProp & {
  label?: React.ReactNode;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => (
    <label className={cn("heeh-choice", className)}>
      <input ref={ref} className="heeh-choice__control" type="checkbox" {...props} />
      {label ? <span className="heeh-choice__label">{label}</span> : null}
    </label>
  )
);

Checkbox.displayName = "Checkbox";

export type RadioProps = Omit<NativeInputProps, "type"> &
  ClassNameProp & {
  label?: React.ReactNode;
};

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, ...props }, ref) => (
    <label className={cn("heeh-choice", className)}>
      <input ref={ref} className="heeh-choice__control" type="radio" {...props} />
      {label ? <span className="heeh-choice__label">{label}</span> : null}
    </label>
  )
);

Radio.displayName = "Radio";

export type SwitchProps = Omit<NativeInputProps, "type"> &
  ClassNameProp & {
  label?: React.ReactNode;
};

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, ...props }, ref) => (
    <label className={cn("heeh-switch", className)}>
      <input ref={ref} className="heeh-switch__input" type="checkbox" role="switch" {...props} />
      <span className="heeh-switch__track" aria-hidden="true">
        <span className="heeh-switch__thumb" />
      </span>
      {label ? <span className="heeh-switch__label">{label}</span> : null}
    </label>
  )
);

Switch.displayName = "Switch";

export type SliderProps = Omit<NativeInputProps, "type"> & ClassNameProp;

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn("heeh-slider", className)} type="range" {...props} />
  )
);

Slider.displayName = "Slider";

export const DatePicker = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input ref={ref} type="date" {...props} />
));

DatePicker.displayName = "DatePicker";

export const TimePicker = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input ref={ref} type="time" {...props} />
));

TimePicker.displayName = "TimePicker";

export const DateTimePicker = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input ref={ref} type="datetime-local" {...props} />
));

DateTimePicker.displayName = "DateTimePicker";

export type FileUploadProps = Omit<InputProps, "type">;

export const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ className, ...props }, ref) => (
    <Input ref={ref} type="file" className={cn("heeh-file-upload", className)} {...props} />
  )
);

FileUpload.displayName = "FileUpload";

export type ColorPickerProps = Omit<InputProps, "type">;

export const ColorPicker = React.forwardRef<HTMLInputElement, ColorPickerProps>(
  ({ className, ...props }, ref) => (
    <Input ref={ref} type="color" className={cn("heeh-color-picker", className)} {...props} />
  )
);

ColorPicker.displayName = "ColorPicker";
