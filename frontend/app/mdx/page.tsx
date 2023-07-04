'use client'
import React, {useState} from 'react';
import Editor from "@/app/mdx/editor";
import Preview from "@/app/mdx/preview";
// import markdownit from 'markdown-it';
import markdownit from '@wcj/markdown-to-html';


export const Myapp = () => {
    const [markdown, setMarkdown] = useState('');

    const Html = markdownit(markdown);

    return (
        <div className={'grid grid-cols-2 gap-4'}>
            <div>
                <Editor markdown={markdown} setMarkdown={setMarkdown}/>
            </div>
            {/*scroll x */}
            <div className={'max-h-screen overflow-x-scroll'}>
                <article className="prose lg:prose-xl">
                    <div dangerouslySetInnerHTML={{__html: Html}}/>
                </article>
            </div>
        </div>
    );
}
export default Myapp;
