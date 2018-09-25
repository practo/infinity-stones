const ComparisonButton = ({isDisabled,icon,width,color,region}) => {   
  const color = isDisabled === true ? '#999999' : '#000000';
  const btnClass = region === 'us' ? 'btn__blue' : 'btn__red'; 

  return (
    <button className={btnClass}>
      <Icon>
        styles={icon}
        width={width}
        color={color}
      </Icon>
      Compare Me
    </button>
 );
};

const ParentComponent = () => {
  return <ComparisonButton />
}