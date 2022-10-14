import React from "react";
import { ref as refer, getStorage, getDownloadURL } from "firebase/storage"
import app from '../firebase';
import { useEffect, useState } from "react";


const Syllabus = ()=>{
    const storage = getStorage(app)
    

	const [co_s1, setCo_s1] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/COMPUTER/COMPUTER_1.pdf")).then((value) => {
			setCo_s1(value)
		})
	})
    const [co_s2, setCo_s2] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/COMPUTER/COMPUTER_2.pdf")).then((value) => {
			setCo_s2(value)
		})
	})
    const [co_s3, setCo_s3] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/COMPUTER/COMPUTER_3.pdf")).then((value) => {
			setCo_s3(value)
		})
	})
    const [co_s4, setCo_s4] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/COMPUTER/COMPUTER_4.pdf")).then((value) => {
			setCo_s4(value)
		})
	})

    const [c_s1, setC_s1] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Civil/Civil_1.pdf")).then((value) => {
			setC_s1(value)
		})
	})
    const [c_s2, setC_s2] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Civil/Civil_2.pdf")).then((value) => {
			setC_s2(value)
		})
	})
    const [c_s3, setC_s3] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Civil/Civil_3.pdf")).then((value) => {
			setC_s3(value)
		})
	})
    const [c_s4, setC_s4] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Civil/Civil_4.pdf")).then((value) => {
			setC_s4(value)
		})
	})

    const [e_s1, setE_s1] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Electrical/Electrical_1.pdf")).then((value) => {
			setE_s1(value)
		})
	})
    const [e_s2, setE_s2] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Electrical/Electrical_2.pdf")).then((value) => {
			setE_s2(value)
		})
	})
    const [e_s3, setE_s3] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Electrical/Electrical_3.pdf")).then((value) => {
			setE_s3(value)
		})
	})
    const [e_s4, setE_s4] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Electrical/Electrical_4.pdf")).then((value) => {
			setE_s4(value)
		})
	})
    const [ec_s1, setEc_s1] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/E_C/E_C_1.pdf")).then((value) => {
			setEc_s1(value)
		})
	})
    const [ec_s2, setEc_s2] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/E_C/E_C_2.pdf")).then((value) => {
			setEc_s2(value)
		})
	})
    const [ec_s3, setEc_s3] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/E_C/E_C_3.pdf")).then((value) => {
			setEc_s3(value)
		})
	})
    const [ec_s4, setEc_s4] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/E_C/E_C_4.pdf")).then((value) => {
			setEc_s4(value)
		})
	})

    const [m_s1, setM_s1] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Mechanical/Mechanical_1.pdf")).then((value) => {
			setM_s1(value)
		})
	})
    const [m_s2, setM_s2] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Mechanical/Mechanical_2.pdf")).then((value) => {
			setM_s2(value)
		})
	})
    const [m_s3, setM_s3] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Mechanical/Mechanical_3.pdf")).then((value) => {
			setM_s3(value)
		})
	})
    const [m_s4, setM_s4] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Mechanical/Mechanical_4.pdf")).then((value) => {
			setM_s4(value)
		})
	})
    return(
        <div>
            <h1>Syllabus</h1>
            <table>
                <tr>
                    <td>Civil</td>
                    <td><a href={c_s1}>Semester 1-2</a></td>
                    <td><a href={c_s2}>Semester 3-4</a></td>
                    <td><a href={c_s3}>Semester 5-6</a></td>
                    <td><a href={c_s4}>Semester 7-8</a></td>
                </tr>
                <tr>
                    <td>Computer</td>
                    <td><a href={co_s1}>Semester 1-2</a></td>
                    <td><a href={co_s2}>Semester 3-4</a></td>
                    <td><a href={co_s3}>Semester 5-6</a></td>
                    <td><a  href={co_s4}>Semester 7-8</a></td>
                </tr>
                <tr>
                    <td>Electronics and Communication</td>
                    <td><a href={ec_s1}>Semester 1-2</a></td>
                    <td><a href={ec_s2}>Semester 3-4</a></td>
                    <td><a href={ec_s3}>Semester 5-6</a></td>
                    <td><a  href={ec_s4}>Semester 7-8</a></td>
                </tr>
                <tr>
                    <td>Electronics</td>
                    <td><a href={e_s1}>Semester 1-2</a></td>
                    <td><a href={e_s2}>Semester 3-4</a></td>
                    <td><a href={e_s3}>Semester 5-6</a></td>
                    <td><a  href={e_s4}>Semester 7-8</a></td>
                </tr>
                <tr>
                    <td>Mechanical</td>
                    <td><a href={m_s1}>Semester 1-2</a></td>
                    <td><a href={m_s2}>Semester 3-4</a></td>
                    <td><a href={m_s3}>Semester 5-6</a></td>
                    <td><a  href={m_s4}>Semester 7-8</a></td>
                </tr>
            </table>
        </div>
    )
}

export default Syllabus;