import React from 'react';
import { useBarcode } from 'react-barcodes';

const Barcode = (props) => {
  const { barcodeValue } = props;
  const { inputRef } = useBarcode({
    value: `${barcodeValue}`,
    options: {
      displayValue: false,
      marginTop: 20,
    },
  });

  return <svg ref={inputRef} />;
};

export default Barcode;
