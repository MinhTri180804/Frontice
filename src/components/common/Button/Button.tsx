import './Button.scss';

interface ButtonProps {
  size: 'extra-small' | 'small' | 'medium' | 'normal' | 'large';
  iconPosition?: 'left' | 'right';
  label: string; // Nhãn của button
  type: 'primary' | 'secondary' | 'tertiary';
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  const { label, size, iconPosition, type, Icon } = props;

  return (
    <button className={`button-container  ${size} ${type}`}>
      {iconPosition == 'left' && Icon && (
        <div className="icon">
          <Icon />
        </div>
      )}
      <div>{label}</div>
      {iconPosition == 'right' && Icon && (
        <div className="icon">
          <Icon />
        </div>
      )}
    </button>
  );
};

export default Button;
