import React from "react";
import { CodeBlock } from "../code-block";

export default function Usage() {
  return (
    <div className="mt-16 flex flex-col">
      <h1 className="text-lg font-medium">Usage</h1>
      <CodeBlock initialHeight={270}>{`import { Toaster, toast } from 'sonner'

// ...

function App() {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast('My first toast')}>
        Give me a toast
      </button>
    </div>
  )
}`}</CodeBlock>
    </div>
  );
}
