"use client";

import { useState } from "react";
import GeneratorForm from "../components/GeneratorForm";
import ScriptList from "../components/ScriptList";

export default function Page(){

  const [scripts,setScripts] = useState("");

  return (
    <main className="max-w-4xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-6">
        AI Shorts Generator
      </h1>

      <GeneratorForm onResult={setScripts} />

      <ScriptList scripts={scripts} />

    </main>
  );

}
