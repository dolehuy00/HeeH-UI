import * as React from "react";
import { useControllableState } from "@heeh-ui/hooks";
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

export type AutocompleteProps = Omit<InputProps, "list"> & {
  options: SelectOption[];
};

export const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  ({ className, id, options, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const listId = `${inputId}-options`;

    return (
      <>
        <Input ref={ref} id={inputId} list={listId} className={className} {...props} />
        <datalist id={listId}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </datalist>
      </>
    );
  }
);

Autocomplete.displayName = "Autocomplete";

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

export type RangeSliderProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "defaultValue" | "onChange" | "value"
> & {
  min?: number;
  max?: number;
  step?: number;
  value?: [number, number];
  defaultValue?: [number, number];
  onChange?: (value: [number, number]) => void;
};

export function RangeSlider({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue = [min, max],
  onChange,
  className,
  ...props
}: RangeSliderProps) {
  const [currentValue, setValue] = useControllableState<[number, number]>({
    value,
    defaultValue,
    onChange
  });

  const updateValue = (index: 0 | 1, next: number) => {
    const nextValue: [number, number] =
      index === 0
        ? [Math.min(next, currentValue[1]), currentValue[1]]
        : [currentValue[0], Math.max(next, currentValue[0])];

    setValue(nextValue);
  };

  return (
    <div className={cn("heeh-range-slider", className)} {...props}>
      <Slider
        min={min}
        max={max}
        step={step}
        value={currentValue[0]}
        onChange={(event) => updateValue(0, event.currentTarget.valueAsNumber)}
      />
      <Slider
        min={min}
        max={max}
        step={step}
        value={currentValue[1]}
        onChange={(event) => updateValue(1, event.currentTarget.valueAsNumber)}
      />
    </div>
  );
}

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

export type OtpInputProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange" | "defaultValue"
> & {
  length?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export function OtpInput({
  length = 6,
  value,
  defaultValue = "",
  onChange,
  className,
  ...props
}: OtpInputProps) {
  const [currentValue, setValue] = useControllableState({ value, defaultValue, onChange });
  const inputsRef = React.useRef<Array<HTMLInputElement | null>>([]);
  // Fixed-length slot view; empty slots are "" (not space-padded) so a
  // legitimately typed space is never silently trimmed away.
  const chars = Array.from({ length }, (_, index) => currentValue[index] ?? "");

  const updateChar = (index: number, nextChar: string) => {
    const nextValue = [...chars];
    nextValue[index] = nextChar.slice(-1);
    setValue(nextValue.join(""));

    if (nextChar && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  return (
    <div className={cn("heeh-otp", className)} {...props}>
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          ref={(node) => {
            inputsRef.current[index] = node;
          }}
          aria-label={`Digit ${index + 1}`}
          className="heeh-otp__input"
          inputMode="numeric"
          maxLength={1}
          value={chars[index]}
          onChange={(event) => updateChar(index, event.currentTarget.value)}
        />
      ))}
    </div>
  );
}

export type ColorPickerProps = Omit<InputProps, "type">;

export const ColorPicker = React.forwardRef<HTMLInputElement, ColorPickerProps>(
  ({ className, ...props }, ref) => (
    <Input ref={ref} type="color" className={cn("heeh-color-picker", className)} {...props} />
  )
);

ColorPicker.displayName = "ColorPicker";
