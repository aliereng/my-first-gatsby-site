import  * as React from 'react';
import Greeting from "../components/greeting";

const SayHello = () => {
    return(
        <div>
            <Greeting name="Morgan" />
            <Greeting name="Obinna" />
            <Greeting name="Generosa" />
        </div>
    )
}

export default SayHello;