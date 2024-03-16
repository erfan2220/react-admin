//@ts-nocheck
import "./Task.css"
import {useState} from "react";

import { useTranslation } from 'react-i18next';

const Task = () =>
{
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [schedule,setSchedule]=useState(false)
    return (
      <div>
          <div className="Task_Container">
              <div className="Item_task_left">
                  <img src="./Calendar_Task.svg" alt="" width={24} height={24}/>
                  <span>Task Schadule</span>
              </div>

              <div className="Item_task_right" onClick={() => {
                  setSchedule(true)
              }}>
                  <img src="./Calendar_button.svg" alt=""/>
                  <span>Schedule</span>
              </div>
          </div>
          <div className="Task_Container_Schedule">
              <div className="Task_Container_header">
                  <span>Tasks</span>
              </div>

              <div className="No_Task_Container">
                  <img src="./No_Task.svg" alt="" width={214} height={159}/>
                  <div className="No_Task_text">
                      <h2>There is no task here!</h2>
                      <p>you should first create and schedule a task by clicking schedule button </p>
                  </div>
              </div>


              {schedule && (
                  <div>
                      <div className="schedule_form_background">


                      </div>
              <div className="schedule_form_container">
                  <div className="schedule_first_row">
                      <div className="schedule_items">
                          <label htmlFor="">Destination IP</label>
                          <input type="text"/>
                      </div>

                      <div className="schedule_items">
                          <label htmlFor="">Port</label>
                          <input type="text"/>
                      </div>

                  </div>

                  <div className="schedule_items">
                      <label htmlFor="">Destination Path</label>
                      <input type="text"/>
                  </div>

                  <div className="schedule_items">
                      <label htmlFor="">Source File Name</label>
                      <input type="text"/>
                  </div>

                  <div className="schedule_items">
                      <label htmlFor="">Schedule Time</label>
                      <input type="text"/>
                  </div>

                  <div className="schedule_items">
                      <label htmlFor="">Username</label>
                      <input type="text"/>
                  </div>

                  <div className="schedule_items">
                      <label htmlFor="">Password</label>
                      <input type="text"/>
                  </div>

                  <div className="buttons_schedule">
                      <button id="Cancel_schedule" onClick={()=>{
                          setSchedule(false)
                      }}>Cancel</button>
                      <button id="Submit_schedule">Submit</button>

                  </div>
              </div>
                  </div>
                  )}


          </div>


      </div>
    );
};

export default Task;