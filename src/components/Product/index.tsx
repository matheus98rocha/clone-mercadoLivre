import { info } from 'console';
import React from 'react';

import tshirtImage from '../../assets/tshirt.png';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';


const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          {/* // eslint-disable-next-line to the line before */}
          <Info />
        </Column>

        <Column>
          {/* <ProductAction />
          <SellerInfo /> */}
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>

      </Panel>

    </Container>
  );
};

const Info = () => {
  return (
    <Description>
      <h2>Descrição</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis libero voluptate consectetur sint cupiditate? Ducimus voluptatem asperiores deserunt minima labore quos iusto, tempore, cum maiores perferendis assumenda rerum ad.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis libero voluptate consectetur sint cupiditate? Ducimus voluptatem asperiores deserunt minima labore quos iusto, tempore, cum maiores perferendis assumenda rerum ad.      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis libero voluptate consectetur sint cupiditate? Ducimus voluptatem asperiores deserunt minima labore quos iusto, tempore, cum maiores perferendis assumenda rerum ad.      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis libero voluptate consectetur sint cupiditate? Ducimus voluptatem asperiores deserunt minima labore quos iusto, tempore, cum maiores perferendis assumenda rerum ad.
      <br />
        <br />
      Itens inclusos: <br />
      -1x LED <br />
      -1x LED <br />
      -1x LED <br />
      -1x LED <br />
      -1x LED <br />
      -1x LED <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis libero voluptate consectetur sint cupiditate? Ducimus voluptatem asperiores deserunt minima labore quos iusto, tempore, cum maiores perferendis assumenda rerum ad.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis libero voluptate consectetur sint cupiditate? Ducimus voluptatem asperiores deserunt minima labore quos iusto, tempore, cum maiores perferendis assumenda rerum ad.      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis libero voluptate consectetur sint cupiditate? Ducimus voluptatem asperiores deserunt minima labore quos iusto, tempore, cum maiores perferendis assumenda rerum ad.      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapie
    </p>

    </Description>
  )
}


const WarrantySection = () => {
  return (
    <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">Compra garantida com o Lorem Ipsum</p>
          <p className="descriptiom">Receba o produto que deseja ou devolvemos o seu dinheiro</p>
        </span>

        <span>
          <p className="title">Garantia do vendedor</p>
          <p className="descriptiom">Sem garantia</p>
        </span>
      </div>

      <a href="#">Saiba mais sobre garantia</a>
    </Section>
  )
}

export default Product;
