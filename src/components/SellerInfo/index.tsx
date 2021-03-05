import React from 'react';

import { Container } from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informaçoẽs sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon />
        <div>
          <p>Localização</p>
          <strong>Belo Horizonte,Belo Horizonte</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>561</strong>
            <span>vendas nos últimos 4 meses</span>
          </div>

          <div>
            <strong>
              <SupportIcon>
              </strong>
              <span>presta um bom atendimento</span>
          </div>

            <div>
              <strong>
                <ClockIcon />
              </strong>
              <span>vendas nos últimos 4 meses</span>
            </div>
        </ReputationRow>
      </ReputationCard>

        <More href="#">Ver mais informações do vendedor</More>
    </Container>
  );
};

export default SellerInfo;
