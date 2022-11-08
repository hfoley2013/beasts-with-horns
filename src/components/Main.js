import React from 'react';
import HornedBeast from './components/HornedBeast';
import data from './data.json';

class Main extends React.Component{
  render() {
    let beastArr = [];
    data.forEach((beast) => {
      beastArr.push(
        <HornedBeast 
        key={beast._id}
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        horns={beast.horns}
        keyword={beast.keyword}
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
