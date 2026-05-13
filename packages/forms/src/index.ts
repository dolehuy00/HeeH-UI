export type FieldState = {
  invalid?: boolean;
  error?: string;
};

export type FieldAdapterProps<TValue> = {
  name: string;
  value: TValue;
  onChange: (value: TValue) => void;
  onBlur?: () => void;
  fieldState?: FieldState;
};
