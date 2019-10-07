import React from "react";


const styles = {
    title: {
        backgroundSize: "100% auto",
        color: "#fff",
        padding: "75px 70px",
        paddingBottom: "80px",
        textAlign: "center",
        borderBottom: "2px solid #fff"
    }
}

const Title = props => (
    <div className="title" style={styles.title}>
        <h1 >{props.children}</h1>
        <p className="subtitle">{props.subtitle}</p>
    </div>
);

export default Title;