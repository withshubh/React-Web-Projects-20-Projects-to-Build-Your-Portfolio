import classes from './ImageLoader.module.scss';

function ImageLoader({ initialLoading, ...photo }) {
  const { 'image-container': imageContainer } = classes;

  const {
    links: { html: photoUrl },
    urls: { regular: photoSrc },
    alt_description: photoDescription,
  } = photo;

  return (
    <div className={imageContainer} id='image-container'>
      <a href={photoUrl} target='_blank' rel='noreferrer'>
        <img src={photoSrc} alt={photoDescription} title={photoDescription} />
      </a>
    </div>
  );
}

export default ImageLoader;
