import SummaryCard from "../components/SummaryCard"
import data from "../../const/data"
import SummarCharts from "../components/SummaryChart"

const Summary = () => {
  return (
    <div className='w-100% flex flex-wrap '>
      
      <div className='xl:w-[70%] w-[100%] '>
        {data.map((item: any, index: number) => (
          <SummaryCard item={item} key={index} />
        ))}
      </div>
      <div className='xl:w-[30%] w-[100%] text-white flex items-center justify-center '>
        <SummarCharts />
      </div>
    </div>
  )
}

export default Summary
