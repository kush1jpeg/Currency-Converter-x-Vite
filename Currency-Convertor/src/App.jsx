import { useState } from 'react'
import './App.css'
import Input from './Components/Input'
import useCurinfo from './customHooks/useCurinfo'
function App() {
  const [amount, setAmount] = useState(0)    //to  set the amount
  const [from, setFrom] = useState("USD")    //to set from
  const [to, setTo] = useState('INR')          //to set to
  const [convAmount, setconvAmount] = useState(0) //amount after conversion

  const currencyinfo = useCurinfo(from)
  const options = ['USD', ...Object.keys(currencyinfo)]; 
console.log(options)
const swap = () =>{
  setFrom(to);
   setTo(from);
  setconvAmount(amount);
   setAmount(convAmount);
};
const convert = ()=>{setconvAmount(currencyinfo[to]*amount)}


  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
       
    }}>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                   convert()
                }}
            >
                <div className="w-full mb-1">
                    <Input
                        label="From"
                        amount={amount}
                        currencyOptions={options}
                        selectCurrency={from}
                        onCurrencyChange={(currency)=>(setFrom(currency))}
                        onAmountChange={(amount)=>{setAmount(amount)}}
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <Input
                        label="To"
                        amount={convAmount}
                        currencyOptions={options}
                        selectCurrency={to}
                        onCurrencyChange={(currency)=>(setTo(currency))} 
                    />
                </div>
                <button type="submit" className="w-full bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600">
                    Convert {from} to {to}
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default App
