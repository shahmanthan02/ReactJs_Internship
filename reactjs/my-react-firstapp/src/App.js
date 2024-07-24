// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutText="TextUtils About"/>
      <div className='container my-3' >
          {/* <TextForm heading='Enter the text to analyze'/> */}
          <About/>
      </div>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

// export default App;
