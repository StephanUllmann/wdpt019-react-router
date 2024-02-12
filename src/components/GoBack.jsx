import { useNavigate } from 'react-router-dom';

export default function GoBack() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return <button onClick={handleClick}>&larr; Go Back</button>;
}
