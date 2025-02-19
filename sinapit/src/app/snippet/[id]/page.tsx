import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const ReviweSnippet = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  let id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) return <h1> There are no snippt</h1>;
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <h1 className="text-white text-xl font-semibold">{snippet?.title}</h1>
        <div className="flex gap-5">
          <Link href={`${id}/edit`}>
         
            <Button size={"lg"}>Edit</Button>
          </Link>
          <Button variant={"destructive"} size={"lg"}>
            Delete
          </Button>
        </div>
      </div>
      <div className="bg-slate-700 p-5 rounded-md">
        <pre>
          <code className="text-white">{snippet.code}</code>
        </pre>
      </div>
    </div>
  );
};

export default ReviweSnippet;
