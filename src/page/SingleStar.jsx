import { useParams, Link } from 'react-router-dom';

export default function SingleStar({ stars }) {
  const { id } = useParams();

  const singleStar = stars.find((star) => star.id === parseInt(id));

  return (
    <Link to='/'>
      <h2>{singleStar.heading}</h2>
      <img src={singleStar.url} alt={singleStar.description} width={500} />
    </Link>
  );
}
