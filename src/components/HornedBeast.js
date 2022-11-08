import React from 'react';
import './HornedBeast.css';

class HornedBeast extends React.Component{
  render() {
    return (
      <>
        <article>
          <div class="hornedBeastWrapper">
            <h2
              key={this.props.id} 
              keyword={this.props.keyword}
            >
              {this.props.title}
            </h2>
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
