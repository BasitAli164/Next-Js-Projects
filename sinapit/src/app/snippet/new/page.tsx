import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { Label } from "@radix-ui/react-label";
import { redirect } from "next/navigation";
import React from "react";

const CreateSnippet = () => {
    const createSnippet=async(formData:FormData)=>{
        "use server" //use server directive
        const title=formData.get("title") as string;
        const code=formData.get("code") as string;
        
       const sinapit= await prisma.snippet.create({
          data:{
            title,
            code
          }
        })
        console.log(sinapit)
        redirect('/')
    }
  return (
    <form action={createSnippet} className="flex  flex-col gap-3">
      <div>
        <Label className="font-semibold text-xl text-white">Title:</Label>
        <Input type="text" name="title" id="title" className="text-white" />
      </div>
      <div>
        <Label className="font-semibold text-xl text-white">Code:</Label>
        <Textarea name="code" id="code" className="text-white" />
      </div>
      <div className="mt-5">
        <Button type="submit" size={"lg"}>New</Button>
      </div>
    </form>
  );
};

export default CreateSnippet;
