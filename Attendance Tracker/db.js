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
    
    // Format todays date and time
    const now = new Date();
    const today = now.toISOString().slice(0, 10) // get current date
    const hour = now.getHours()
    const minutes = now.getMinutes.toString().padStart(2, '0');
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12; // Formats hour to 12 instead of 24
    const entriesRef = ref(database, `entries/${today}`);

    // Submit Form
    document.getElementById('attendanceForm').addEventListener('submit', function(e) {
      e.preventDefault(); // prevent default disables refresh on submit

      // get inputs
      const staffName = document.getElementById('staffName').value.trim();
      const staffId = document.getElementById('staffId').value.trim();
      const time = `${formmatedHour}: ${minutes}${ampm}`

      if(staffName && staffId){
        push(entriesRef, {
          staffName,
          staffId,
          time
        });
        this.reset()
      }
    })

    //Display entries
    const entryList = document.getElementById('entryList');

    onValue(entriesRef, (snapshot) => {
      entryList.innerHTML = '';
      snapshot.forEach(child => {
        const entry = child.val();
        const li = document.createElement('li');
        li.textContent = `${entry.staffName} - ${entry.staffId}`;
        entryList.appendChild(li);
      })
    })