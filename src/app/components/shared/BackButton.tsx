import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-gray-600 hover:text-indigo-600 transition-colors p-1 rounded-full hover:bg-gray-100"
      aria-label="Go back"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
  );
};
