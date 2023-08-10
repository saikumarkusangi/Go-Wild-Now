import React from 'react'
import Header from '../Layout/Header'
import images from '../../constants/images'

function Blog1() {
  return (
    <div>
      <Header/>
      <img src={images.Blog1}alt='Blog'/>
      <h1>Wonderful Time With Friends</h1>
      <p>Fames aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. 

      <span className='font-bold'>“Ridiculus mus mauris vitae ultricies leo. Non enim praesent elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.”</span> 
      
      Sapien faucibus et molestie ac feugiat sed lectus. Sit amet consectetur adipiscing elit. Sed cras ornare arcu dui vivamus arcu felis. A scelerisque purus semper eget duis at tellus at urna. Vitae congue mauris rhoncus aenean vel elit. Sapien faucibus et molestie ac feugiat. 
      
      Id semper risus in hendrerit gravida rutrum quisque non tellus. Sed lectus vestibulum mattis ullamcorper. Amet venenatis urna cursus eget nunc. Eu augue ut lectus arcu. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet venenatis urna cursus eget nunc.
      
      Massa vitae tortor condimentum lacinia quis vel eros donec ac. Enim ut tellus elementum sagittis vitae. Massa sapien faucibus et molestie ac feugiat. Tincidunt ornare massa eget egestas purus viverra accumsan. Metus aliquam eleifend mi in nulla posuere. </p>
    </div>
  )
}

export default Blog1
