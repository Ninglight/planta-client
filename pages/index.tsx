import React, { ReactNode } from 'react';
import { GetStaticProps } from 'next'
import { plantsMock } from '../mocks/mocks';
import { ListPlant } from '../views/components';
import { IPlant } from '../models';
import { Row, Col } from 'antd';

interface IIndexProps { 
  preview: boolean; 
  plants: IPlant[]; 
  children?: ReactNode;
}

const Index: React.FC<IIndexProps> = ({ plants }) => {
    console.log(plants)
//   const heroPost = allPlants[0].node
//   const morePlants = allPlants.slice(1)
  return (
    <>
        <h1>🌱 Bienvenue</h1>
        <Row justify="center">
            <Col span={24}>
                <h1>Recherchez vos plantes</h1>
                <ListPlant plants={plants} />
            </Col>
        </Row>
    </>
  )
}

export default Index;


export const getStaticProps: GetStaticProps = async () => {
  //const plants = await getAllPlantsForHome(context.previewData)
  return {
    props: { 
      plants: plantsMock
    },
  }
}