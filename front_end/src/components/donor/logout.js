import React from "react";
import { Redirect } from "react-router-dom";

class Dlogout extends React.Component{
    constructor(props){
        super(props);
        sessionStorage.clear();
    }
    render(){
        return(
            <Redirect to="/home"/>
        );
    }
}
export default Dlogout