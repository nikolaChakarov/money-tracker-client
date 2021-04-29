import './Home.css';
import video from '../../Videos/main.mp4';

const Home = () => {
    return (
        <section className="home">
            <h1>Welcome</h1>

            <div className="video-container">
                <video src={video} autoPlay loop muted></video>
            </div>
        </section>
    )
}

export default Home;