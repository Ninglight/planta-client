import React, { ReactNode, useState, useEffect } from 'react';
import { GetStaticProps } from 'next'
import { plantsMock } from '../mocks/mocks';
import { ListPlant } from '../views/components';
import { IPlant } from '../models';
import { Row, Col } from 'antd';
import getPlacements from 'antd/lib/tooltip/placements';

interface IIndexProps { 
  preview: boolean; 
  plants: IPlant[]; 
  children?: ReactNode;
}

const baseUrlAPI: string = "https://trefle.io/api/v1";



const Index: React.FC<IIndexProps> = ({ plants }) => {
  
  const [query, setQuery] = useState("Alocasia");
  const [renderedPlants, setrenderedPlants] = useState(plants);

  useEffect(() => {
    setPlantsFromSearch();
  }, [query]);

  const setPlantsFromSearch = async () => {
    setrenderedPlants(await getPlants(query));
  }  
  
  // TODO: Add Header
  // TODO: add container
  // TODO: add input search

  return (
    <>
      <header>
        <svg xmlns="http://www.w3.org/2000/svg" width="79" height="30"><g fill="none" fill-rule="evenodd"><path fill="#4D8A77" d="M16.188 19.51a9.76 9.76 0 01-6.765 2.703c-.444 0-.889-.03-1.329-.09a9.76 9.76 0 01-5.436-2.613A8.946 8.946 0 010 13.14c0-2.305.886-4.61 2.658-6.37L8.04.78a2.006 2.006 0 012.764 0l5.383 5.99a8.962 8.962 0 010 12.74"/><path fill="#70B493" d="M11.026 22.102v6.552c0 .743-.631 1.346-1.41 1.346-.78 0-1.411-.603-1.411-1.346v-6.552a10.856 10.856 0 002.821 0"/><path fill="#7AC4A0" d="M29.148 26.896H27V10.483h2.102v1.7h.069c.35-.582.864-1.06 1.542-1.436.678-.376 1.466-.563 2.365-.563.807 0 1.542.145 2.204.437a5.08 5.08 0 011.714 1.218c.48.521.85 1.13 1.108 1.827.26.698.389 1.445.389 2.242 0 .797-.13 1.548-.389 2.253A5.56 5.56 0 0137.007 20a5.065 5.065 0 01-1.713 1.23c-.67.298-1.424.448-2.262.448a4.904 4.904 0 01-2.194-.506 3.977 3.977 0 01-1.622-1.425h-.068v7.149zm7.128-10.988a4.79 4.79 0 00-.228-1.471 3.76 3.76 0 00-.686-1.265 3.284 3.284 0 00-1.13-.873c-.45-.215-.972-.322-1.566-.322a3.429 3.429 0 00-2.65 1.195c-.32.368-.567.79-.743 1.265a4.285 4.285 0 00-.262 1.494c0 .52.087 1.019.262 1.494.176.475.423.893.743 1.253.32.36.704.647 1.154.862.45.214.948.322 1.496.322.594 0 1.116-.111 1.565-.334a3.41 3.41 0 001.131-.885 3.76 3.76 0 00.686-1.264 4.79 4.79 0 00.228-1.471zm7.403 5.47h-2.148V4h2.148v17.379zm10.487-7.056c0-.813-.243-1.414-.73-1.805-.488-.39-1.136-.586-1.943-.586-.61 0-1.184.119-1.725.356-.54.238-.994.54-1.36.908l-1.142-1.38c.533-.505 1.184-.903 1.954-1.194a6.944 6.944 0 012.479-.437c.777 0 1.45.11 2.022.333.57.222 1.04.525 1.405.908s.64.835.822 1.356c.183.521.275 1.08.275 1.679v4.758c0 .368.011.755.034 1.16.023.407.065.74.126 1H54.44a6.844 6.844 0 01-.182-1.562h-.069a4.168 4.168 0 01-1.496 1.356c-.602.322-1.314.483-2.137.483-.426 0-.872-.058-1.336-.173a3.872 3.872 0 01-1.268-.563 3.173 3.173 0 01-.949-1.034c-.25-.43-.377-.958-.377-1.586 0-.828.221-1.483.663-1.966.442-.483 1.02-.85 1.736-1.103s1.524-.418 2.422-.495a31.99 31.99 0 012.72-.115v-.298zm-.525 1.862c-.533 0-1.086.023-1.657.069a7.61 7.61 0 00-1.553.275c-.465.138-.85.345-1.154.621-.305.276-.457.644-.457 1.104 0 .321.065.59.194.804.13.215.3.39.514.529.213.138.45.234.708.287.26.054.526.08.8.08 1.005 0 1.778-.302 2.32-.907.54-.606.81-1.368.81-2.288v-.574h-.525zm8.11-5.701c.031.275.054.586.07.93.015.345.022.633.022.863h.069c.137-.292.323-.564.56-.816a3.986 3.986 0 011.816-1.115c.366-.108.746-.161 1.142-.161.701 0 1.303.119 1.805.356.503.238.922.556 1.257.954.335.399.583.866.743 1.402.16.537.24 1.111.24 1.724v6.759h-2.148v-6.046c0-.444-.035-.866-.103-1.264a3.056 3.056 0 00-.377-1.058 2.05 2.05 0 00-.754-.735c-.32-.184-.731-.276-1.234-.276-.853 0-1.55.325-2.09.977-.541.651-.812 1.52-.812 2.609v5.793H59.81v-8.552c0-.29-.008-.666-.023-1.126a23.28 23.28 0 00-.069-1.218h2.034zm16.657 1.77h-2.879v5.678c0 .659.122 1.13.366 1.413.243.284.632.426 1.165.426.198 0 .411-.023.64-.07.228-.045.434-.114.617-.206l.068 1.77a5.184 5.184 0 01-.857.218c-.312.054-.636.08-.97.08-1.021 0-1.802-.283-2.343-.85-.54-.567-.81-1.417-.81-2.551v-5.908h-2.08v-1.77h2.08V7.356h2.124v3.127h2.879v1.77z"/></g></svg>

      </header>

      <div className="app-menu">
          
        
      </div>

      <Row justify="center">
          <Col span={18}>
              <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
            
              <ListPlant plants={renderedPlants} />
          </Col>
      </Row>
    </>
  )
}

export default Index;


const transformPlant = (data: any): IPlant => {
  return {
    name: data.scientific_name,
    thumbnail: data.image_url
  }
}




export const getStaticProps: GetStaticProps = async (context) => {
  
  const plants = await getPlants();
  

  /*if (!!data.error) {
    return {
      notFound: true,
      props: {
        error: data.error
      }
    }
  }*/

  return {
    props: {
      plants: plants
    }
  }
}


// TODO: create facade services
const getPlants = async (query?: string): Promise<Array<IPlant>> => {

  const token: string = "ZYqjsu4S9Wll9QgAvULzpcE4wyOqfHpzZ5BRsJ1rzuw";
  let url: string = `${baseUrlAPI}/plants?token=${token}&page=1`;
  if(query) {
    url = `${baseUrlAPI}/species/search?token=${token}&q=${query}&limit=30`;
  }
  const res: Response = await fetch(url);
  const data = await res.json();

  return (data.data || []).map((plant) => transformPlant(plant));
}