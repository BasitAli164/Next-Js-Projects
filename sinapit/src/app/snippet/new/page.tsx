import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import React from "react";

const CreateSnippet = () => {
  return (
    <div className="flex  flex-col gap-3">
      <Label className="font-semibold text-xl">Title:</Label>
      <Input type="text" name="title" id="title"/>
      <Label className="font-semibold text-xl">Code:</Label>

      <Textarea name="code" id="code" />
      <div className="mt-10">
        <Button size={"lg"}>New</Button>
      </div>
    </div>
  );
};

export default CreateSnippet;
