import Cool from '../components/ImgLib/cool.jpg'
import './style.css'

function Home() {
    return (
        <div>
            <div>
                <h2>Welcome to Ayeron's page</h2>
                <img src={Cool} alt="aRandomCoolPic" />
            </div>
        </div>
    )
}

export default Home