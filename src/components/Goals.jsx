import React from 'react'

const GOALS = [
  'Visit all 7 continents',
  'Try local cuisine in 15 countries',
  'Learn basic phrases in 5 languages',
  'Take a sunrise hot-air balloon ride',
  'Document trips with a travel photo series'
]

export default function Goals() {
  return (
    <section className="section" aria-labelledby="goals-heading">
      <h2 id="goals-heading">Travel Goals</h2>
      <ul className="goals-list">
        {GOALS.map((g, i) => (
          <li key={i} className="goal">{g}</li>
        ))}
      </ul>
    </section>
  )
}
