import React from 'react';

const FileOpener = ({ closeWindow, FileData }) => {


  return (
    <div className='container'>
      <div className="d-flex justify-content-between">
        <h2 className='text-dark'>File Downloading</h2>
        <button className='btn-close' onClick={closeWindow}></button>
      </div>

      <div className="div">
        <iframe
         
          src={`${FileData?.file}`}
          width="100%"
          title='fileOpen'
          height="100%"
         
        ></iframe>
      </div>
    </div>
  );
};

export default FileOpener;
