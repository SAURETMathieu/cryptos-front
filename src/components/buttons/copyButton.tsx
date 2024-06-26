"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Copy } from "lucide-react";

interface CopyButtonProps {
  toCopy: string;
}

export default function CopyButton({ toCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(toCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };
  if (copied) {
    return <span className="size-6 text-green-500">Copied!</span>;
  }
  return (
    <Button
      size="icon"
      variant="outline"
      className="size-6"
      onClick={copyToClipboard}
    >
      <Copy className="size-3" />
      <span className="sr-only">Copy Order ID</span>
    </Button>
  );
}
