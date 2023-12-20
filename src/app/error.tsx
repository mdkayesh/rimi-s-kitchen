"use client";

import { useEffect } from "react";
import Button from "./_conponents/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-center text-3xl">Something went wrong!</h2>

      <Button
        tag="button"
        type="button"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
        btnClass="mt-4"
      >
        Try Again
      </Button>
    </main>
  );
}
