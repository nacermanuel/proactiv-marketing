"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const SoftwareSubscription = () => {
  const [packages, setPackages] = useState("Diamond");
  const [period, setPeriod] = useState("Quarterly");
  const [total, setTotal] = useState();
  const [prize, setPrize] = useState({})
  const [data, setData] = useState({fullname:'',businessname:'',email:'',number:'',industry:'',web:'',address:''})


  const router = useRouter();

  useEffect(()=>{
    let prizeStored = JSON.parse(localStorage.getItem('software')); //{description:'',number:0}
    if( prizeStored.description?.length == 0 || prizeStored == 'undefined'){
      setPrize({description:'',number:0})
    }else{
      setPrize(prizeStored)
    }

    let dataStored = JSON.parse(localStorage.getItem('data'));
    if( dataStored.fullname?.length == 0 || dataStored.email.length == 0 || dataStored == 'undefined'){
      setData({fullname:'none',businessname:'none',email:'none',number:'none',industry:'none',web:'none',address:'none'})
    }else{
      setData({...data, fullname: dataStored.fullname , businessname: dataStored.businessname, email: dataStored.email, number: dataStored.number})
    }    

  },[])

  const changePeriod = (e) => {
    setPeriod(e.target.value);
  };
  const changepack = (e) => {
    setPackages(e.target.value);
  };

  useEffect(() => {
    if (packages === "Silver") {
      if (period === "Monthly") {
        setTotal(29.99);
      } else {
        setTotal(79.99);
      }
    } else if (packages == "Gold") {
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const numberRegex = /^0[127]\d{9}$/;

    if( 
      data.fullname.length == 0 || 
      data.businessname.length == 0 || 
      data.email.length == 0 || 
      data.number.length == 0 ||
      data.industry.length == 0 ||
      // data.web.length == 0 ||
      data.address.length == 0 
      ){
        alert('Complete the fields')
      } else if (!emailRegex.test(data.email)) {
      alert('Invalid email');
      } else if (!numberRegex.test(data.number)) {
        alert('Invalid number')
      } else{    
        localStorage.setItem('data', JSON.stringify(data));
        router.push('/funnel/referal');
      }
  }


  const handleChange = (e) =>{
    setData({...data , [e.target.name]:e.target.value})
  }

  return (
    <div className="flex flex-col mx-5 my-4 pb-2 items-center bg-white rounded-lg shadow-md relative">
      <p className="fontTitle text-center colorPrimary">
        Get Your Free Software Subscription
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


      <p className="fontAlternative" style={{paddingBottom: "0"}}>{prize.description} <br />Software Subscription</p>

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

      
      <p className="fontAlternative" style={{paddingBottom: "0"}}>Price After Free Trial</p>
      <table className="w-full">
        <thead>
          <tr className="border-t">
            <th className="resize-text py-1 px-0">Package</th>
            <th className="resize-text py-1 px-0">Component</th>
            <th className="resize-text py-1 px-0">Monthly</th>
            <th className="resize-text py-1 px-0">Quarterly</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-neutral-200">
            <td className="resize-text py-1 px-0">Silver</td>
            <td className="resize-text py-1 px-0">Database + 1</td>
            <td className="resize-text py-1 px-0">&#163;29.99</td>
            <td className="resize-text py-1 px-0">&#163;79.99</td>
          </tr>
          <tr>
            <td className="resize-text py-1 px-0">Gold</td>
            <td className="resize-text py-1 px-0">Database + 3</td>
            <td className="resize-text py-1 px-0">&#163;49.99</td>
            <td className="resize-text py-1 px-0">&#163;135</td>
          </tr>
          <tr className="border-b bg-neutral-200">
            <td className="resize-text py-1 px-0">Diamond</td>
            <td className="resize-text py-1 px-0">All 8</td>
            <td className="resize-text py-1 px-0">&#163;59.99</td>
            <td className="resize-text py-1 px-0">&#163;155</td>
          </tr>
        </tbody>
      </table>
      <div className=" text-center">
        <p className="fontAlternative" style={{paddingBottom: "4px"}}>Please provide required information</p>
        {/* <p className="text-xs"> * marked fields are mandatory</p> */}
      </div>
      <p className="fontGeneral mb-4" style={{textAlign: 'center'}}>
        Your free trial will end on{" "}
        <span className="font-semibold">{prize.date}</span>{" "}
      </p>
      <p className="fontGeneral mb-2" style={{textAlign: 'center'}}>
        Please choose your Package after free trial period:
      </p>
      <div className="flex gap-4 fontGeneral">

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
            Your 1st payment will be due on Mon Nov 20 2023 for{" "}
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
          Industry *
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
          Watch the video to fully <br />understand the benefits!
        </button>
      </form>
    </div>
  );
};

export default SoftwareSubscription;
