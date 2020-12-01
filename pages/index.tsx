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

    // TODO: Add Header
    // TODO: add container
    // TODO: add input search

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


const transformPlant = (data: any): IPlant => {
  return {
    name: data.common_name,
    thumbnail: data.image_url
  }
}

export const getStaticProps = async (context) => {
  // TODO: create facade services
  const token: string = process.env.TREFLE_API_TOKEN;
  const url: string = `https://trefle.io/api/v1/plants?token=${token}&page=1`;
  const res: Response = await fetch(url);
  const data = await res.json()

  const plants: Array<IPlant> = data.data.map((plant) => transformPlant(plant));

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      plants: plants
    }
  }
}