import React from 'react'
import './Login.css';
import Swal from 'sweetalert2'

const Login = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "85b57014-4024-4ccc-81ab-9278e49722e9");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
            title: "Kerja bagus!",
            text: "Terima kasih udh isi form ini!",
            icon: "success"
          });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

  return (
    <section className='contact'>
        <form onSubmit={onSubmit}>
            <h2>Isi Form</h2>
            <div className='input-box'>
                <label>Nama:</label>
                <input type='text' className='field' placeholder='isi nama' name='nama' required />
            </div>
            <div className='input-box'>
                <label>Email:</label>
                <input type='emaik' className='field' placeholder='isi email' name='email' required />
            </div>
            <div className='input-box'>
                <label>Pesan:</label>
                <textarea className='field mess' name='message'  placeholder='isi pesan' required></textarea>
            </div>
            <button type='submit'>Kirim Pesan</button>
        </form>
    </section>
  )
}

export default Login
