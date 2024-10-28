import React from 'react'
import { CodeBlock } from './code-block'

export default function Usage() {
  return (
    <div>
      <h2>Usage</h2>
      <p>Render the toaster in the root of your app.</p>
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
  )
}
