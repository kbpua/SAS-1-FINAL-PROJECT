import './App.css';
import { useState, useEffect } from 'react';

const names = ['Gab', 'Mar', 'Kurt'];
const NAV_OPTIONS = ['Gab', 'Mar', 'Kurt', 'Final Output'];
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
  'FINAL PROJECT: Reflective Essay',
];

const gdriveLinks = {
  Kurt: [
    // Module 1
    "https://drive.google.com/file/d/1WttKLmiWCKqHCgloxdtd5vtWNkRLR4uc/preview",
    // Module 2
    "https://drive.google.com/file/d/1nlZz92V_FGLxVtHi1oJ-L0iGSQ4Z5f4E/preview",
    // Module 3
    "https://drive.google.com/file/d/19jbAgNv1FNt0rJepr6iCCOQtzGsQGPDl/preview",
    // Module 4
    "https://drive.google.com/file/d/12Kyh-ldPrq4f-FnrydyCtLMnRrSrwdHH/preview",
    // Module 5
    "https://drive.google.com/file/d/1oefJFRaesy9QX8lOmr8vyvzalN7xw1dt/preview",
    // Module 6
    "https://drive.google.com/file/d/1IrjUhbv5DvTWcOnvAcgiZw7O7b0aJNeT/preview",
    // Module 7
    "https://drive.google.com/file/d/1r7V349RHMmOwt5Ha7ObPZURrzTyrYRTI/preview",
    // Module 8
    "https://drive.google.com/file/d/13mguPgNlpTOSYhtPOCtCnmy2WB0j_vnr/preview",
    // MY JOHARI WINDOW
    "https://drive.google.com/file/d/1oZw7mZQSrc6hGaRtiqiEsmOqJBa-tHJT/preview",
    // PTC
    "https://drive.google.com/file/d/1hw4H-Iy3dZg-Y7wabn1X6szQ5tan3N82/preview",
    // Synthesis Seatwork 
    "https://drive.google.com/file/d/1YLajT3w3MFCVyUQBwezKnEhP_yr1GGAp/preview",
    // FINAL PROJECT: Reflective Essay
    "https://drive.google.com/file/d/PLACEHOLDER_FINAL_PROJECT_LINK/preview"
  ],
  Mar: [
    // Module 1
    "https://drive.google.com/file/d/10kKVvhdNm0WrA3kIZCc4sa8r6bOR6ShI/preview",
    // Module 2
    "https://drive.google.com/file/d/1JXRsA82HRoCPEi1abl8KMheQGhGE4uJM/preview",
    // Module 3
    "https://drive.google.com/file/d/18U0OLpzyUZm5J-T3AknarImHgwoFeFKL/preview",
    // Module 4
    "https://drive.google.com/file/d/1UCSWPDwtnZfyZhAAwrOyJQk0HCQJaEKh/preview",
    // Module 5
    "https://drive.google.com/file/d/1fRpQUcMRKtXUuqC4pzbWXE0e_uTH3a2O/preview",
    // Module 6
    "https://drive.google.com/file/d/10xh0qFZ7rVG2ZYuZQGrgz9NL2WBdnz4Y/preview",
    // Module 7
    "https://drive.google.com/file/d/1MX2c_w10vqsGXsijqE2DtMnHESZCHgt8/preview",
    // Module 8
    "https://drive.google.com/file/d/1pHFoTHEdXSzK5ic3JGreLjQvq-ylzl2K/preview",
    // MY JOHARI WINDOW
    "https://drive.google.com/file/d/1iyNG0eXv_xMe2RWstFKYCcMyT3BiPFm9/preview",
    // PTC
    "https://drive.google.com/file/d/1AYq3u92JogX_UCFfWOhKBeXd5RFOw8gw/preview",
    // Synthesis Seatwork 
    "https://drive.google.com/file/d/13tXyQ3o2wGuv1ryv7eUWFgW85kuLe7EQ/preview",
    // FINAL PROJECT: Reflective Essay
    "https://drive.google.com/file/d/PLACEHOLDER_FINAL_PROJECT_LINK/preview"
  ],

  Gab: [
    // Module 1
    "https://drive.google.com/file/d/1jrAsOOv-HI3rVTOV6D-soATul_uhX8au/preview",
    // Module 2
    "https://drive.google.com/file/d/15eoTHSVSnKNbbMsUsNTi4QR_SnwDwpAP/preview",
    // Module 3
    "https://drive.google.com/file/d/1QiC1LDisuT3ugikWu7PmOvcmY8EeJo8r/preview",
    // Module 4
    "https://drive.google.com/file/d/1nbj_mV2urn9psyuVXkBn5lXkG2C0irKT/preview",
    // Module 5
    "https://drive.google.com/file/d/11p_HePXVMm6FOcNWnsmFCDAc7WLXONE4/preview",
    // Module 6
    "https://drive.google.com/file/d/1jtZQWSF_exUJp9GktMTyyMJWTTLiebNy/preview",
    // Module 7
    "https://drive.google.com/file/d/1Iyp1pHUpQZbw2RQAvVL78VmpAR6S12YB/preview",
    // Module 8
    "https://drive.google.com/file/d/1kHL4BImkOb3aVzkNZ8wPWfHIiiwXSJJR/preview",
    // MY JOHARI WINDOW
    "https://drive.google.com/file/d/1XFjFR-8E6jp4fpvGSaJYqutBzAAyBvvs/preview",
    // PTC
    "https://drive.google.com/file/d/1BNVTr5YSS4FFiQ6ZSjdDnLugkrVQJIPw/preview",
    // Synthesis Seatwork 
    "https://drive.google.com/file/d/1ldtRfDv1ABn0ueGGeU9huY7NKRlGuxpA/preview",
    // FINAL PROJECT: Reflective Essay
    "https://drive.google.com/file/d/PLACEHOLDER_FINAL_PROJECT_LINK/preview"

  ]  
};

