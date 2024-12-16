import React from 'react';
import './carta.css';
import { useNavigate } from 'react-router-dom';

const Carta = () => {

  const navigate = useNavigate()

  const pagePass = () => {
      navigate("/text-carta")
    
  }

  return (
    <div className="container-heart">
        <div className="heart" onAnimationEnd={pagePass}></div>
    </div>
  
  );
};

export default Carta;

