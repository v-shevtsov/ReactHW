import {Link} from 'react-router-dom';

export default function ErrorPage() {
    const bgStyle = {
        height: '90vh',
        width: '100%',
        backgroundImage: 'url("error_bg.jpg")',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        filter: 'brightness(75%)'
    };

    return (
        <div style={bgStyle}>
            <h1>UH OH</h1>
            <p>Houston, we have a problem</p>
            <Link to="/" style={{
                textTransform: 'uppercase',
                border: '1px solid #FFF',
                borderRadius: '50%',
                textDecoration: 'none',
                color: 'white',
                padding: '10px',
            }}>Back to home</Link>
        </div>
    );
}