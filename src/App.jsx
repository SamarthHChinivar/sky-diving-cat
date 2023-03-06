import { useRef } from 'react';
import moon from './moon.png';
import land from './land.png';
import cat from './cat.gif';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h1>Welcome to my website</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Meowww!!!</h2>
        </ParallaxLayer>
      

      {/* Footer part */}
      <ParallaxLayer>
        <footer className='bg text-white'> 
          <p className="text-center">
            <a href='https://samarth-portfolio-website.000webhostapp.com' target='_blank'>&copy; Samarth H Chinivar.</a>
          </p>
        </footer>
      </ParallaxLayer>
    </Parallax>
    </div>
  );
}

export default App;