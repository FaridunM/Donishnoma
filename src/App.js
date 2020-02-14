import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import Profile from './components/Profile';
import Slider from './components/Slick';
import BookOrBooks from './components/BookOrBooks';
import 'babel-plugin-transform-react-statements';

function App() {
  window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset,
        header = document.querySelector('header');

    header.style.top = scrollPosition >= 40 ? '0' : null;
    header.style.position = scrollPosition >= 40 ? 'fixed' : null;

  });

  return(
    <div className="wrapper">
      <Header />
      <Slider />
      <section className="elemContainer">
        <For counter="0">
          {/* <BookOrBooks key={} /> */}
        </For>
      </section>
      <Sidebar />
      {/* <Profile /> */}
    </div>
  );

  // my variant
  // return (
  //   <div>
  //     <content></content>
  //     <footer></footer>
  //   </div>
  // );
}

export default App;