function NavBar({ selectedName, setSelectedName, setSelectedModule, videoMode, setVideoMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  // Close menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <nav className="nav-bar">
      <img src={process.env.PUBLIC_URL + '/megaphone-logo.png'} alt="Logo" className="nav-logo-img" />
      <button
        className={`nav-name${selectedName === null && !videoMode ? ' active' : ''}`}
        onClick={() => {
          setSelectedName(null);
          setSelectedModule(null);
          setVideoMode(false);
          setMenuOpen(false);
        }}
      >
        Home
      </button>
      <button className={`nav-toggle${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`nav-links${menuOpen ? ' show' : ''}`}>
        {NAV_OPTIONS.map((name) => (
          <button
            key={name}
            className={`nav-name${selectedName === name || (name === 'Final Output' && videoMode) ? ' active' : ''}`}
            onClick={() => {
              if (name === 'Final Output') {
                setVideoMode(true);
                setSelectedName(null);
                setSelectedModule(null);
              } else {
                setSelectedName(name);
                setSelectedModule(null);
                setVideoMode(false);
              }
              setMenuOpen(false);
            }}
          >
            {name}
          </button>
        ))}
      </div>
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
      <div className="main-placeholder-container">
        <div className="main-placeholder">
          <h2>Welcome to our SAS 1 Portfolio</h2>
          <p>Select a name above to view their modules.</p>
        </div>
      </div>
    </div>
  );
}

function PDFViewer({ selectedName, selectedModule }) {
  if (!selectedName || selectedModule === null) return null;
  const pdfPath = gdriveLinks[selectedName]?.[selectedModule] || '';
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
      <div className="main-module-content" style={{ width: '100%', maxWidth: 700 }}>
        <div style={{ width: '100%', aspectRatio: '16/9', background: '#000', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px rgba(58,92,168,0.07)' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

function PlaceholderContent() {
  const pdfLink = "https://drive.google.com/file/d/1yuGos0TSLo5ZD7A0uTFbDffwqGen3sFc/preview";
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', width: '100%', padding: '0 1rem' }}>
      <div className="main-placeholder" style={{marginBottom: '1.5rem'}}>
        <h2>Course Synthesis Output</h2>
      </div>

      
      <div className="platform-media">
        <div style={{ width: '100%', maxWidth: '700px' }}>
          <div style={{ width: '100%', aspectRatio: '16/9', background: '#000', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 8px rgba(58,92,168,0.08)' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="media-content">
            <h3 style={{ color: '#3a5ca8' }}>Our group's Song</h3>
            <p>This "Lyric Video" is inspired by our SAS 1 journey, a collaborative exploration of our learning experiences and insights.</p>
          </div>
        </div>
      </div>

      <div className="platform-media">
        <div style={{ width: '100%', maxWidth: '700px' }}>
          <iframe
            src={pdfLink}
            title="Placeholder PDF"
            width="100%"
            style={{
              height: '400px',
              border: 'none',
              borderRadius: 16,
              background: '#fff',
              boxShadow: '0 2px 8px rgba(58,92,168,0.08)'
            }}
          ></iframe>
          <div className="media-content">
            <h3 style={{ color: '#3a5ca8' }}>Our group's Poem</h3>
            <p>This poem reflects all of the things that the three of us have learned in our SAS 1 journey, capturing our growth and insights along the way.</p>
          </div>
        </div>
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <div className="main-placeholder" style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ margin: 0 }}>Select a module for {selectedName}.</h2>
          </div>
        </div>
      )}
      {!videoMode && (
        <ModuleList selectedName={selectedName} selectedModule={selectedModule} setSelectedModule={setSelectedModule} />
      )}
      <main className="main-content">
        {videoMode ? (
          <PlaceholderContent />
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
