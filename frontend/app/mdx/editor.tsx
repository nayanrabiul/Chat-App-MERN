
const Editor = ({markdown, setMarkdown}) => {

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className={'m-4'}>
            <h1>Markdown Editor</h1>
            <textarea className={'w-full h-screen p-3'} value={markdown} onChange={handleMarkdownChange}/>

        </div>
    );
};

export default Editor;
