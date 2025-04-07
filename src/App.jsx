import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingDown = prevScrollPos < currentScrollPos;

      setShowNavbar(!scrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className="scrolling-navbar">
        <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="https://rhwlchgsdkmlgvnnhpsr.supabase.co/storage/v1/object/sign/smartgit/Assets/Smartgit%20Logo%20White.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbWFydGdpdC9Bc3NldHMvU21hcnRnaXQgTG9nbyBXaGl0ZS5wbmciLCJpYXQiOjE3NDM5NzAyNTgsImV4cCI6MTc0NjU2MjI1OH0.N0TD9jYSx0ttDWtzvnGl1WX0xNds1L5VdCgRVEcl9eM"
            alt="SmartGit Logo"
            style={{ height: '38px', width: '180px' }}
          />
        </h1>
        <nav style={{ marginLeft: 'auto' }}>
          <a href="#">Pricing</a>
          <a href="#">Feature Hub</a>
          <div className="dropdown">
            <a href="#">Documentation</a>
            <div className="dropdown-content">
              <a href="#">Release Notes</a>
              <a href="#">Developer's Hub</a>
              <a href="#">Learning Centre</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#">About</a>
            <div className="dropdown-content">
              <a href="#">Company</a>
              <a href="#">Careers</a>
            </div>
          </div>
        </nav>
      </header>
      <header className={`navbar ${showNavbar ? 'hidden' : ''}`}>
        <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="https://rhwlchgsdkmlgvnnhpsr.supabase.co/storage/v1/object/sign/smartgit/Assets/Smartgit%20Logo%20White.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbWFydGdpdC9Bc3NldHMvU21hcnRnaXQgTG9nbyBXaGl0ZS5wbmciLCJpYXQiOjE3NDM5NzAyNTgsImV4cCI6MTc0NjU2MjI1OH0.N0TD9jYSx0ttDWtzvnGl1WX0xNds1L5VdCgRVEcl9eM"
            alt="SmartGit Logo"
            style={{ height: '38px', width: '180px' }}
          />
        </h1>
        <nav style={{ marginLeft: 'auto' }}>
          <a href="#">Pricing</a>
          <a href="#">Feature Hub</a>
          <div className="dropdown">
            <a href="#">Documentation</a>
            <div className="dropdown-content">
              <a href="#">Release Notes</a>
              <a href="#">Developer's Hub</a>
              <a href="#">Learning Centre</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#">About</a>
            <div className="dropdown-content">
              <a href="#">Company</a>
              <a href="#">Careers</a>
            </div>
          </div>
        </nav>
      </header>
      <div className="content">
        <div className="hero-section">
          <p className="hero-text">Get your commits done.</p>
          <button className="download-button">Download</button>
          <img src="https://rhwlchgsdkmlgvnnhpsr.supabase.co/storage/v1/object/sign/smartgit/Assets/Hero%20Page%20SS.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbWFydGdpdC9Bc3NldHMvSGVybyBQYWdlIFNTLnBuZyIsImlhdCI6MTc0Mzk2NzI0NSwiZXhwIjoxNzQ2NTU5MjQ1fQ.JD0tdE89iChtKftzrVnz7NI4NU5PJuTBg7XDQmWInlo" alt="Placeholder SmartGit Screenshot" />
        </div>
        <div className="features-section">
          <div className="feature">
            <img src="https://rhwlchgsdkmlgvnnhpsr.supabase.co/storage/v1/object/sign/smartgit/Assets/One%20for%20all.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbWFydGdpdC9Bc3NldHMvT25lIGZvciBhbGwucG5nIiwiaWF0IjoxNzQzOTc2ODc0LCJleHAiOjE3NDY1Njg4NzR9.OeWk8XwW2UMh2ffl4i9dULlmaLbpibicu-H9pXZYL20" alt="One for All" />
            <h3>One for All</h3>
            <ul>
              <li>For newbies and pros alike.</li>
              <li>Same GUI across windows, macOS and linux.</li>
            </ul>
          </div>
          <div className="feature">
            <img src="https://rhwlchgsdkmlgvnnhpsr.supabase.co/storage/v1/object/sign/smartgit/Assets/All%20platforms.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbWFydGdpdC9Bc3NldHMvQWxsIHBsYXRmb3Jtcy5wbmciLCJpYXQiOjE3NDM5NzY5MDIsImV4cCI6MTc0NjU2ODkwMn0.lkzNLoWBA_EaAKnc_EMltId-Jnx0xsai2q-M7x3ZQAg" alt="Wide Support" />
            <h3>Wide Support</h3>
            <ul>
              <li>GitHub</li>
              <li>Azure DevOps</li>
              <li>BitBucket and BitBucket Server</li>
              <li>GitLab</li>
              <li>Own Git repositories or other hosting providers</li>
            </ul>
          </div>
          <div className="feature">
            <img src="https://rhwlchgsdkmlgvnnhpsr.supabase.co/storage/v1/object/sign/smartgit/Assets/everything%20included.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbWFydGdpdC9Bc3NldHMvZXZlcnl0aGluZyBpbmNsdWRlZC5wbmciLCJpYXQiOjE3NDM5NzY5NDMsImV4cCI6MTc0NjU2ODk0M30.3KrshLifCBCOJllk2s31-pvJInDj_n2AX2eZn6aqXP4" alt="Everything Included" />
            <h3>Everything Included</h3>
            <ul>
              <li>File Compare</li>
              <li>File Merge</li>
              <li>Git-Flow</li>
              <li>Merge and Commit History</li>
              <li>Bundled Git Client</li>
              <li>SSH-Client</li>
            </ul>
          </div>
          <div className="feature">
            <img src="https://rhwlchgsdkmlgvnnhpsr.supabase.co/storage/v1/object/sign/smartgit/Assets/Adapt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzbWFydGdpdC9Bc3NldHMvQWRhcHQucG5nIiwiaWF0IjoxNzQzOTc2OTU3LCJleHAiOjE3NDY1Njg5NTd9.5ykv8rRUHRMYUUPU0yy31l6xb8iRGVe5QK5WFFwdAkQ" alt="Highly Customizable" />
            <h3>Highly Customizable</h3>
            <ul>
              <li>Preferences for Merging, Rebasing</li>
              <li>External tools</li>
              <li>External or built-in Compare or Conflict Solver tools</li>
              <li>Syntax colouring</li>
              <li>Keyboard shortcuts</li>
              <li>Layout of certain views</li>
              <li>Toolbars</li>
              <li>Light and dark themes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
