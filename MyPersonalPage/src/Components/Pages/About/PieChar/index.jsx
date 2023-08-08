import PieChar_logo from '../../../../assets/images/PieChar_1.png'
import './index.scss'

const PieChar = () => {
  return (
    <>
        <div className="pieChar">
            <div className="pieChar_content container mx-auto px-52"> 
                <div className="coder_section ">
                    <h2>Part coder</h2>
                    <ul>
                        <li>Full-stack development</li>
                        <li>HTML / CSS / Sass</li>
                        <li>Python /JavaScript / React / TypeScript</li>
                        <li>Bootstrap / Tailwind CSS / Django</li>
                        <li>NPM / Yarn / Git</li>
                    </ul>
                </div>
                <div className="pieChar_logo">
                    <img src={PieChar_logo} alt="" />
                </div>
                <div className="designer_section ml-6">
                    <h2>Part designer</h2>
                    <ul>
                        <li>UI design</li>
                        <li>UX design</li>
                        <li>Design Systems</li>
                        <li>Interaction design</li>
                        <li>"Making it pop"</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default PieChar