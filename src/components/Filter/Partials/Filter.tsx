import './Filter.scss';
interface Filter {
  title: string;
  inputType: string;
}
const Filter: React.FC<Filter> = ({ ...props }) => {
  const { title = 'title', inputType = 'text' } = props;
  return (
    <>
      <div className="container-filter">
        <div className="title">{title}</div>
        <div className="input">
          <input type={inputType} />
        </div>
      </div>
    </>
  );
};

export default Filter;
