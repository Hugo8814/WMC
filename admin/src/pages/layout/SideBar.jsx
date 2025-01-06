
import logo from "../../assets/imgs/logo.jpg"
function SideBar() {
    return (
        <div className=" h-full flex flex-col p-12 gap-4 bg-[#202020] text-white   ">

           <div>
            <img src={logo} alt="" />
           <h1>Welfare MC</h1>
           </div>
           <div>link </div>
           <div>link </div>
           <div>link </div>
           <div>link </div>
           <div>link </div>
        </div>
    )
}

export default SideBar
