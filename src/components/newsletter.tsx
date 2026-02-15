"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

const Newsletter = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const submitEmail = async () => {
    try {
      setLoading(true);
      if (!email) return;

      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
      });

      const json = await response.json();

      if (json.success) {
        toast.success("Subscribed to newsletter successfully!!");
        setEmail("");
      } else {
        toast.error(json.error);
      }
    } catch (error: unknown) {
      toast.error(
        error instanceof Error ? error.message : "Internal server error",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-transparent flex items-center justify-center flex-col sm:flex-row gap-2">
      <Input
        placeholder="email@domain.com"
        onChange={(e) => setEmail(e.target.value)}
        className="
    border border-border
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-primary
    focus-visible:ring-offset-2
    focus-visible:ring-offset-background
  "
      />
      <Button
        onClick={submitEmail}
        disabled={loading}
        className="cursor-pointer text-white w-full sm:w-fit flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Submitting
          </>
        ) : (
          <>
            <Send size={16} /> Submit
          </>
        )}
      </Button>
    </div>
  );
};

export default Newsletter;
