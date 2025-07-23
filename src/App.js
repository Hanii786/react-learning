import './App.css';
import SideImage from './media-gallery/t-shirt/image1.jpg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="dpl_flx_main">
          <div className='text_container'>
        <h1 className='main_heading'>This Is My First React App.</h1>
        <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='media__container'>
          <img src={SideImage} alt={SideImage.alt} />
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
