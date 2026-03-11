<script>
    const firebaseConfig = {
        apiKey: "AIzaSyATfY1TGL01-VVFdBwfbZ65-ctXtkYufzI",
        authDomain: "message-505ba.firebaseapp.com",
        projectId: "message-505ba",
        storageBucket: "message-505ba.firebasestorage.app",
        messagingSenderId: "712427275013",
        appId: "1:712427275013:web:a6a579f958815690b86d6c"
    };

    // בדיקה אם הדפדפן בכלל תומך בהתראות
    if (!('Notification' in window)) {
        document.getElementById('status').innerText = "הדפדפן הזה לא תומך בהתראות. נסי לפתוח בכרום או להוסיף למסך הבית.";
    } else {
        firebase.initializeApp(firebaseConfig);
        const messaging = firebase.messaging();

        messaging.getToken({ vapidKey: 'NH9xnzPfdIK_QLxKGmX9ErMYzDIBuAIzK2crtUEhmTU' })
            .then((currentToken) => {
                if (currentToken) {
                    document.getElementById('status').innerText = "המפתח מוכן! ✅ לחצי על כפתור שלב 1 כדי להעתיק.";
                    window.myToken = currentToken;
                }
            }).catch((err) => {
                document.getElementById('status').innerText = "שגיאה: " + err;
            });
    }

    function copyToken() {
        if(window.myToken) {
            navigator.clipboard.writeText(window.myToken);
            alert("המפתח הועתק! שלחי אותו לירדן בוואטסאפ כדי שנוכל לחבר את המכשירים.");
        } else {
            alert("עדיין אין מפתח. ודאי שאישרת התראות בדפדפן.");
        }
    }

    function sendToFirebase(msg) {
        alert("הודעה נשלחה (בכאילו): " + msg + "\nבשלב הבא נחבר את זה לשליחה אמיתית לירדן!");
    }
</script>
