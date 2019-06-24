function Button(props) {

  let color = props.color ? props.color : '#4CAF50';

  return (
    <div>
      <button onClick={props.onClick} >
        {props.children}
      </button>
      <style jsx>{`
          button {
            background-color: white;
            border: 2px solid ${color};
            color: black;
            margin: 5px;
            padding: 10px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            border-radius: 8px;
            transition-duration: 0.4s;
          }

          button:hover {
            background-color: ${color};
          }
        `}
      </style>

    </div>

  );
}

const buttonStyle = {
  backgroundColor: 'green',
  color: 'white',
  border: 'none',
  textAlign: 'center',
  padding: '15px 32px',
  display: 'inline-block',
  textDecoration: 'none',
  fontSize: 16,
  borderRadius: '8px',
  ':hover:': { backgroundColor: 'black' }
}

export default Button;