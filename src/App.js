import './css/main.css';
import Footer from './components/Footer';
import Header from './components/Header';
import img01 from './img/img01.jpg';
import img02 from './img/img02.jpg';


function App() {
  let divStyle = {
    width: 300,
    height: 300,
    backgroundImage: `url(${img02})`,
    backgroundSize: 'cover'
  };
  return (
    <figure>
      <Header />
        <img src={img01} alt="" />
        <div style={divStyle}></div>

        <img src={process.env.PUBLIC_URL + 'img/img03.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + 'img/img04.jpg'} alt="" />
      <Footer />
    </figure>
  );
}

export default App;
