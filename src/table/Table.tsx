import data from "../const/data"
import "./Table.css"

const Table = () => {
  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Scrip</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Avg. Cost</th>
            <th>Invested Amount</th>
            <th>% of Portfolio Value</th>
            <th>Unrealized P&L</th>
            <th>% Return</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.scrip}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.avgCost}</td>
              <td>{item.investedAmount}</td>
              <td>{item.portfolioValue}</td>
              <td>{item.unrealizedPL}</td>
              <td>{item.return}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
