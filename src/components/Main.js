import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component{

  
  render() {

  return(
    <>
      <main>
        {
         this.props.beastData.map((beast, idx) => 
          (
            <HornedBeast 
              id={beast._id}
              title={beast.title}
              image_url={beast.image_url}
              description={beast.description}
              horns={beast.horns}
              keyword={beast.keyword}
              key={idx}
              handleOpenModal={() => this.props.handleOpenModal(beast)}
            />
          )
          )
        }
      </main>
    </>
  )
  };
};

export default Main;
