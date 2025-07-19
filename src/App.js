import './App.css';
import { useState, useEffect } from 'react';

const names = ['Gab', 'Mar', 'Kurt'];
const NAV_OPTIONS = ['Gab', 'Mar', 'Kurt', 'Video'];
const modules = [
  'Module 1',
  'Module 2',
  'Module 3',
  'Module 4',
  'Module 5',
  'Module 6',
  'Module 7',
  'Module 8',
  'MY JOHARI WINDOW',
  'PTC',
  'Synthesis Seatwork',
];

function NavBar({ selectedName, setSelectedName, setSelectedModule, videoMode, setVideoMode }) {
  return (
    <nav className="nav-bar">
      <button
        className={`nav-name${selectedName === null && !videoMode ? ' active' : ''}`}
        onClick={() => {
          setSelectedName(null);
          setSelectedModule(null);
          setVideoMode(false);
        }}
      >
        Home
      </button>
      {NAV_OPTIONS.map((name) => (
        <button
          key={name}
          className={`nav-name${selectedName === name || (name === 'Video' && videoMode) ? ' active' : ''}`}
          onClick={() => {
            if (name === 'Video') {
              setVideoMode(true);
              setSelectedName(null);
              setSelectedModule(null);
            } else {
              setSelectedName(name);
              setSelectedModule(null);
              setVideoMode(false);
            }
          }}
        >
          {name}
        </button>
      ))}
    </nav>
  );
}

function ModuleList({ selectedName, selectedModule, setSelectedModule }) {
  if (!selectedName || selectedModule !== null) return null;
  return (
    <div className="module-list-container">
      <div className="module-list">
        {modules.map((mod, idx) => (
          <button
            key={mod}
            className={`module-btn${selectedModule === idx ? ' active' : ''}`}
            onClick={() => setSelectedModule(idx)}
          >
            {mod}
          </button>
        ))}
      </div>
    </div>
  );
}

function ModuleSidebar({ selectedName, selectedModule, setSelectedModule }) {
  return (
    <aside className="module-sidebar">
      {modules.map((mod, idx) => (
        <button
          key={mod}
          className={`module-sidebar-btn${selectedModule === idx ? ' active' : ''}`}
          onClick={() => setSelectedModule(idx)}
        >
          {mod}
        </button>
      ))}
    </aside>
  );
}

function HomeContent() {
  return (
    <div>
      <div className="home-cover-container">
        <img src={process.env.PUBLIC_URL + '/sas1-journey-cover.png'} alt="SAS 1 Journey Cover" className="home-cover" />
      </div>
      <div className="main-placeholder">
        <h2>Welcome to our SAS 1 Portfolio</h2>
        <p>Select a name above to view their modules.</p>
      </div>
    </div>
  );
}

function PDFViewer({ selectedName, selectedModule }) {
  if (!selectedName || selectedModule === null) return null;
  const folder = selectedName.toLowerCase();
  let pdfPath = '';
  if (selectedModule < 8) {
    pdfPath = `${process.env.PUBLIC_URL}/${folder}/module${selectedModule + 1}.pdf`;
  } else if (selectedModule === 8) {
    pdfPath = `${process.env.PUBLIC_URL}/${folder}/my-johari-window.pdf`;
  } else if (selectedModule === 9) {
    pdfPath = `${process.env.PUBLIC_URL}/${folder}/ptc.pdf`;
  } else if (selectedModule === 10) {
    pdfPath = `${process.env.PUBLIC_URL}/${folder}/synthesis-seatwork.pdf`;
  }
  return (
    <div style={{width: '100%'}}>
      <div className="main-module-content">
        <h2>{selectedName} - {modules[selectedModule]}</h2>
        <div style={{width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <iframe
            src={pdfPath}
            title={`PDF for ${selectedName} ${modules[selectedModule]}`}
            width="100%"
            height="100%"
            style={{border: 'none', minHeight: '500px', background: '#fff'}}
          >
          </iframe>
        </div>
        <p style={{textAlign: 'center', color: '#888', marginTop: '1rem', fontSize: '1rem'}}>If the PDF does not load, it may not be uploaded yet.</p>
      </div>
    </div>
  );
}

function VideoContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', width: '100%' }}>
      <h2 style={{ color: '#3a5ca8', fontFamily: 'Playfair Display, serif', marginBottom: '1.5rem' }}>Featured Video</h2>
      <div style={{ width: '100%', maxWidth: 700, aspectRatio: '16/9', background: '#000', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px rgba(58,92,168,0.07)' }}>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

function MainContent({ selectedName, selectedModule, setSelectedModule }) {
  if (!selectedName) {
    return <HomeContent />;
  }
  if (selectedModule === null) {
    return null;
  }
  return (
    <div className="module-pdf-layout">
      <ModuleSidebar selectedName={selectedName} selectedModule={selectedModule} setSelectedModule={setSelectedModule} />
      <PDFViewer selectedName={selectedName} selectedModule={selectedModule} />
    </div>
  );
}

function App() {
  const [selectedName, setSelectedName] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [videoMode, setVideoMode] = useState(false);

  // Scroll to top when selectedName changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedName, videoMode]);

  // Show blurred background only when not on home page
  const showBlurredBg = selectedName !== null;

  return (
    <div className="App">
      {/* Home background image only on home page */}
      {selectedName === null && (
        <div
          className="home-background"
          style={{
            background: `url(${process.env.PUBLIC_URL + '/bg-sas.jpg'}) center center/cover no-repeat`,
            minHeight: '100vh',
            width: '100vw',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 0
          }}
        ></div>
      )}
      {showBlurredBg && (
        <div
          className="background-blur"
          style={{
            background: `url(${process.env.PUBLIC_URL + '/sas1-journey-cover.png'}) center center/cover no-repeat`
          }}
        ></div>
      )}
      <NavBar selectedName={selectedName} setSelectedName={setSelectedName} setSelectedModule={setSelectedModule} videoMode={videoMode} setVideoMode={setVideoMode} />
      {/* Add the select module prompt at the top if a name is selected but no module is selected */}
      {selectedName && selectedModule === null && !videoMode && (
        <div style={{
          width: '100%',
          textAlign: 'center',
          marginTop: '2rem',
          fontSize: '2rem',
          fontWeight: 700,
          color: '#3a5ca8',
          fontFamily: 'Playfair Display, serif',
          zIndex: 2,
          position: 'relative'
        }}>
          Select a module for {selectedName}.
        </div>
      )}
      {!videoMode && (
        <ModuleList selectedName={selectedName} selectedModule={selectedModule} setSelectedModule={setSelectedModule} />
      )}
      <main className="main-content">
        {videoMode ? (
          <VideoContent />
        ) : (
          <MainContent selectedName={selectedName} selectedModule={selectedModule} setSelectedModule={setSelectedModule} />
        )}
      </main>
      <footer>
        <p>&copy; 2025 Portfolio Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
