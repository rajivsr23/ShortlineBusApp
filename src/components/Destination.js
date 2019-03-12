import React from 'react';
import moment from 'moment';

const Destination =()=>{
    return (
<div>
    <form>
    From: <select /><br/>
    To: <select /><br/>
    Date :<input type="text"/>
    </form>
    <h2>Destination</h2>
    </div>

    )
    
    
};

const now =moment();
console.log(now);
export default Destination;