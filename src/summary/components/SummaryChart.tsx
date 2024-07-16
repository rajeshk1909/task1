import { PieChart } from "@mui/x-charts/PieChart"
import React, { useEffect, useState } from "react"

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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const chartSize = isMobile ? 300 : 400
  const innerRadius = isMobile ? 50 : 100
  const outerRadius = isMobile ? 70 : 120

  return (
    <div>
      <div>
        <PieChart
          series={[
            {
              innerRadius: innerRadius,
              outerRadius: outerRadius,
              data: data,
            },
          ]}
          width={chartSize}
          height={chartSize}
          slotProps={{
            legend: { hidden: true },
          }}
        />
      </div>
      <div>
        {data.map((item: dataTypes, index: number) => (
          <div key={index} className='flex mb-3 items-center'>
            <div className={`${item.bgColor} h-5 w-5 mr-5`}></div>
            <div className='text-black'>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SummarCharts
