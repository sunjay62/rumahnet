import React from 'react';
import styled from 'styled-components';
// Components
import BlogBox from '../Elements/BlogBox';
import ProjectImg1 from '../../assets/img/projects/assetrmn9.png';
import ProjectImg2 from '../../assets/img/projects/assetrmn10.png';
import ProjectImg3 from '../../assets/img/projects/assetrmn11.png';
import ProjectImg4 from '../../assets/img/projects/assetrmn6.png';
import ProjectImg5 from '../../assets/img/projects/assetrmn7.png';
import ProjectImg6 from '../../assets/img/projects/assetrmn8.png';
import ProjectBox from '../Elements/ProjectBox';

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Blog Stories</h1>
          </HeaderInfo>
          <div className="row textCenter" style={{ justifyContent: 'center' }}>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={ProjectImg4} title="Did You Know" />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={ProjectImg5} title="Did You Know" />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={ProjectImg1} title="Lubang Buaya RW10" />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={ProjectImg2} title="Lubang Buaya RW07" />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={ProjectImg3} title="Lubang Buaya RW05" />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={ProjectImg6} title="Lubang Buaya RW11" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
