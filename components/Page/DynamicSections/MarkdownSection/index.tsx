import { MarkdownSectionType } from "lib/types"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export const MarkdownSection = ({ sectionId, language, codeSnippet } : MarkdownSectionType) => {
  return (
    <div id={sectionId}>
      <SyntaxHighlighter
        language={language}
        style={dracula}
        showLineNumbers
      >
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  )
}