import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';

class HornedBeast extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
  }
  
  handleLike = () => {
    // increment likes by one onClick of 'Like' button
    this.setState({
      likes: this.state.likes + 1
    });
  }

  render() {
    return (
      <>
        <Card>
          <Card.Body>
              <Card.Header as="h2"
                id={this.props._id} 
                keyword={this.props.keyword}
              >
                {this.props.title}
              </Card.Header>
              <div className='imgCardText'>
                <img 
                  className='animalMainImg'
                  src={this.props.image_url} 
                  title={this.props.title} 
                  alt={this.props.description}
                  onClick={(this.props.handleOpenModal)}
                >
                </img>
                <Card.Text>
                  {this.props.description}
                </Card.Text>
              </div>
              <div className='likesWrapper'>
                <Button className='likeButton' onClick={(this.handleLike)} variant="success">Like</Button>
                <Card.Text id='likesCount'>❤️ {this.state.likes}</Card.Text>
              </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;
