import React from "react";

import './pagination.css'

export const Pagination = (props) => {



    return (
        <nav class='pagination'>
            <ul>

                <button onClick={() => console.log('click')} class='prev'>Previous</button>
            </ul>
            <ul>

                <button onClick={() => console.log('click')} class='next'>Next</button>
            </ul>
        
        </nav>
    );
};
               
            