import React from 'react';

export default function ContactFormErr({children}) {
  return <small className="absolute left-0 text-xs text-white bg-red-500 rounded-sm -top-2">{children}</small>;
}
