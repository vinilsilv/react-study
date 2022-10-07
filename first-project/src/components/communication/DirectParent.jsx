import React from "react";
import DirectChild from "./DirectChild";

export default props => {
    return (
        <div>
            <DirectChild  text="Child 1" number={20} bool={true}/>
            <DirectChild  text="Child 2" number={15} bool={false}/>
        </div>
    )
}