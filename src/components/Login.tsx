import * as React from 'react';
import { render } from 'react-dom';
import { useHistory } from 'react-router-dom'; 

export const Login = () => {
    let history = useHistory();

    return(
        <div>
            <form>
                <input type="text" placeholder="Your Username"/>
                <input type="password"  placeholder="Your Password"/>

                <button onClick={() => {history.push("/home")}}>Login</button>

            </form>
        </div>
    );
}