import React from 'react';
import './HornedBeast.css';

class HornedBeast extends React.Component{
  render() {
    return (
      <>
        <article>
            <h2
              id={this.props._id} 
              keyword={this.props.keyword}
            >
              {this.props.title}
            </h2>
          <div class="hornedBeastWrapper">
            <img 
              src={this.props.image_url} 
              title={this.props.title} 
              alt={this.props.description}
            ></img>
            <p>
              {this.props.description}
            </p>
          </div>
        </article>
      </>
    );
  }
}

export default HornedBeast;
