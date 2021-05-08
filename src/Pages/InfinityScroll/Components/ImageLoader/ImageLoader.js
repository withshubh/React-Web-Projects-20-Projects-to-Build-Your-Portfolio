import classes from './ImageLoader.module.scss';

function ImageLoader() {
  const { 'image-container': imageContainer } = classes;
  return (
    <div class={imageContainer} id='image-container'>
      <a href='#' target='_blank'>
        <img
          src='https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1229&q=80'
          alt=''
          title=''
        />
      </a>
    </div>
  );
}

export default ImageLoader;
