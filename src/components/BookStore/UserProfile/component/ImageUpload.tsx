import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface IProps {
    name: string;
    ovsdlkgfs: (img: File) => void;
}

const MyDropzone: React.FC<IProps> = ({ name, ovsdlkgfs }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      ovsdlkgfs(file);
    });
  }, [ovsdlkgfs]);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="drop-box" {...getRootProps()}>
      <input {...getInputProps()} name={name} />
    </div>
  );
};

export default MyDropzone;
