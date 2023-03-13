import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

const Footer: React.FC = () => {
  return (
    <footer className=" z-10 max-w-screen-lg py-8 text-center text-sm text-white">
      © Copyright {new Date().getFullYear()} {AppConfig.title}. Made
      <a href="#">leadistro</a>.
    </footer>
  );
};

export default Footer;
