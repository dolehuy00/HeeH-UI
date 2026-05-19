"use client";

import * as React from "react";
import { Button, Stack } from "@heeh-ui/core";
import { Alert, type AlertProps } from "./feedback.js";

export type NotificationProps = AlertProps & {
  onClose?: () => void;
};

export function Notification({ onClose, children, ...props }: NotificationProps) {
  return (
    <Alert {...props}>
      <Stack direction="row" gap="sm">
        <span>{children}</span>
        {onClose ? (
          <Button variant="ghost" size="sm" onClick={onClose}>
            Dismiss
          </Button>
        ) : null}
      </Stack>
    </Alert>
  );
}
