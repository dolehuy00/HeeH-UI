"use client";

import * as React from "react";
import { useControllableState } from "@heeh-ui/hooks";
import { cn } from "@heeh-ui/utils";
import { Input, Slider, type InputProps, type SelectOption } from "./controls.js";

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
