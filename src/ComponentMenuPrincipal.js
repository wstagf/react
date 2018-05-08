import React from 'react';
import {  NavItem, Nav } from 'react-bootstrap';

const listaMenus = [ 
    {ID: 1, label: 'O que é Lorem Ipsum?',  url: 'oquee'},
    {ID: 2, label: 'De onde ele vem?',  url: 'deondevem'}, 
    {ID: 3, label: 'Porque nós o usamos?',  url: 'porqueusamos'},
    {ID: 4, label: 'Onde posso conseguí-lo?',  url: 'ondeconseguilo'}];

const ComponentMenuPrincipal = (props) => {
  return (
    <Nav>
      {listaMenus.map(i => {
        return <NavItem eventKey={i.ID} key={i.ID} href={"#" + i.url}>
              {i.label}
            </NavItem>
      })}
    </Nav>
  )
}

export default ComponentMenuPrincipal