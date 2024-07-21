import { PiSealWarningLight } from "react-icons/pi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <section className="h-screen py-5 bg-grid bg-white w-full">
      <div className="siteContainer flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center text-gray-400">
          <PiSealWarningLight size={128} />
          <h1 className="text-4xl font-medium">Belə bir səhifə yoxdur!</h1>
        </div>
        <div className="mt-10">
          <Link to={'/'} className='flex items-center gap-1 bg-black text-white rounded-full p-4 text-sm'><IoIosArrowRoundBack size={24}/>Ana səhifəyə qayıdın</Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage