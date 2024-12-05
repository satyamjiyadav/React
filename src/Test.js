import React from 'react';
import './styles.css';

function Test() {
    return (
        <div className="container">
            <div className="column">
                <label htmlFor="period">Pick a Period:</label>
                <input type="text" id="period" name="period" />
                
                <div className="row">
                    <div className="input-group">
                        <label htmlFor="folder">Folder:</label>
                        <input type="file" id="folder" name="folder" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="order">Order By:</label>
                        <input type="text" id="order" name="order" />
                    </div>
                </div>
                
                <label htmlFor="language">Select a Language:</label>
                <select id="language" name="language">
                    <option value="english">Cool</option>
                    <option value="spanish">Wow</option>
                    <option value="french">Macho</option>
                </select>
                
                <label htmlFor="country">Choose a Country:</label>
                <select id="country" name="country">
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                </select>
                
                <button type="button">Filter Results</button>
            </div>
            
            <div className="column">
                <label htmlFor="cardholder">Cardholder Name:</label>
                <input type="text" id="cardholder" name="cardholder" />
                
                <label htmlFor="cardnumber">Card Number:</label>
                <input type="number" id="cardnumber" name="cardnumber" />
                
                <div className="row">
                    <div className="input-group">
                        <label htmlFor="month">Month:</label>
                        <input type="number" id="month" name="month" min="1" max="12" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="year">Year:</label>
                        <input type="number" id="year" name="year" min="2024" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="cvc">CVC:</label>
                        <input type="number" id="cvc" name="cvc" />
                    </div>
                </div>
                
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" placeholder="Country, city,Address" />
                
                <button type="button">Purchase $98</button>
            </div>
        </div>
    );
}

export default Test;
