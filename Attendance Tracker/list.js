// Fire base sdk import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// Firebase Configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCfxCi77icybs3eHX9vvYZFoOk057O6Jxc",
      authDomain: "myloginpage-460dc.firebaseapp.com",
      projectId: "myloginpage-460dc",
      storageBucket: "myloginpage-460dc.appspot.com",
      messagingSenderId: "131030770903",
      appId: "1:131030770903:web:eb760494e216e67855bc92",
      measurementId: "G-LHP2QMNZBT"
    };

    // Initialize fire base app
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);
        const entryList = document.getElementById('entryList');
        const listDate = document.getElementById('listDate');
        const datePicker = document.getElementById('datePicker'); // get the date picker
        const loadEntriesBtn = document.getElementById('loadEntriesBtn');

        // load entries when date is selected
        loadEntriesBtn.addEventListener('click', ()=>{
            const selectedDate = datePicker.value;
            if(selectedDate){
                const entriesRef = ref(database, `entries/${selectedDate}`);
                listDate.textContent = `Entries for ${selectedDate}`; // Show selected date

                onValue(entriesRef, (snapshot) => {
                    entryList.innerHTML = "";
                    if(snapshot.exists()){
                        snapshot.forEach(child =>{
                            const entry = child.val();
                            const li = document.createElement('li');
                            li.innerHTML = `staff name: ${entry.staffName}<br> staff id: ${entry.staffId}`;
                            entryList.appendChild(li);
                        });
                    } else {
                        entryList.innerHTML = 'No entries found for this date'
                    }
                })
            }
        })