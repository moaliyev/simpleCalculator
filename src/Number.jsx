function Number(props) {
  const { number, handleClick } = props;
  return (
    <div className="number" onClick={e => handleClick(e.target)}>
      {number}
    </div>
  );
}

export default Number;
