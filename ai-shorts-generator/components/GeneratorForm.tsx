"use client";

import { useState } from "react";

export default function GeneratorForm({ onResult }: any) {

  const [niche,setNiche] = useState("");

  async function generate() {

    const res = await fetch("/api/generate-scripts",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({ niche })
    });

    const data = await res.json();

    onResult(data.scripts);

  }

  return (

    <div className="p-6 border rounded-xl">

      <input
        placeholder="contoh: fakta tubuh manusia"
        className="border p-2 w-full"
        onChange={(e)=>setNiche(e.target.value)}
      />

      <button
        onClick={generate}
        className="mt-4 bg-black text-white px-4 py-2"
      >
        Generate 100 Scripts
      </button>

    </div>

  );

}
