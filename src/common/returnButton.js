import React from 'react';
import { useHistory } from 'react-router';
import {Button} from 'react-bootstrap'

const ReturnButton = ({ values, setUserData }) => {
    let history = useHistory();

    const handleClick = async () => {
        console.log("handleClick called");
        // const resp = {}//await reqService.LoginRequest(values);
        // if (resp && resp.data && resp.data.token) {
        //     setUserData({ token: resp.data.token })
        //     history.push('/dashboard');
        // }
    }

    return (
        <div>
            <Button variant="secondary" onClick={() => handleClick()}>Primary</Button>
        </div>
    )
}
export default ReturnButton;