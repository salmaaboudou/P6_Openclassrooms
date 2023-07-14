import React from 'react';
import { Link } from "react-router-dom";

function NotFound() {
        return (
                <div className='not-found__container'>
                        <p className="not-found__text-1">404</p>
                        <p className="not-found__text-2">Oups! La page que vous demandez n'existe pas.</p>
                        <Link className="not-found__text-3" to="/">Retourner sur la page d’accueil</Link>
                </div>
        )
         
        
}

export default NotFound;