import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { SiGatsby } from 'react-icons/si';
import { FooterBlock, LinkBlock } from './styles';

const Footer = () => (
  <FooterBlock>
    <LinkBlock>
      <a href="https://github.com/billowycloud" target="_blank" rel="noreferrer noopener">
        <AiFillGithub size={40} />
      </a>
      <a href="https://spicycookie.me" target="_blank" rel="noreferrer noopener">
        <SiGatsby size={36} />
      </a>
    </LinkBlock>
    <p>
      Copyright © {new Date().getFullYear()} <span>BillowyCloud</span>
    </p>
  </FooterBlock>
);

export default Footer;
