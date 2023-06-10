"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const SoftwareSubscription = () => {
  const [packages, setPackages] = useState();
  const [period, setPeriod] = useState(0);
  const [total, setTotal] = useState();
  const [prize, setPrize] = useState({})
  const [data, setData] = useState({fullname:'',businessname:'',email:'',number:'',industry:'',web:'',address:''})


  const router = useRouter();

  useEffect(()=>{
    let prizeStored = JSON.parse(localStorage.getItem('software'));
    setPrize(prizeStored)
    let dataStored = JSON.parse(localStorage.getItem('data'));
    setData({...data, fullname: dataStored.fullname , businessname: dataStored.businessname, email: dataStored.email, number: dataStored.number})

  },[])

  const changePeriod = (e) => {
    setPeriod(e.target.value);
  };
  const changepack = (e) => {
    setPackages(e.target.value);
  };

  useEffect(() => {
    if (packages === "Gold") {
      if (period === "Monthly") {
        setTotal(29.99);
      } else {
        setTotal(79.99);
      }
    } else if (packages == "Silver") {
      if (period === "Monthly") {
        setTotal(49.99);
      } else {
        setTotal(135);
      }
    } else {
      if (period === "Monthly") {
        setTotal(59.99);
      } else {
        setTotal(155);
      }
    }
  }, [packages, period]);


  const handleClick = (e) =>{
    e.preventDefault()

    if( 
      data.fullname.length == 0 || 
      data.businessname.length == 0 || 
      data.email.length == 0 || 
      data.number.length == 0 ||
      data.industry.length == 0 ||
      data.web.length == 0 ||
      data.address.length == 0 
      ){
        alert('Complete the fields')
      } else{    
        localStorage.setItem('data', JSON.stringify(data));
        router.push('/funnel/referal');
      }
  }


  const handleChange = (e) =>{
    setData({...data , [e.target.name]:e.target.value})
  }

  return (
    <div className="p-3">
      <p className="fontTitle text-center colorPrimary">
        Get your free software subscription
      </p>
      {/* <p className="fontTitle my-8 text-center">
        You have won{" "}
        <span className="fontTitle" style={{color: "rgba(246, 81, 59, 0.664)"}}>
          6 months FREE + 6 months{" "}
          <span className="fontTitle text-[1rem] font-bold">
            <sup>1</sup>/<sub>2</sub>
          </span>{" "}
          price!!
        </span>
      </p> */}

      {/* <p className="fontTitle my-8 text-center">
        You have won {`6 Months FREE`} software valued &#163;{`XX,XX`} to use for free up to --date- (our DIAMOND package) 
      </p> */}


      <p className="fontSubTitle colorPrimary mb-2 text-center">{prize.description} <br />Software Subscription</p>

      <p className="fontGeneral" style={{textAlign: 'center'}}>
        After your FREE trial ONLY pay for what features you want to use. <br />
        (NO CONTRACT - cancel at any time - 30 days notice)
      </p>

      
      
      {/* <h4 className="mt-5 mb-3 colorThird">Sofware Components</h4>
      <ul className="fontGeneral">
        <li className="border p-1">
          <span className="mx-5">1</span> Database
        </li>
        <li className="border p-1">
          <span className="mx-5">2</span> Referral Marketing &#40;NEW
          Customers&#41;
        </li>
        <li className="border p-1">
          <span className="mx-5">3</span> Gift Cards &#40;Improve Cashflow&#41;
        </li>
        <li className="border p-1 flex gap-1">
          <span className="mx-5">4</span>{" "}
          <span>Loyalty / Incentives &#40;Increase revenue & Profits&#41;</span>
        </li>
        <li className="border p-1">
          <span className="mx-5">5</span> Digital Diary
        </li>
        <li className="border p-1">
          <span className="mx-5">6</span> Stock Control
        </li>
        <li className="border p-1">
          <span className="mx-5">7</span> Invoicing
        </li>
        <li className="border p-1">
          <span className="mx-5">8</span> Email & Text Marketing
        </li>
      </ul> */}

      
      <h4 className="mt-5 mb-3 colorThird">Price After Free Trial</h4>
      <table className="fontGeneral table-auto mx-auto">
        <thead>
          <tr className="border-t">
            <th className="py-1 px-2">Package</th>
            <th className="py-1 px-2">Component</th>
            <th className="py-1 px-2">Monthly</th>
            <th className="py-1 px-2">Quarterly</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-neutral-200">
            <td className="py-1 px-2">Gold</td>
            <td className="py-1 px-2">Database + 1</td>
            <td className="py-1 px-2">&#163;29.99</td>
            <td className="py-1 px-2">&#163;79.99</td>
          </tr>
          <tr>
            <td className="py-1 px-2">Silver</td>
            <td className="py-1 px-2">Database + 3</td>
            <td className="py-1 px-2">&#163;49.99</td>
            <td className="py-1 px-2">&#163;135</td>
          </tr>
          <tr className="border-b bg-neutral-200">
            <td className="py-1 px-2">Diamond</td>
            <td className="py-1 px-2">All 8</td>
            <td className="py-1 px-2">&#163;59.99</td>
            <td className="py-1 px-2">&#163;155</td>
          </tr>
        </tbody>
      </table>
      <div className="my-8 text-center">
        <h3 className="fontSubTitle">Please provide required information</h3>
        <p className="text-xs"> * marked fields are mandatory</p>
      </div>
      <p className="fontGeneral mb-4">
        Your free trial will end on{" "}
        <span className="font-semibold">Mon Nov 20 2023</span>{" "}
      </p>
      <p className="fontGeneral mb-2">
        Please choose your Package after free trial period:
      </p>
      <div className="flex gap-4 fontGeneral">
        <label>
          <input
            type="radio"
            name="priceTrial"
            value="Gold"
            checked={packages === "Gold" ? true : false}
            onChange={changepack}
          />{" "}
          Gold
        </label>
        <label>
          <input
            type="radio"
            name="priceTrial"
            value="Silver"
            checked={packages === "Silver" ? true : false}
            onChange={changepack}
          />{" "}
          Silver
        </label>
        <label>
          <input
            type="radio"
            name="priceTrial"
            value="Diamond"
            checked={packages === "Diamond" ? true : false}
            onChange={changepack}
          />{" "}
          Diamond
        </label>
      </div>

      <div className="flex gap-4 fontGeneral">
        <label>
          <input
            type="radio"
            name="period"
            value="Monthly"
            checked={period === "Monthly" ? true : false}
            onChange={changePeriod}
          />{" "}
          Monthly
        </label>
        <label>
          <input
            type="radio"
            name="period"
            value="Quarterly"
            checked={period === "Quarterly" ? true : false}
            onChange={changePeriod}
          />{" "}
          Quarterly
        </label>
      </div>
      {period !== 0 && (
        <div>
          <p className="fontGeneral mt-3">
            Your 1t payment will be due on Mon Nov 20 2023 for{" "}
            <span className="colorPrimary font-semibold">GBP {total}</span>
          </p>
          <p className="fontGeneral my-2">
            Cancel at anytime by email to{" "}
            <span className="colorSecondary">
              admin@proactivmarketing.co.uk
            </span>{" "}
          </p>
        </div>
      )}
      <form
        id="form"
        className="w-full flex flex-col px-4 py-8  bg-white rounded-lg shadow-md relative"
      >
        <label for="FullName" className="fontForm mb-1">
          Full Name *
        </label>
        <input
          required={true}
          id="YourName"
          type="text"
          name="fullname"
          onChange={handleChange}
          value={data.fullname}  
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />
        <label for="Business" className="fontForm mb-1">
          Business Name *
        </label>
        <input
          required={true}
          id="Business"
          type="text"
          name="businessname"
          onChange={handleChange}          
          value={data.businessname}   
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />
        <label for="Industry" className="fontForm mb-1">
          Industry
        </label>
        <input
          id="Industry"
          type="text"
          name="industry"
          onChange={handleChange}
          value={data.industry}  
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />
        <label for="Phone" className="fontForm mb-1">
          Phone Nomber *
        </label>
        <input
          required={true}
          id="Phone"
          type="text"
          name="number"
          onChange={handleChange}
          value={data.number}  
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />
        <label for="email" className="fontForm mb-1">
          Email Address *
        </label>
        <input
          required={true}
          id="email"
          type="text"
          name="email"
          onChange={handleChange}
          value={data.email}  
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />
        <label for="web" className="fontForm mb-1">
          Website Address
        </label>
        <input
          id="web"
          type="text"
          name="web"
          onChange={handleChange}
          value={data.web} 
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />
        <label for="Address" className="fontForm mb-1">
          Address *
        </label>
        <input
          required={true}
          id="Address"
          type="text"
          name="address"
          onChange={handleChange}
          value={data.address} 
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />

        <button type="submit" className="px-4 py-2 buttonsMain" onClick={handleClick}>
          Watch the video to understand the benefits!
        </button>
      </form>
    </div>
  );
};

export default SoftwareSubscription;
