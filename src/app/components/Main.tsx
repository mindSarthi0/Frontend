"use client"; // This allows client-side code such as useState

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className={`flex flex-col justify-center pt-[68px] pl-4 pr-4`}>
      {children}
    </main>
  );
};

export default Main;
