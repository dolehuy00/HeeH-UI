import * as React from "react";
import { cn } from "@heeh-ui/utils";

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

export type FormFieldProps = React.HTMLAttributes<HTMLDivElement> & {
  invalid?: boolean;
};

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ invalid, className, ...props }, ref) => (
    <div
      ref={ref}
      data-invalid={invalid || undefined}
      className={cn("heeh-form-field", invalid && "heeh-form-field--invalid", className)}
      {...props}
    />
  )
);

FormField.displayName = "FormField";

export type FormLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, ...props }, ref) => (
    <label ref={ref} className={cn("heeh-form-label", className)} {...props} />
  )
);

FormLabel.displayName = "FormLabel";

export type FormMessageProps = React.HTMLAttributes<HTMLParagraphElement> & {
  tone?: "default" | "danger" | "muted";
};

export const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ tone = "muted", className, ...props }, ref) => (
    <p ref={ref} className={cn("heeh-form-message", `heeh-form-message--${tone}`, className)} {...props} />
  )
);

FormMessage.displayName = "FormMessage";

export type FormSectionProps = React.HTMLAttributes<HTMLElement> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
};

export const FormSection = React.forwardRef<HTMLElement, FormSectionProps>(
  ({ title, description, className, children, ...props }, ref) => (
    <section ref={ref} className={cn("heeh-form-section", className)} {...props}>
      {title || description ? (
        <div className="heeh-form-section__header">
          {title ? <h3 className="heeh-form-section__title">{title}</h3> : null}
          {description ? (
            <p className="heeh-form-section__description">{description}</p>
          ) : null}
        </div>
      ) : null}
      <div className="heeh-form-section__body">{children}</div>
    </section>
  )
);

FormSection.displayName = "FormSection";
