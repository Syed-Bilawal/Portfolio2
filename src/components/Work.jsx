import { data } from "../data/data"
import working from "../images/workImg.jpeg"
const Work = () => {
   
  return (

    <div className="bg-black w-full  text-gray-200" name="work">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                Work
            </p>
            <p className="py-6">
                Check out my latest works
            </p>
            </div>

            {/* container for projects */}

            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-2  gap-8">
                {
                    data.map((item,index)=>{
return (
    <div width="200px" key={index} style={{backgroundImage:`url(${item.image})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
    {/* hover effects */}
<div className=" bg-[#AA336A]  text-white  opacity-80 border rounded-md w-full">
    <div className="flex flex-col  py-2 bg-white text-black ">
<span className=" font-bold tracking-wider  text-2xl">
        {item.name}
</span>
<span className="text-2xl font-bold">{item.desc}</span>
<span className="text-2xl font-bold" >{item.stack}</span>
</div>
<div className="pt-8 text-center">
    <a href={item.live} target="_blank">
        <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white fond-bold text-lg">
            Demo
        </button>
    </a>
    <a href={item.github} target="_blank">
      
    </a>

</div>
</div>
</div>
)
                    })
                }


            </div>


        </div>

    </div>
  )
}

export default Work