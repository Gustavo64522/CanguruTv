import React from 'react';
import { FooterBase } from './styles';
import LogoCangurus from '../../assets/img/LogoCangurus.png'
import FooteNav from './FooteNav.css'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="LogoCGR" src={LogoCangurus} alt="Logo CGR" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
