import React from 'react';
import './Department.css'

const Departments = () => {
	return (
		<div className='Department container'>
			<h1>Administration</h1>
			<table className='table_dep table table-hover '>
				<caption className="caption">PERSONAL SECTION (PRINCIPAL OFFICE)</caption>
				<thead>

					<tr>
						<th scope='col'>S No.</th>
						<th scope='col'>Name </th>
						<th scope='col'>Post</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Dr. Sameru Sharma</td>
						<td>Principal</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Mr. Soma Kumar</td>
						<td>Private Secretary to Principal</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Mr. Dinesh Magotra</td>
						<td>P.A. to Principal</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Mr. Jatinder Antal</td>
						<td>Maintenance Assistant</td>
					</tr>
					<tr>
						<td>5</td>
						<td>Mr. Govind Kumar</td>
						<td>Lab Attendant</td>
					</tr>
					<tr>
						<td>6</td>
						<td>Mrs. Shafali Sanyal</td>
						<td>Lab Attendant</td>
					</tr>
					<tr>
						<td>7</td>
						<td>Mr. Virender Sethi</td>
						<td>Orderly</td>
					</tr>
					<tr>
						<td>8</td>
						<td>Mr. Janak Raj</td>
						<td>Orderly</td>
					</tr>
				</tbody>
			</table>
			<table className='table_dep table table-hover'>
				<caption className="caption">EXAMINATION SECTION</caption>
				<thead>

					<tr>
						<th>S No.</th>
						<th>Name </th>
						<th>Post</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Dr. Simmi Dutta</td>
						<td>I/C Examination</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Er. Surjeet Singh Ranyal</td>
						<td>SLT</td>
					</tr>

			</tbody>
			</table>

			<table className='table_dep table table-hover'>
				<caption className="caption">REGISTRAR SECTION</caption>
				<thead>

					<tr>
						<th>S No.</th>
						<th>Name </th>
						<th>Post</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>
							Mrs. Vinakshi Koul, KAS</td>
						<td>Registrar</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Mrs. Phoola Koul</td>
						<td>Assistant Registrar</td>
					</tr>
					<tr>
						<td>3</td>
						<td>
							Mrs. Raj Kumari</td>
						<td>Section Officer (Administration)
						</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Mrs. Shanta Kumari</td>
						<td>Section Officer (Academics)</td>
					</tr>
					<tr>
						<td>5</td>
						<td>Mrs. Anjali Bhat</td>
						<td>
							Section Officer (Academics)</td>
					</tr>
					<tr>
						<td>6</td>
						<td>
							Mr. Rajinder Singh</td>
						<td>Section Officer (Establishment)</td>
					</tr>
					<tr>
						<td>7</td>
						<td>
							Mrs. Raj Rani</td>
						<td>Jr. Stenographer</td>
					</tr>
					<tr>
						<td>8</td>
						<td>Mr. Vikrant Jamwal</td>
						<td>
							Head Assistant</td>
					</tr>
					<tr>
						<td>9</td>
						<td>Mr. Jagmohan</td>
						<td>Workshop / Lab Assistant</td>
					</tr>
					<tr>
						<td>10</td>
						<td>
							Mr. Ajit Paul Singh</td>
						<td>Workshop / Lab Assistant</td>
					</tr>
					<tr>
						<td>11</td>
						<td>
							Mrs. Gulshan Devi</td>
						<td>
							Jr. Assistant</td>
					</tr>
					<tr>
						<td>12</td>
						<td>Mrs. Kamlesh Kumari</td>
						<td>Jr. Assistant</td>
					</tr>
					<tr>
						<td>13</td>
						<td>Mrs. Tilak Raj</td>
						<td>
							Lab Attendant</td>
					</tr>
					<tr>
						<td>14</td>
						<td>Mr. Murad Ali</td>
						<td>Orderly</td>
					</tr>
					<tr>
						<td>15</td>
						<td>Mr. Karim Baksh</td>
						<td>Orderly</td>
					</tr>
			</tbody>
			</table>
			<table className='table_dep table table-hover'>
				<caption className="caption">LIBRARY SECTION</caption>
				<thead>

					<tr>
						<th>S No.</th>
						<th>Name </th>
						<th>Post</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>
							Mr. Ranjan Singh</td>
						<td>Librarian</td>
					</tr>
					<tr>
						<td>2</td>
						<td>
							Mr. Sumit Kumar</td>
						<td>Sr. Lab Technician</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Mrs. Nidhi Sharma</td>
						<td>Jr. Assistant</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Mr. Ashish Gupta</td>
						<td>Lab Attendant</td>
					</tr>

			</tbody>
			</table>
			<table className='table_dep table table-hover'>
				<caption className="caption">ACCOUNTS SECTION</caption>
				<thead>

					<tr>
						<th>S No.</th>
						<th>Name </th>
						<th>Post</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>
							Mrs. Sunita Kumari Dhar</td>
						<td>Accounts Officer</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Mr. Ram Dass Sharma</td>
						<td>Assistant Accounts Officer</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Mr. Sunil Kumar Sharma</td>
						<td>Senior Assistant / Cashier</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Mr. Hitesh Kumar</td>
						<td>Jr. Assistant</td>
					</tr>
					<tr>
						<td>5</td>
						<td>Mr. Surinder Lal</td>
						<td>
							Workshop Lab Attendant</td>
					</tr>

			</tbody>
			</table>
			<table className='table_dep table table-hover'>
				<caption className="caption">SECURITY SECTION</caption>
				<thead>

					<tr>
						<th>S No.</th>
						<th>Name </th>
						<th>Post</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>
							Sh. Vishal Vaidr</td>
						<td>I/C Securityr</td>
					</tr>
			</tbody>
			</table>
		</div>

	);
}
export default Departments;

