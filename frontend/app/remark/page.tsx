'use client'
import React, {useState} from 'react';
import Editor from "@/app/mdx/editor";

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Myapp = () => {
    const [markdown, setMarkdown] = useState('');


    return (
        <div className={'grid grid-cols-2 gap-4'}>
            <div>
                <Editor markdown={markdown} setMarkdown={setMarkdown}/>
            </div>
            {/*scroll x */}
            <ReactMarkdown components={CodeBlock} children={markdown} />;
        </div>
    );
}
export default Myapp;



const CodeBlock = {
    code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <SyntaxHighlighter style={solarizedlight} language={match[1]} PreTag="div" {...props}>
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        );
    },
};
