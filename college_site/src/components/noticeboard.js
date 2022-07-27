import React ,{ useState,useEffect } from "react";
import app from '../firebase'
import { getDatabase, onValue, ref, set } from "firebase/database";

const Noticeboard = () =>{
	const db = getDatabase(app)
	const read = ref(db,'Notifications/');
	const [tasks, setTasks] = useState([]);

    useEffect(() => {
        
        const listener = onValue(read, (snapshot) => {
            const fetchedTasks = [];
            snapshot.forEach(childSnapshot => {
                
                const data = childSnapshot.val().Title;
				console.log(data)
                fetchedTasks.push(data);
            });
            setTasks(fetchedTasks);
        });
        
    }, []);
	
    return (
        <div class="card card-home " >
									<div class="card-title tg-widgettitle">
										<h3 class='text-center'>Notice Board</h3>  
									</div>
									<div class=" card-body tg-widgetcontent">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Search Notification" aria-label="Search_Notification" aria-describedby="basic-addon1"/>
                                        </div>
										<ul class='list-group list-group-flush'>
											{tasks.map(
												(task)=>(
												<li class='list-group-item'>
												<a href="javascript:void(0);">{task}</a>
											</li>
												)
											)}
										</ul>
									</div>
								</div>
    )
}


export default Noticeboard;
