import React from 'react';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';

class HornedBeast extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      clicks: 0
    };
  }
  
  handleLike = () => {
    // increment likes by one onClick of 'Like' button
    this.setState({
      likes: this.state.likes + 1
    });
  }

  handleClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

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
          <div className='hornedBeastWrapper'>
            <img 
              className='animalMainImg'
              src={this.props.image_url} 
              title={this.props.title} 
              alt={this.props.description}
              onClick={(this.handleClick)}
            ></img>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='likesContainer'>
            <Button className='likeButton' onClick={(this.handleLike)} variant="success">Like</Button>
            <div className='beastLikeCountWrapper'>
              <p id='likesCount'>Likes: {this.state.likes}</p>
            </div>
          </div>
        </article>
      </>
    );
  }
}

export default HornedBeast;
