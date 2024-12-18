
import ButtonsHome from "../../component/buttons/ButtonsHome"
import "./Home.css"

export default function Home() {
    return(
        <header className="w-100 d-grid container-fluid ">
            <div className="container aling-self-center justify-self-center position-absolute top-50 start-50 translate-middle">
                <div className="container-text">
                    
                       <h1 className="text t-1 text-center">Proyect Rick & Morty</h1>
                       <h2 className="text t-2 text-center mt-4">Welcome to Rick & Morty Proyect!</h2>
                        <p className="text t-3 text-center mt-4">This proyect was made for practising React and to made a functional website.</p>

                        <p className="text t-4 text-center mt-4 mb-1">In this website you can know information of the characters of this animated series.</p>

                        <p className="text t-6 text-center">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.</p>

                        <h2 className="text t-5 text-center">Lets go!</h2>

                 </div>   

                    <div className="c3po containerbutton d-flex justify-content-center">
                      <ButtonsHome contenido="Character"/>
                       <ButtonsHome contenido="Contact"/>
                    </div>

                
            </div>
        </header>

    )
}