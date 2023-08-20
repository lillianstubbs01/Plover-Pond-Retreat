import NavBar from "../components/navbar/navbar";
import './home.css'

function HomePage() {
    return (
        <div className='home'>
            <NavBar></NavBar>
            <div className='home-image'>
                <div className='home-title'>Plover Pond Retreat</div>
                <div className='home-subtitle'>"A home away from home"</div>
                <div className='home-overlay'></div>
            </div>
            <div className='home-divider' />
            
        </div>
    );
}

export default HomePage