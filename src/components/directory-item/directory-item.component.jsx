import './directory-item.styles.scss';
import { useNavigate } from 'react-router-dom';

export const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`/shop/${title}`);

  return (
    <div className="directory-container" onClick={onNavigateHandler}>
      <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }} />
      <div className="directory-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
};
