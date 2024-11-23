import { useState } from "react";
import MarkdownIt from "markdown-it";
import "github-markdown-css/github-markdown.css"; // Optional: GitHub Markdown CSS for styling

export default function MarkdownPreview() {
  const defaultMarkdown = `
# Header (H1)
## Subheader (H2)
[Link to FreeCodeCamp](https://www.freecodecamp.org)

Inline code: \`<div></div>\`

\`\`\`javascript
// Code Block
function greet() {
  console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![FreeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

**Bold text**

<h1>This is raw HTML</h1>
`;

  // Initialize MarkdownIt with options
  const md = new MarkdownIt({
    breaks: true, // Line breaks
    html: true, // Enable raw HTML in Markdown
  });

  const [input, setInput] = useState(defaultMarkdown);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="bg-slate-600 text-white">
      <h1 className="text-3xl font-bold mb-3">Markdown Previewer</h1>
      <div className="bg-blue-500 text-white text-center p-5 lg:flex justify-center align-middle gap-3">
        {/* Markdown Input */}
        <div className="grid col-md-6 shadow-sm h-[60vh] lg:w-[40%] w-full bg-slate-500 pt-6 px-1 pb-1 md:mb-3">
          <div className="shadow-sm h-full w-full bg-yellow-100 p-2">
            <textarea
              id="editor"
              className="h-full w-full text-blue-700 p-3"
              value={input}
              onChange={handleInputChange}
              placeholder="Input Markdown here..."
            ></textarea>
          </div>
        </div>
        {/* Markdown Preview */}
        <div className="col-lg-6 shadow-sm h-[60vh] lg:w-[40%] w-full bg-slate-500 pt-6 px-1 pb-1 overflow-auto">
          <div className="shadow-sm h-full w-full bg-yellow-100">
            <div
              className="markdown-body h-full w-full p-3"
              style={{ height: "auto" }}
              id="preview"
              dangerouslySetInnerHTML={{ __html: md.render(input) }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
