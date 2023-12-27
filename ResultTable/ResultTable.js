
import classes from './ResultTable.module.css'

const  ResultTable = (props) => {
return (
    <table className={classes.result}>
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map((yearData) => (
      <tr key={yearData.year}>
        <td>{yearData.year}</td>
        <td>{yearData.savingsEndOfYear}</td>
        <td>{yearData.yearlyInterest}</td>
        <td>{ yearData.savingsEndOfYear-props.initialInvestment-
              yearData.yearlyContribution  * yearData.year}
        </td>
        <td> 
          { props.initialInvestment +  
              yearData.yearlyContribution  * yearData.year}
        </td>
      </tr>))}
      
    </tbody>
  </table>



);
};
export default ResultTable;