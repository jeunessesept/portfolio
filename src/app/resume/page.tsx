"use client";

import React from "react";


export default function ResumePage() {
  return (
    <main>
       <div className="flex justify-center items-center h-screen">
      <iframe
        src="/images/myresume.pdf"
        width="100%" 
        height="100%" 
        style={{ border: 'none' }}
      ></iframe>
    </div>
    </main>
  );
}

