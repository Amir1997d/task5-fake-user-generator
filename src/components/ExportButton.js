import React from 'react';
import Papa from 'papaparse';

const ExportButton = ({ users }) => {
  const handleExport = () => {
    const csv = Papa.unparse(users, { header: true });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users.csv';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button onClick={handleExport}>Export to CSV</button>
  );
};

export default ExportButton;