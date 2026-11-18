import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const Icon = ({ name, size = 20 }) => {
  const icons = {
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>
}

const destinations = [
  { name: 'Amalfi Coast', country: 'Italy', image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=900&q=85', price: '$1,240', rating: '4.9' },
  { name: 'Santorini', country: 'Greece', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=85', price: '$1,580', rating: '4.8' },
  { name: 'Bali', country: 'Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85', price: '$980', rating: '4.9' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <header className="hero">
        <nav className="nav container">
          <a className="brand" href="#">Wonderlust<span>.</span></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><Icon name="menu" /></button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#destinations">Destinations</a>
            <a href="#experiences">Experiences</a>
            <a href="#about">About us</a>
          </div>
          <a className="nav-cta" href="#plan">Plan a trip <Icon name="arrow" size={17} /></a>
        </nav>

        <div className="hero-content container">
          <p className="eyebrow">EXPLORE THE EXTRAORDINARY</p>
          <h1>The world is yours<br />to <em>discover.</em></h1>
          <p className="hero-copy">Thoughtfully crafted journeys to the world's most remarkable places.</p>
        </div>

        <div className="search-card container" id="plan">
          <div className="search-field">
            <Icon name="pin" />
            <div><label>Destination</label><input placeholder="Where do you want to go?" /></div>
          </div>
          <div className="search-field">
            <Icon name="calendar" />
            <div><label>Travel date</label><input placeholder="Add dates" /></div>
          </div>
          <div className="search-field">
            <Icon name="users" />
            <div><label>Travelers</label><input placeholder="2 adults" /></div>
          </div>
          <button className="search-button" aria-label="Search trips"><Icon name="search" /><span>Search</span></button>
        </div>
      </header>

      <main>
        <section className="destinations container" id="destinations">
          <div className="section-heading">
            <div><p className="section-kicker">CURATED ESCAPES</p><h2>Popular destinations</h2></div>
            <a href="#">View all destinations <Icon name="arrow" size={18} /></a>
          </div>
          <div className="destination-grid">
            {destinations.map((destination) => (
              <article className="destination-card" key={destination.name}>
                <div className="card-image">
                  <img src={destination.image} alt={`${destination.name}, ${destination.country}`} />
                  <span className="rating">★ {destination.rating}</span>
                </div>
                <div className="card-content">
                  <div><p>{destination.country}</p><h3>{destination.name}</h3></div>
                  <p className="price">From <strong>{destination.price}</strong></p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience" id="experiences">
          <div className="container experience-inner">
            <div className="experience-image">
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=85" alt="Traveling along a scenic mountain road" />
            </div>
            <div className="experience-copy" id="about">
              <p className="section-kicker">THE WONDERLUST WAY</p>
              <h2>Travel deeper.<br />Remember more.</h2>
              <p>We create meaningful journeys that connect you with local culture, remarkable landscapes, and people who make each place unforgettable.</p>
              <a href="#">Discover our story <Icon name="arrow" size={18} /></a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
