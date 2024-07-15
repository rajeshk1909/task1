import SummaryCard from "../components/SummaryCard"
import data from "../../const/data"
import SummarCharts from "../components/SummaryChart"

const Summary = () => {
  return (
    <div className='w-100% flex lg:flex-wrap '>
      <div className='w-[70%] '>
        {data.map((item: any, index: number) => (
          <SummaryCard item={item} key={index} />
        ))}
      </div>
      <div className='w-[30%] text-white flex items-center justify-center '>
        <SummarCharts  />
      </div>
    </div>
  )
}

export default Summary
