import ImageComponent from './ImageComponent';
import TextComponent from './TextComponent';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ImageComponent />
      <div style={styles.loginWrapper}>
        <TextComponent />
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundImage: 'url("/one.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '47.4%', // Adjust width as needed
    height: '60px', // Adjust height as needed
  },
  loginWrapper: {
    display: 'flex',
    justifyContent: 'flex-end', // Align the text to the right
    width: '100%',
  },
};

export default Navbar;
