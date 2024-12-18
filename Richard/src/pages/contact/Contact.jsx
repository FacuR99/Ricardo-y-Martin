import Menu from "../../component/menu/Menu"
import "./contacto.css"

export default function contact(){
    return(
        <div>
            <Menu></Menu>
            <main className="d-flex justify-content-center">
            <div className="aaz container-contact d-flex flex-column justify-content-center aling-items-center">
            
            <div className="leia">
            <h2 className="a dd text-1 text-center">Contact</h2>
            <h3 className="a ddd text-2 text-center">Leave us your information so we can contact you</h3>
            </div>

            <form className="for container-form justify-content-md-center p-4" action="" >
                <div className="div-1 d-flex flex-column">
                    <label className="a label-form" htmlFor="name">Name</label>
                    <input className="input-text rounded-2 p-2 border border-0" type="text" name="" id="name" /></div>
                
                <div className="div-2 d-flex flex-column">
                    <label className="a label-form" htmlFor="email">Email</label>
                <input className="input-text rounded-2 p-2 border border-0" type="text" name="" id="email" /></div>
                
                <div className="div-3 d-flex flex-column">
                    <label className="a label-form" htmlFor="message">Message</label>
                <textarea className="textarea rounded-2 border border-0 p-4"  type="text" name="" id="massage" cols={30} rows={10}> </textarea></div>

                <div className="div-4"><input className="gg btn-form rounded-2 border border-0" type="submit" value={"Send"} /></div>
                
                </form>
                </div>
            </main>
        </div>
    )
    
}