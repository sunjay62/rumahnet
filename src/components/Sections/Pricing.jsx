import React from 'react';
import styled from 'styled-components';
// Components
import PricingTable from '../Elements/PricingTable';

export default function Pricing() {
  const handleGetStartedClick = () => {
    window.open('https://www.instagram.com/rumahnet/', '_blank');
  };

  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Paket Langganan Kami</h1>
            <p className="font13">Kami memiliki harga paket internet yang terjangkau dan speed yang tinggi dan stabil.</p>
          </HeaderInfo>
          <TablesWrapper>
            <TableBox>
              <PricingTable
                icon="browser"
                price="Rp.180.000/bulan"
                title="100Mbps"
                text="100% Fiber Optic tanpa batasan kuota."
                offers={[
                  { name: 'Gratis Pemasangan', cheked: true },
                  { name: '100% Fiber Optic', cheked: true },
                  { name: 'Tanpa FUP', cheked: true },
                  { name: 'Modem Dipinjamkan', cheked: true },
                ]}
                action={handleGetStartedClick}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeaderInfo = styled.div`
  margin-bottom: 50px;
  text-align: center; /* Center text content */
`;

const TablesWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TableBox = styled.div`
  width: 100%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }
`;
