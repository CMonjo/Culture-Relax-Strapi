import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import styles from './style.css'

const Editor = ({ onChange, name, value }) => {
    
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
        ],
    }
    return (
        <ReactQuill
            theme="snow"
            value={value}
            modules={modules}
            onChange={(content, event, editor) => {
                onChange({ target: { name, value: content } });
            }}
        />
    );
};

export default Editor;