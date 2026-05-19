import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Card, Grid, Stack } from "@heeh-ui/core";
import {
  Checkbox,
  ColorPicker,
  DatePicker,
  DateTimePicker,
  FileUpload,
  FormField,
  FormLabel,
  FormMessage,
  FormSection,
  Input,
  Radio,
  Select,
  Slider,
  Switch,
  Textarea,
  TimePicker
} from "@heeh-ui/forms";
import { Autocomplete, OtpInput, RangeSlider } from "@heeh-ui/forms/client";

const options = [
  { label: "Office", value: "office" },
  { label: "Cartoon", value: "cartoon" },
  { label: "Minimal", value: "minimal" }
];

const meta = {
  title: "Forms/Overview",
  parameters: {
    layout: "fullscreen"
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllControls: Story = {
  render: () => {
    const [otp, setOtp] = React.useState("123");
    const [range, setRange] = React.useState<[number, number]>([20, 80]);

    return (
      <main className="docs-canvas docs-canvas--md">
        <Card tone="elevated" className="docs-card">
          <Stack gap="lg">
            <FormSection
              title="Basic fields"
              description="Native-first form controls for the first usable layer."
            >
              <Grid columns={2} gap="md">
                <FormField>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input id="name" placeholder="Ada Lovelace" />
                  <FormMessage>Use your display name.</FormMessage>
                </FormField>

                <FormField>
                  <FormLabel htmlFor="skin">Skin</FormLabel>
                  <Select id="skin" options={options} placeholder="Choose a skin" />
                </FormField>

                <FormField>
                  <FormLabel htmlFor="autocomplete">Autocomplete</FormLabel>
                  <Autocomplete id="autocomplete" options={options} placeholder="Type a skin" />
                </FormField>

                <FormField invalid>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea id="message" placeholder="Tell us more" />
                  <FormMessage tone="danger">Message is required.</FormMessage>
                </FormField>
              </Grid>
            </FormSection>

            <FormSection title="Choices">
              <Stack gap="sm">
                <Checkbox label="Enable notifications" defaultChecked />
                <Radio name="density" label="Comfortable" defaultChecked />
                <Radio name="density" label="Compact" />
                <Switch label="Use system theme" defaultChecked />
              </Stack>
            </FormSection>

            <FormSection title="Pickers">
              <Grid columns={2} gap="md">
                <FormField>
                  <FormLabel>Date</FormLabel>
                  <DatePicker />
                </FormField>
                <FormField>
                  <FormLabel>Time</FormLabel>
                  <TimePicker />
                </FormField>
                <FormField>
                  <FormLabel>Date time</FormLabel>
                  <DateTimePicker />
                </FormField>
                <FormField>
                  <FormLabel>Color</FormLabel>
                  <ColorPicker defaultValue="#2563eb" />
                </FormField>
              </Grid>
            </FormSection>

            <FormSection title="Advanced inputs">
              <Stack gap="md">
                <FormField>
                  <FormLabel>Slider</FormLabel>
                  <Slider defaultValue={50} min={0} max={100} />
                </FormField>
                <FormField>
                  <FormLabel>Range slider: {range.join(" - ")}</FormLabel>
                  <RangeSlider value={range} onChange={setRange} />
                </FormField>
                <FormField>
                  <FormLabel>OTP</FormLabel>
                  <OtpInput value={otp} onChange={setOtp} />
                </FormField>
                <FormField>
                  <FormLabel>File upload</FormLabel>
                  <FileUpload />
                </FormField>
              </Stack>
            </FormSection>

            <Button>Submit</Button>
          </Stack>
        </Card>
      </main>
    );
  }
};
