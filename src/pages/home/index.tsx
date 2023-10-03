
import DashboardCard from '../../components/DashboardCard'
import {AiFillSignal} from "react-icons/ai"
function Home() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
      <DashboardCard total={"230"} label={"Total Comics"} icon={<AiFillSignal/>}/>
      <DashboardCard total={"230"} label={"Total Stories"} icon={<AiFillSignal/>}/>
      <DashboardCard total={"220"} label={"Total Series"} icon={<AiFillSignal/>}/>  
    </div>
  )
}

export default Home