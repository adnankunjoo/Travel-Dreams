import React from 'react'

const DESTINATIONS = [
  {
    id: 1,
    city: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    mainAttraction: 'Fushimi Inari Shrine & historic temples',
    why: 'To wander bamboo groves, experience traditional tea houses, and witness centuries of Japanese cultural heritage.',
    img: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=1200&q=60'
  },
  {
    id: 2,
    city: 'Reykjavík / Iceland',
    country: 'Iceland',
    region: 'Europe',
    mainAttraction: 'Northern Lights, Blue Lagoon, and volcanic landscapes',
    why: 'To see the aurora borealis, soak in geothermal pools, and explore lava fields and glaciers.',
    img: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=1200&q=60'
  },
  {
    id: 3,
    city: 'Marrakech',
    country: 'Morocco',
    region: 'Africa',
    mainAttraction: 'Historic souks and Jemaa el-Fnaa',
    why: 'For the vibrant markets, rich spices, colorful textiles, and the sensory experience of North African culture.',
    img: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=1200&q=60'
  },
  {
    id: 4,
    city: 'Paris',
    country: 'France',
    region: 'Europe',
    mainAttraction: 'Eiffel Tower, museums, and cafés',
    why: 'To enjoy world-class art, stroll riverside boulevards, and indulge in French cuisine and pastries.',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=60'
  }
]

export default function Destinations() {
  return (
    <section className="section" aria-labelledby="dest-heading">
      <h2 id="dest-heading">Dream Destinations</h2>
      <div className="dest-list" role="list">
        {DESTINATIONS.map(dest => (
          <article className="card" role="listitem" key={dest.id}>
            <img src={dest.img} alt={`${dest.city} photo`} />
            <div className="card-body">
              <h3>{dest.city}, {dest.country}</h3>
              <div className="meta">{dest.region} • Main attraction: {dest.mainAttraction}</div>
              <div className="reason">{dest.why}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
