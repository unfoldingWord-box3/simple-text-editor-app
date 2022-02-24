import React from 'react';
import PropTypes from 'prop-types';

import fileDownload from 'js-file-download';

export default function ExportFile({ file }) {
  const disabled = (!file.name || !file.content);

  const FileExport = () => {
    fileDownload(file.content, file.name);
  };

  return (
    <button type="button" className="btnAll btnMiddle" disabled={disabled} onClick={FileExport}>Export</button>
  );
}

ExportFile.propTypes = {
  /** Preload file content if need to file open bypass */
  file: PropTypes.object,
};

ExportFile.defaultProps = {
  file: '',
};
