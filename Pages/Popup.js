import React, { useState, useEffect } from 'react';
import img1 from '../image/Wrong.png';

const Popup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        product: '',
        msg: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 2000); // Show popup after 2 seconds

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Handle form data here (e.g., send to server)
        console.log(formData); // Example: log form data to console
        setShowPopup(false); // Close the popup
    };

    return (
        <div>
        <div className='hidden sm:block'>   
            {showPopup && (
                <div style={{
                    position: 'fixed',
                    width:'500px',
                    top: '80px',
                    right: '500px',
                    borderColor:'#2C041E',
                    backgroundColor: '#fff',
                    padding: '35px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    zIndex: 1000,
                }}>
                    {/* Close Button */}
                    <button 
                        onClick={() => setShowPopup(false)} 
                        className='close-button' 
                        style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
                    >
                        <img src={img1} alt=''/>
                    </button>

                    <form onSubmit={handleSubmit}>
                    <div className=' py-1'>
                    <div className=''>
                    <label className='block font-bold mb-1' htmlFor='name' style={{ color: '#2C041C', fontSize:'15px' }}>Name</label>
                    <input className='appearance-none rounded-md px-2 mt-1' style={{width:'360.996px', height:'45px',boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", outline:'none' }} id='name' name='name' type='text' placeholder='' value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className=''>
                    <label className='block font-bold mt-3' htmlFor='email' style={{ color: '#2C041C', fontSize:'16px' }}>Email</label>
                    <input className='appearance-none rounded-md px-2 mt-1' style={{width:'360.996px', height:'45px',boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", outline:'none' }} id='email' name='email' type='email' placeholder='' value={formData.email} onChange={handleInputChange} required />
                  </div>
                </div>
                  <div className=''>
                    <label className='block text-black font-bold mt-3' htmlFor='phoneNumber' style={{ color: '#2C041C' }}>Phone Number</label>
                    <input className='appearance-none rounded-md px-2 mt-1  ' style={{ width:'360.996px', height:'45px',boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", outline:'none'}} id='phoneNumber' name='phoneNumber' type='tel' placeholder='' value={formData.phoneNumber} onChange={handleInputChange} required />
                  </div>
                  <div className=''>
                    <label className='block text-black font-bold mt-3' htmlFor='product' style={{ color: '#2C041C' }}>Product (optional)</label>
                    <input className='appearance-none rounded-md px-2 mt-1 ' style={{width:'360.996px', height:'45px',boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", outline:'none'}} id='product' name='product' type='text' placeholder='' value={formData.product} onChange={handleInputChange} />
                  </div>
                  <div className=''>
                    <label className='block font-bold mt-3' htmlFor='msg' style={{ color: '#2C041C' }}>Your Message</label>
                    <input className='appearance-none px-2 rounded-md mt-1' style={{width:'360.996px', height:'100px',boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", outline:'none'}} id='msg' name='msg' type='text' placeholder='' value={formData.msg} onChange={handleInputChange} required />
                  </div>
                        <button className='justify-center font-bold mt-5 mb-4 py-2 px-7 rounded-full' type='submit' style={{ backgroundColor: '#2C041C', color:'#FFBE2A' }}>
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </div>
        <div className='md:hidden'>   
            {showPopup && (
                <div style={{
                    position: 'fixed',
                    width:'300px',
                    left:'57px',
                    top: '80px',
                    backgroundColor: '#fff',
                    border:'',
                    borderColor:'#2C041E',
                    padding: '15px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    zIndex: 1000,
                }}>
                    {/* Close Button */}
                    <button 
                        onClick={() => setShowPopup(false)} 
                        className='close-button' 
                        style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
                    >
                        <img src={img1} alt=''/>
                    </button>

                    <form onSubmit={handleSubmit}>
                    <div className=' py-1'>
                    <div className=''>
                    <label className='block font-bold mb-1' htmlFor='name' style={{ color: '#2C041C', fontSize:'15px' }}>Name</label>
                    <input className='appearance-none rounded-md px-2 mt-2' style={{width:'210px', height:'40px',boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", outline:'none' }} id='name' name='name' type='text' placeholder='' value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className=''>
                    <label className='block font-bold mt-3' htmlFor='email' style={{ color: '#2C041C', fontSize:'16px' }}>Email</label>
                    <input className='appearance-none rounded-md px-2 mt-2' style={{width:'210px', height:'40px',boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", outline:'none' }} id='email' name='email' type='email' placeholder='' value={formData.email} onChange={handleInputChange} required />
                  </div>
                </div>
                  <div className=''>
                    <label className='block text-black font-bold mt-3' htmlFor='phoneNumber' style={{ color: '#2C041C' }}>Phone Number</label>
                    <input className='appearance-none rounded-md px-2 mt-2  ' style={{ width:'210px', height:'40px',boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",outline:'none'}} id='phoneNumber' name='phoneNumber' type='tel' placeholder='' value={formData.phoneNumber} onChange={handleInputChange} required />
                  </div>
                  <div className=''>
                    <label className='block text-black font-bold mt-3' htmlFor='product' style={{ color: '#2C041C' }}>Product (optional)</label>
                    <input className='appearance-none rounded-md px-2 mt-2 ' style={{width:'210px', height:'40px',boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", outline:'none'}} id='product' name='product' type='text' placeholder='' value={formData.product} onChange={handleInputChange} />
                  </div>
                  <div className=''>
                    <label className='block font-bold mt-3' htmlFor='msg' style={{ color: '#2C041C' }}>Your Message</label>
                    <input className='appearance-none px-2 rounded-md mt-2' style={{width:'210px', height:'100px',boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", outline:'none'}} id='msg' name='msg' type='text' placeholder='' value={formData.msg} onChange={handleInputChange} required />
                  </div>
                        <button className='justify-center font-bold mt-5 mb-4 py-2 px-7 rounded-full' type='submit' style={{ backgroundColor: '#2C041C', color:'#FFBE2A' }}>
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </div>
        </div>
    );
};

export default Popup;