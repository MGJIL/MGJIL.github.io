import React from 'react';
import './Date.css'

export default function Date() {
	return (
		<React.Fragment>
			<div className="Date">
                <h2>Caledrier</h2>
                    <ul>
                    <li>Demarage le 4mai à 19h</li>
                    <li>Demarage le 4mai à 19h</li>
                    <li>Demarage le 4mai à 19h</li>
                    </ul>

			</div>
            
		</React.Fragment>
	);
}
  


/*/*{[["26","27","28","29","30",1,2],[3,4,5,6,7,8,9],[10,11,12,13,14,15,16],[17,18,19,20,21,22,23], [24,25,26,27,28,29,30], [31,"1","2","3","4","5","6"]].map(liste => {
                        return <React.Fragment>
                            <div className="Colum">
                            {liste.map(element => {
                                return <div key={element} className={typeof element === "number" ? "ElementCalendar" : "ElementCalendar2"}> 
                                    <p>{element}</p>
                                </div>
                            })}
                            </div>
                        </React.Fragment>
                    })}*/


//based on https://www.codementor.io/reactjs/tutorial/building-a-calendar-using-react-js--less-css-and-font-awesome


