import React from 'react';
import ReactDOM from 'react-dom';
import ImageCard from './ImageCard';
import './ImageList.css'

class ImageList extends React.Component{
    render(){
       const images = this.props.images.map((imageVal)=>{
           return <ImageCard key={imageVal.id} image={imageVal}></ImageCard>
        })
        return (<div className="image-list">
                {images}
            </div>
            );
    }
}

export default ImageList;