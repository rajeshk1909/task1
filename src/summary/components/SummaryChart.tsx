import { PieChart } from "@mui/x-charts/PieChart"

type dataTypes = {
  label: string
  value: number
  bgColor: string
}

const data: dataTypes[] = [
  { label: "Mutual Funds", value: 100, bgColor: "bg-[#2f96fe]" },
  { label: "ETFs", value: 300, bgColor: "bg-[#00b4ac]" },
]

const SummarCharts = () => {
  return (
    <div>
      <div>
        <PieChart
          series={[
            {
              innerRadius: 100,
              outerRadius: 120,
              data: data,
            },
          ]}
          width={400}
          height={300}
          slotProps={{
            legend: { hidden: true },
          }}
        />
      </div>
      <div>
        {data.map((item: dataTypes, index: number) => (
          <div key={index} className='flex mb-3 items-center'>
            <div className={` ${item?.bgColor}  h-5 w-5 mr-5`}></div>
            <div className='text-black'>{item?.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SummarCharts
