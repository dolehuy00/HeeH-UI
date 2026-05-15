import * as React from "react";
import { Box, Stack } from "@heeh-ui/core";
import { cn } from "@heeh-ui/utils";

export type CardSlots = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  slots?: CardSlots;
};

export function Card({
  title,
  description,
  slots,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Box className={cn("heeh-card", className)} {...props}>
      {slots?.header ?? (
        title ? (
          <Stack gap="xs" className="heeh-card__header">
            <h3 className="heeh-card__title">{title}</h3>
            {description ? (
              <p className="heeh-card__description">{description}</p>
            ) : null}
          </Stack>
        ) : null
      )}
      <div className="heeh-card__body">{children}</div>
      {slots?.footer ? (
        <div className="heeh-card__footer">{slots.footer}</div>
      ) : null}
    </Box>
  );
}
