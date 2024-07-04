import Image from 'next/image';

const ImageComponent = () => {
  return (
    <div style={styles.imageContainer}>
      <Image
        src="/logo.png" 
        alt="Logo"
        width={18}
        height={21}
      />
    </div>
  );
};

const styles = {
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default ImageComponent;
