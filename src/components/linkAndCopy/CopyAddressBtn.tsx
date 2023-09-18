import { ClipboardDocumentIcon } from '@heroicons/react/20/solid';
import { FC, useCallback } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';

import { cutOut } from '../../utils';

type Prop = {
  addr?: string | null;
};
const CopyAddressBtn: FC<Prop> = ({ addr }) => {
  const showAddr = addr || '';

  const onCopy = useCallback(() => {
    if (showAddr == undefined) {
      return;
    }
    toast(`Copy ${cutOut(showAddr, 4, 4)} successful`);
  }, [showAddr]);
  return (
    <CopyToClipboard text={showAddr} onCopy={() => onCopy()}>
      <button
        type='button'
        className='mr-2  inline-flex
items-center rounded-lg bg-gray-200 p-1.5 text-center 
text-sm font-medium text-blue-700   hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300'
      >
        <ClipboardDocumentIcon
          data-tooltip-id='tooltip'
          data-tooltip-content='Copy to clipboard'
          className=' h-4 w-4 cursor-pointer '
        ></ClipboardDocumentIcon>
      </button>
    </CopyToClipboard>
  );
};

export default CopyAddressBtn;
