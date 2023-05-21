import React from 'react'
import styles from './Home.module.css'
import axios from 'axios'
import {useState, UseEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import fleche from '../img/fleche.png';
function Page() {



  const baseURL = "http://localhost:5000";
  const [databaseResponse1, setDatabaseResponse1] = useState(null);
  const [databaseResponse2, setDatabaseResponse2] = useState(null);
  const [databaseResponse3, setDatabaseResponse3] = useState(null);
  const [databaseResponse4, setDatabaseResponse4] = useState(null);
  const [databaseResponse5, setDatabaseResponse5] = useState(null);
  const [databaseResponse6, setDatabaseResponse6] = useState(null);
  const [databaseResponse7, setDatabaseResponse7] = useState(null);

  const [form1Data, setForm1Data] = useState({
    answer: '',
    question: 'من هي اول سلالة حكمت المغرب ؟ومن هو مؤسسها ؟',
  });

  const [form2Data, setForm2Data] = useState({
    answer: '',
    question: 'من هو مؤسس الدولة العلوية؟',
  });

  const [form3Data, setForm3Data] = useState({
    answer: '',
    question: 'ما هي مدة حكم الدولة المرينية؟',
  });

  const [form4Data, setForm4Data] = useState({
    answer: '',
    question: 'من هو مؤسس السلالة المرينية؟',
  });
  const [form5Data, setForm5Data] = useState({
    answer: '',
    question: 'متى وماهي مدة نفي محمد الخامس؟',
  });

  const [form6Data, setForm6Data] = useState({
    answer: '',
    question: 'متى تولى الملك محمد الخامس الحكم؟',
  });
  const [form7Data, setForm7Data] = useState({
    answer: '',
    question: 'من السلالات التي حكمت المغرب؟',
  });
  const res1=''
  const handleSubmit = async (e, formName) => {
   

    try {
    

      if (formName === 'form1') {
      
        axios.post(baseURL, form1Data,)
        .then((response) => {
          setDatabaseResponse1(response.data);
          console.log(response.data)})
        .catch((error) => console.log(error));
        console.log(form1Data.question+": "+ form1Data.answer)
      
      } else if (formName === 'form2') {
      
        axios.post(baseURL, form2Data,)
        .then((response) => {
          setDatabaseResponse2(response.data);
          console.log(response.data)})
        .catch((error) => console.log(error));
      }  else if (formName === 'form3') {
      
        axios.post(baseURL, form3Data,)
        .then((response) => {
          setDatabaseResponse3(response.data);
          console.log(response.data)})
        .catch((error) => console.log(error));
      }
      else if (formName === 'form4') {
      
        axios.post(baseURL, form4Data,)
        .then((response) => {
          setDatabaseResponse4(response.data);
          console.log(response.data)})
        .catch((error) => console.log(error));
      }
      else if (formName === 'form5') {
      
        axios.post(baseURL, form5Data,)
        .then((response) =>{
          setDatabaseResponse5(response.data);
          console.log(response.data)})
        .catch((error) => console.log(error));
      }else if (formName === 'form6') {
      
        axios.post(baseURL, form6Data,)
        .then((response) => {
          setDatabaseResponse6(response.data);
          console.log(response.data)})
        .catch((error) => console.log(error));
      }else if (formName === 'form7') {
      
        axios.post(baseURL, form7Data,)
        .then((response) => {
          setDatabaseResponse7(response.data);
          console.log(response.data)})
        .catch((error) => console.log(error));
      }

    
    } catch (error) {
     
    }
    e.preventDefault();
  };
  


  
   function handleClick(event) {
    event.preventDefault();
  }



  return (
    <div>

        <div className={styles.divform}>
       <form class="shadow p-3 mb-5 bg-white " className={styles.form} onSubmit={(e) => handleSubmit(e, 'form1')}>
       <label>من هي اول سلالة حكمت المغرب ؟ومن هو مؤسسها ؟</label>
        <textarea type="integer" class="form-control " value={form1Data.answer} onChange={(e) => setForm1Data( {... form1Data, answer: e.target.value}) }  /><br/>
        <button className={styles.but}>اضغط</button>
        
       </form>
       
       <div className={`shadow p-3 mb-5 bg ${styles.score}`}  >
        <div className={styles.spa}>{databaseResponse1}</div></div>
       <img src={fleche} className={styles.fleche} width={200} height={100}/>
       <form class="shadow p-3 mb-5 bg-white " className={styles.form} onSubmit={(e) => handleSubmit(e, 'form2')}>
       <label>من هو مؤسس الدولة العلوية؟</label>
        <textarea type="integer" class="form-control   "value={form2Data.answer} onChange={(e) => setForm2Data( {... form2Data, answer: e.target.value}) }/><br/>
        <button className={styles.but}>اضغط</button>
       </form>
       <div className={`shadow p-3 mb-5 bg ${styles.score}`} ><div className={styles.spa}>{databaseResponse2}</div></div>
       <img src={fleche} className={styles.fleche} width={200} height={100}/>
       <form class="shadow p-3 mb-5 bg-white " className={styles.form} onSubmit={(e) => handleSubmit(e, 'form3')}>
       <label>ما هي مدة حكم الدولة المرينية؟</label>
        <textarea type="integer" class="form-control   " value={form3Data.answer} onChange={(e) => setForm1Data( {... form3Data, answer: e.target.value}) } /><br/>
        <button className={styles.but}>اضغط</button>
       </form>
       <div className={`shadow p-3 mb-5 bg ${styles.score}`}  ><div className={styles.spa}>{databaseResponse3}</div></div>
       <img src={fleche} className={styles.fleche} width={200} height={100}/>
       <form class="shadow p-3 mb-5 bg-white " className={styles.form} onSubmit={(e) => handleSubmit(e, 'form4')}>
       <label>من هو مؤسس السلالة المرينية؟</label>
        <textarea type="integer" class="form-control   " value={form4Data.answer} onChange={(e) => setForm1Data( {... form4Data, answer: e.target.value}) } /><br/>
        <button className={styles.but}>اضغط</button>
       </form>
       <div  className={`shadow p-3 mb-5 bg ${styles.score}`}  ><div className={styles.spa}>{databaseResponse4}</div></div>
       <img src={fleche} className={styles.fleche} width={200} height={100}/>
       <form class="shadow p-3 mb-5 bg-white " className={styles.form} onSubmit={(e) => handleSubmit(e, 'form5')}>
       <label>متى وماهي مدة نفي محمد الخامس؟</label>
        <textarea type="integer" class="form-control   " value={form5Data.answer} onChange={(e) => setForm1Data( {... form5Data, answer: e.target.value}) } /><br/>
        <button className={styles.but}>اضغط</button>
       </form>
       <div className={`shadow p-3 mb-5 bg ${styles.score}`}  ><div className={styles.spa}>{databaseResponse5}</div></div>
       <img src={fleche} className={styles.fleche} width={200} height={100}/>
       <form class="shadow p-3 mb-5 bg-white " className={styles.form} onSubmit={(e) => handleSubmit(e, 'form6')}>
       <label>متى تولى الملك محمد الخامس الحكم؟</label>
        <textarea type="integer" class="form-control   " value={form6Data.answer} onChange={(e) => setForm1Data( {... form6Data, answer: e.target.value}) } /><br/>
        <button className={styles.but}>اضغط</button>
       </form>  
       <div  className={`shadow p-3 mb-5 bg ${styles.score}`}  ><div className={styles.spa}>{databaseResponse6}</div></div>
       <img src={fleche} className={styles.fleche} width={200} height={100}/>
       <form class="shadow p-3 mb-5 bg-white " className={styles.form} onSubmit={(e) => handleSubmit(e, 'form7')}>
       <label>من السلالات التي حكمت المغرب؟</label>
        <textarea type="integer" class="form-control   "value={form7Data.answer} onChange={(e) => setForm7Data( {... form7Data, answer: e.target.value}) } /><br/>
        <button className={styles.but}>اضغط</button>
       </form>  
      <div className={`shadow p-3 mb-5 bg ${styles.score}`}   ><div className={styles.spa}>{databaseResponse7}</div></div>     
      <img src={fleche} className={styles.fleche} width={200} height={100}/>
        </div>    </div>
  )
}

export default Page
