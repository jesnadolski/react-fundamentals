import React from "react";
import {Row} from "reactstrap";

const Footer = () => {
    let d = new Date();
    let date = d.getFullYear();
    return (
        <footer>
            <Row>
            <p>Copyright EFA {date}</p>
            </Row>
        </footer>
       
    )
};

export default Footer;