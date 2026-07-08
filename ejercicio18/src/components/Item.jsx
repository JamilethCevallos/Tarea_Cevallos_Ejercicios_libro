const Item = ({ id, nombre, comprado, onToggle }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', background: '#f0f0f0', margin: '5px 0', borderRadius: '4px', maxWidth: '300px' }}>
      <input 
        type="checkbox" 
        checked={comprado} 
        onChange={() => onToggle(id)} 
      />
      <span style={{ textDecoration: comprado ? 'line-through' : 'none', color: comprado ? '#888' : '#000' }}>
        {nombre}
      </span>
    </div>
  );
};

export default Item;