import { Link } from 'react-router-dom';

export default function AllStars({ stars }) {
  // console.log(stars);
  return (
    <main style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {stars.map((star) => (
        <Link to={`${star.id}`} key={star.id} style={{ border: '2px solid #fefefe', borderRadius: '10px' }}>
          <h2>{star.heading}</h2>
          <img width={250} src={star.url} alt={star.description} />
        </Link>
      ))}
    </main>
  );
}
