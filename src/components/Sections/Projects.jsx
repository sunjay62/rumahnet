import React from 'react';
import styled from 'styled-components';
// Components
import ProjectBox from '../Elements/ProjectBox';
import FullButton from '../Buttons/FullButton';
// Assets
import ProjectImg1 from '../../assets/img/projects/layanan24.jpg';
import ProjectImg2 from '../../assets/img/projects/speed.jpg';
import AddImage2 from '../../assets/img/add/assetrmn5.png';

export default function Projects() {
  const handleGetStartedClick = () => {
    window.open('https://www.instagram.com/rumahnet/', '_blank');
  };

  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Service</h1>
          </HeaderInfo>
          <div className="row textCenter" style={{ justifyContent: 'center' }}>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={ProjectImg1} title="Layanan 24/7" text="Rumahnet menggunakan teknologi terbaru dan terbaik dikelasnya." />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={ProjectImg2} title="Tanpa Batas Kuota" text="Rumahnet memiliki jaringan internet dengan bandwidth hingga 100 Mbps." />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: '50px 0', width: '200px' }}>{/* <FullButton title="Load More" action={() => alert('clicked')} /> */}</div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">Wilayah yang sudah tercover saat ini</h4>
              <h2 className="font40 extraBold">JAKARTA TIMUR</h2>
              <p className="font12">Di samping adalah daftar wilayah yang sudah tercover dengan Rumahnet untuk Jakarta Timur.</p>
              <ButtonsRow className="flexNullCenter" style={{ margin: '30px 0' }}>
                <div style={{ width: '190px' }}>
                  <FullButton title="Get Started" action={handleGetStartedClick} />
                </div>
                <div style={{ width: '190px', marginLeft: '15px' }}>
                  <FullButton title="Contact Us" action={handleGetStartedClick} border />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  text-align: center;

  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
