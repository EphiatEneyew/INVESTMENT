import {useState} from 'react';
import classes from './UserInput.module.css';

const InitialValues = {"current-saving":10000,
"yearly-contribution":1200,
 "expected-return":5,
 "duration":10   };

const UserInput = (props) => {
    //we accept props becase we need to accept a function as a prop which define on app component and which is trigered when submit button is click
   const[userInput, setUserInput] =useState(InitialValues)// one state with multiple key to manage all input element value
    const submitHandler = (event) => {
        event.preventDefault(); // to make sure that the browser dfault behaviour is tprevented-page does not loaded again
        
        props.onCalculate(userInput);
    };
    const resetHandler = () => {
       setUserInput(InitialValues)
    };
    const inputChangeHandler = (input, value) => {
        //to manage the value entered with the user
        // it is generic event handler function-wcich reuse for multiple event of the same kind from different source
        // therefor it need two parametr 1-to identify event source(in our case input and is id).2-value that was enterd
           
        //console.log(input, value);
        setUserInput((prevInput)=>{
            return{
                ...prevInput,
                [input]: value //to overwrite the value of one input element which triger the inputchangeHandler function
                               //and it is aspecial javascript syntax to dynamicly access the property name by wrapping one of the identfier that contains the property name ehich we want to access with[] 
            }
        })
    };
 
    return (
        <form onSubmit = {submitHandler} className = {classes.form}>
            <div className ={classes["input-group"]}>
                <p>
                    <label htmlFor="current-saving">Current Savings ($)</label>
                    <input onChange={(event) => inputChangeHandler('current-saving',
                               event.target.value ) } value= {userInput["current-saving"]}type ="number" id ="current-saving" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(event) => inputChangeHandler("yearly-contribution",
                               event.target.value ) } value= {userInput["yearly-contribution"]} type ="number" id ="yearly-contribution" />
                </p>
            </div>
            <div className={classes["input-group"]}>
                <p>
                   <label htmlFor="expected-return">
                      Expected Interest (%, per year)
                   </label>
                 <input onChange={(event) => inputChangeHandler("expected-return",
                               event.target.value ) } value= {userInput["expected-return"]} type="number" id="expected-return" />
               </p>
               <p>
                     <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event) => inputChangeHandler("duration",
                               event.target.value ) }  value= {userInput["duration"]} type="number" id="duration" />
               </p>
            </div>
            <p className={classes.actions}>
                <button onClick={resetHandler} type = "reset" className = {classes.buttonAlt}>Reset</button>
                <button type = "submit" className = {classes.button}>Calculate</button>
           </p>
         </form>

    );
};
export default UserInput;