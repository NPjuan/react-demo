import './index.css'
export default function Site(props) {
  const { imgUrl, desc } = props;
  return (
    <div className="site-wrapper">
      <img className="site-img" src={imgUrl} alt={desc} />
      <p className="site-desc">{desc}</p>
    </div>
  );
}
