const Footer = () => {
    let d = new Date();
    let date = d.getFullYear();
    return (
        <p>Copyright EFA {date}</p>
    )
};

export default Footer;