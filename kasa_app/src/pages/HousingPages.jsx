import React from 'react';
import { useParams } from 'react-router-dom';

function HousingPages() {
        const { id } = useParams();
        return <div>HousingCards</div>;
                
 
}

export default HousingPages;