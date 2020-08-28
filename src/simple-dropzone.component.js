// components/simple-dropzone.component.js
import React from "react";

import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import './App.css';

const SimpleDropZone = () => {

    // Payload data and url to upload files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

    // Return the current status of files being uploaded
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    // Return array of uploaded files after submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }
    // const Preview = ({ meta }) => {
    //     const { name, percent, status } = meta
    //     return (
    //       <span style={{ alignSelf: 'flex-start', margin: '10px 3%', fontFamily: 'Helvetica' }}>
    //         {name}, {Math.round(percent)}%, {status}
    //       </span>
    //     )
    //   }

    return (
        <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        //PreviewComponent={Preview}
        //maxFiles={3}
        // inputContent="Drop 3 Files"
        // inputWithFilesContent={files => `${3 - files.length} more`}
        // submitButtonDisabled={files => files.length < 3}
        accept="*"
        
        inputContent={(files, extra) => (extra.reject ? 'Only Image, audio and video files allowed!' : 'Select or Drop Files')}
        styles={{
            dropzoneReject: { borderColor: '#F19373', backgroundColor: '#F1BDAB' },
            inputLabel: (files, extra) => (extra.reject ? { color: '#A02800' } : {}),
        }}
/>
    );
};

export default SimpleDropZone;