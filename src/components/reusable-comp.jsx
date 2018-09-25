const Button = ({ children, onClick, className, ...props }) => {   
  return (
    <button className={className} onClick={onClick}>
     {children}    
    </button>
  );
};

const ParentComponent = (props) => {

  const color = props.isDisabled === true ? '#999999' : '#1274b8';
  const btnClass = props.region === 'us' ? 'btn__blue' : 'btn__red';
  const onClick = () => {}

  <Button className={btnClass} onClick={onClick}>      
    <Icon>
      styles={props.icon}
      width={props.width}
      color={props.color}
    </Icon>
    Compare Me
  </Button>
}