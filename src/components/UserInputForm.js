import React, {useState} from 'react';
import ExportButton from './ExportButton';

const UserInputForm = ({errorAmount, setErrorAmount, seed, setSeed, setRegion, region, fakeUsers}) => {
    
    const [errorInput, setErrorInput] = useState(errorAmount);

    const errorInputHandler = (newValue) => {
        newValue = parseFloat(newValue);
        if(newValue <= 1000 && newValue >= 0) {
            if (newValue > 10) {
                setErrorInput(10);
                setErrorAmount(newValue);
            } else {
                setErrorInput(newValue);
                setErrorAmount(newValue);
            }
        }
    };

    return (
        <form className='input-form'>
            <div>
                <label htmlFor="region">Region:</label>
                <select name="region" id="region" value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option value="Ukraine">Ukraine</option>
                    <option value="Germany">Germany</option>
                    <option value="Canada">Canada</option>
                </select>
            </div>
             <div>
                <label>Error Amount:</label>
                <input
                    id="error-input-slider"
                    type="range"
                    value={errorInput}
                    min={0}
                    max={10}
                    step={0.1}
                    onChange={(e) => {
                        setErrorAmount(parseFloat(e.target.value));
                        setErrorInput(parseFloat(e.target.value));
                    }}
                />
                <input
                    id="error-input-num"
                    type="number"
                    value={errorAmount}
                    min={0}
                    max={1000}
                    step={0.1}
                    onChange={(e) => errorInputHandler(e.target.value)}
                />
            </div>
            <div>
                <label>Seed Value:</label>
                <input
                    id="seed-input-num"
                    type="number"
                    value={seed}
                    onChange={(e) => setSeed(parseInt(e.target.value))}
                />
                <button type="button" onClick={() => setSeed(Math.floor(Math.random() * 10000000))}>
                    Random Seed
                </button>
            </div>
            <ExportButton users={fakeUsers} />
        </form>
    )
}

export default UserInputForm;