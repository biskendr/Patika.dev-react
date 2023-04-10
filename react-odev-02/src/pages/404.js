//custom 404 error page
export default function Custom404() {
    const main = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
    };
    const text = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <div style={main}>
            <div style={text}>
                <h1>404 |</h1>
                <h2>Oops! Something went wrong.</h2>
            </div>
        </div >
    );
}
