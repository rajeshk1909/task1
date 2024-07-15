import Progress from "./Progress"

type SummaryCardProps = {
  item: any
}

const SummaryCard = ({ item }: SummaryCardProps) => {
  let portfolioNumber = parseFloat(item.portfolioValue.replace("%", ""))
  let returnNumber = parseFloat(item.return.replace("%", ""))

  const positiveNumber = returnNumber > 0 ? returnNumber : -1
  const negativeNumber = returnNumber < 0 ? Math.abs(returnNumber) : -1

  console.log(negativeNumber)

  return (
    <div className='w-full text-[14px] flex flex-col md:flex-row h-auto md:h-[80px] border-b-2'>
      <div className='w-full md:w-[15%] p-2'>
        <div className='font-[600]'>{item.scrip}</div>
        <div className='text-blue-300 text-[20px] font-semibold'>
          {`${item.price.slice(0, 5)}`}
        </div>
      </div>

      <div className='w-full md:w-[25%] p-2'>
        <div className='flex justify-between'>
          <div>Quantity</div>
          <div>{item.quantity}</div>
        </div>
        <div className='flex justify-between'>
          <div>Avg Cost</div>
          <div>{item.avgCost}</div>
        </div>
        <div className='flex justify-between'>
          <div>Invested Amt</div>
          <div>{item.investedAmount}</div>
        </div>
      </div>

      <div className='w-full md:w-[25%] p-2'>
        <div className='flex justify-between'>
          <div>Market Value</div>
          <div>{item.marketValue}</div>
        </div>
        <div className='flex justify-between'>
          <div>% of Portfolio Value</div>
          <div>{item.portfolioValue}</div>
        </div>
        <div className='mt-[6px]'>
          <Progress
            value={portfolioNumber}
            rightToLeft={false}
            border={false}
          />
        </div>
      </div>

      <div className='w-full md:w-[25%] p-2'>
        <div className='flex justify-between'>
          <div>Unrealized P/L</div>
          <div>{item.unrealizedPL}</div>
        </div>
        <div className='flex justify-between'>
          <div>% Return</div>
          <div>{item.return}</div>
        </div>
        <div className='grid grid-cols-2 pt-1'>
          <Progress value={negativeNumber} rightToLeft={true} border={true} />
          <Progress value={positiveNumber} rightToLeft={false} border={true} />
        </div>
      </div>

      <div className='flex w-full md:w-[10%] justify-center items-center flex-col mt-2 md:mt-0 p-2'>
        <button className='text-green-500 border h-7 px-4 text-center mb-1'>
          Buy
        </button>
        <button className='text-red-500 border h-7 flex items-center justify-center py-2 px-4 mt-1'>
          Sell
        </button>
      </div>
    </div>
  )
}

export default SummaryCard
