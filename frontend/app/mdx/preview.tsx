import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';

const Preview = ({markdown}) => {

    return (
        <div>
            <h1>Markdown Preview</h1>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default Preview;
