import React from "react"
import { marked } from "marked"
import ReactMarkdown from "react-markdown"

function App() {
  const [markdown, setMarkdown] = React.useState(`
  # Heading
  ## Subheading
  [myCode](https://gbn-goal-clone.netlify.app)

  \`code\`
  * item1
  * item2
  1. item3
  > This is a block quote

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

![alt text](image.jpg)

  **this is a bold text**
  `)

  marked.setOptions({
    breaks: true,
  })
  return (
    <main id='wrapper'>
      <textarea
        id='editor'
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <section
        id='preview'
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
      ></section>
    </main>
  )
}

export default App
