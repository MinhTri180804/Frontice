import './Toggle.scss';
interface IToggle {
  label: string;
}
const Toggle: React.FC<IToggle> = ({ label }) => {
  return (
    <div className="container-toggle">
      <div className="title-toggle"></div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
        {label && <span>{label}</span>}
      </label>
    </div>
  );
};
export default Toggle;
