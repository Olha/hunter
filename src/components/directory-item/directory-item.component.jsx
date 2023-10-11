import './directory-item.styles.scss';

export const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="directory-container">
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
