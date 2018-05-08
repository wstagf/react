import React, { Component } from 'react';
import './App.css';
import './css/scrolling-nav.css';
import './css/style.css';

import {  Navbar, Nav, NavItem, Grid,
       Row, Col } from 'react-bootstrap';

import ComponentLogin from './ComponentLogin';
import ComponentMenuPrincipal from './ComponentMenuPrincipal';

class App extends Component {

  render() {
    return (
    <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"  />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"  />
      <div id="" >

        <Navbar fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">React Ipsum</a>
              </Navbar.Brand>
            </Navbar.Header>
            <ComponentMenuPrincipal/>
            <Nav pullRight>
              <NavItem eventKey={5}>
                <ComponentLogin />
              </NavItem>
            </Nav>
        </Navbar>

        <Grid fluid>
          <Row className="bg-primary section" id="oquee">
            <Col xs={3} md={2}>

            </Col>
            <Col xs={6} md={8}>
              <h2>O que é Lorem Ipsum?</h2>
              <p className="lead">
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
              </p>              
            </Col>
            <Col xs={3} md={2}>
            </Col>
          </Row>
          <Row className="show-grid section" id="deondevem">
            <Col xs={3} md={2}>
              </Col>
              <Col xs={6} md={8}>
                <h2>De onde ele vem?</h2>
                <p className="lead">
                Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32. <br/>O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para os interessados. Seções 1.10.32 e 1.10.33 de "de Finibus Bonorum et Malorum" de Cicero também foram reproduzidas abaixo em sua forma exata original, acompanhada das versões para o inglês da tradução feita por H. Rackham em 1914.
                </p>              
              </Col>
              <Col xs={3} md={2}>
              </Col>
          </Row>
          <Row className="show-grid section" id="porqueusamos">
            <Col xs={3} md={2}>
              </Col>
              <Col xs={6} md={8}>
                <h2>Porque nós o usamos?</h2>
                <p className="lead">
                É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero).        
                </p>              
              </Col>
              <Col xs={3} md={2}>
              </Col>
          </Row>
          <Row className="show-grid section" id="ondeconseguilo">
            <Col xs={3} md={4}>
              </Col>
              <Col xs={6} md={4}>
                <h2>Onde posso conseguí-lo?</h2>
                <p className="lead">
                Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes. Se você pretende usar uma passagem de Lorem Ipsum, precisa ter certeza de que não há algo embaraçoso escrito escondido no meio do texto. Todos os geradores de Lorem Ipsum na internet tendem a repetir pedaços predefinidos conforme necessário, fazendo deste o primeiro gerador de Lorem Ipsum autêntico da internet. Ele usa um dicionário com mais de 200 palavras em Latim combinado com um punhado de modelos de estrutura de frases para gerar um Lorem Ipsum com aparência razoável, livre de repetições, inserções de humor, palavras não características, etc.
                </p>
              </Col>
              <Col xs={3} md={4}>
              </Col>
          </Row>
        </Grid>
        <Navbar fixedBottom className="rodapeCreditos">
          <p>Criado por Thiago Augusto <a href="http://www.aguiarobo.com" target="_blank" rel="noopener noreferrer">Aguiarobo</a> </p>
        </Navbar>
      </div>
    </div>
    );
  }
}

export default App;
