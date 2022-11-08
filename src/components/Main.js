import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data.json';

class Main extends React.Component{
  render() {
    let beastArr = [];
    data.forEach((beast, idx) => {
      beastArr.push(
        <HornedBeast 
        id={beast._id}
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        horns={beast.horns}
        keyword={beast.keyword}
        key={idx}
      />
      )
    });
    
    return (
      <>
        <main>
          {beastArr}
        </main>
      </>
    );
  }
}

export default Main;
