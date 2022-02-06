const btnaddStudent = document.querySelector("#btn-add-student");
const btnremoveStudent = document.querySelector("#btn-remove-student");
const btnmarkAttendance = document.querySelector("#btn-mark-attendance");

const addStudentDiv = document.querySelector(".add-student-div");
const removeStudentDiv = document.querySelector(".remove-student-div");
const markAttendanceDiv = document.querySelector(".mark-attendance-div");

const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const markAtd = document.querySelector("#submit-atd");

const addMsg = document.querySelector(".add-msg");
const removeMsg = document.querySelector(".remove-msg");
const atdMsg = document.querySelector(".atd-msg");

addStudentDiv.style.display = "none";
removeStudentDiv.style.display = "none";
markAttendanceDiv.style.display = "none";
addMsg.style.display = "none";
removeMsg.style.display = "none";
atdMsg.style.display = "none";

const Name = document.querySelector("#name");
const divison = "A";
const month = 1;
const present = 0;
const absent = 0
const record = "na"

add.addEventListener("click", ()=>{
    addStudent();
  //  console.log(JSON.parse(localStorage.getItem("accessToken")).token);
    addMsg.style.display = "block";
})

remove.addEventListener("click", ()=>{
    removeStudent();
   // console.log(JSON.parse(localStorage.getItem("accessToken")).token);
    removeMsg.style.display = "block";
})

markAtd.addEventListener("click", ()=>{
    markAttendance();
  //  console.log(JSON.parse(localStorage.getItem("accessToken")).token);
    atdMsg.style.display = "block";
})

btnaddStudent.addEventListener("click",()=>{
    addStudentDiv.style.display = "flex";
    removeStudentDiv.style.display = "none";
    markAttendanceDiv.style.display = "none";

});

btnremoveStudent.addEventListener("click",()=>{
    removeStudentDiv.style.display = "flex";
    markAttendanceDiv.style.display = "none";
    addStudentDiv.style.display = "none";

});

btnmarkAttendance.addEventListener("click",()=>{
    removeStudentDiv.style.display = "none";
    markAttendanceDiv.style.display = "flex";
    addStudentDiv.style.display = "none";
});

async function addStudent(){
    try{

        const response = await axios.get("https://attendanceTracker.kk-001.repl.co/student",{
            name: Name.value, 
            div: divison,
            month: month,
            present: present,
            absent: absent,
            record: record
            
        },
         { withCredentials: true, headers: { "x-access-token": `${JSON.parse(localStorage.getItem("accessToken")).token}` } },
        );
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}

async function removeStudent(){
    try{

        const response = await axios.get("https://attendanceTracker.kk-001.repl.co/student",{
            name: Name.value, 
            div: divison,
            month: month,
            present: present,
            absent: absent,
            record: record
            
        },
         { withCredentials: true, headers: { "x-access-token": `${JSON.parse(localStorage.getItem("accessToken")).token}` } },
        );
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}

async function markAttendance(){
    try{

        const response = await axios.get("https://attendanceTracker.kk-001.repl.co/student",{
            name: Name.value, 
            div: divison,
            month: month,
            present: present,
            absent: absent,
            record: record
            
        },
         { withCredentials: true, headers: { "x-access-token": `${JSON.parse(localStorage.getItem("accessToken")).token}` } },
        );
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}