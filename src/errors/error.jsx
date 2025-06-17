import { Link, useRouteError } from "react-router-dom";
import './error.css'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error">
            <h1>Oops!</h1>
            <p>Something went wrong.</p>
            <p><i>{error.statusText || error.message}</i></p>
            <Link className="error-link" to={'/'}>Back to Home</Link>
        </div>
    );
}

export default ErrorPage