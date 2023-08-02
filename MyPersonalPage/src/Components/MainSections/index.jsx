import Laptop_3D from './3D_laptop'
import './index.scss'


const MainSections = () => {
    return(
        <>
            <main>
                <Laptop_3D />
                <div className="container mx-auto px-40 flex justify-center items-center">
                    <div className="about_me">
                        <div className="me_">
                            <h1> Hi, I'm Bekzod Bekmuratov</h1>
                            <span>17 y.o Full-stack developer, from Uzbekistan</span>
                        </div>

                        <div className="projects_card">
                            <h1>Projects</h1>
                            <span>I'm learning web programming and posting projects I'm currently working on here</span>
                            <button>Projects</button>
                        </div>
                        <div className="rezume_card">
                            <h1>About me</h1>
                            <span>You can find out all the information about me, see my resume and so on</span>
                            <button>About me</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


export default MainSections