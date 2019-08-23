import React from 'react'

export const Loading = () => {
    return (
        <div style={styles.container}>
            <i
                className="fa fa-refresh fa-spin"
                // className="fa fa-spinner fa-spin"
                // className="fa fa-circle-o-notch fa-spin"
                style={styles.spinner}
            ></i>
        </div>
    )
};
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        width: "100vw"
    },
    spinner: {
        fontSize: "64px",
        // color: "#777"
    }
}

export default Loading;
