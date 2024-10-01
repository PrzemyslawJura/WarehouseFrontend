"use client";

import { Button, Label, TextInput } from "flowbite-react";

export function LoginForm() {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label className="font-bold" htmlFor="uid" value="Your UID" />
        </div>
        <TextInput id="uid" type="text" placeholder="0b509b8c-ca0a-4b4f-b628-6ae2fbd2f384" required />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
