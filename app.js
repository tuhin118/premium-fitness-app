// FitX Pro Notification System

async function enableNotifications() {
    if (!("Notification" in window)) {
        alert("এই ব্রাউজার Notification সাপোর্ট করে না।");
        return;
    }

    const permission = await Notification.requestPermission();

    if (permission === "granted") {
        new Notification("FitX Pro", {
            body: "Notifications are now enabled! 🔥"
        });

        localStorage.setItem("notificationsEnabled", "true");
    } else {
        alert("Notification permission দেওয়া হয়নি।");
    }
}

function sendWorkoutNotification() {
    if (Notification.permission === "granted") {
        new Notification("FitX Pro 💪", {
            body: "আজকের workout করার সময় হয়েছে!"
        });
    }
}

function scheduleWorkoutReminder(minutes = 1) {
    setTimeout(() => {
        sendWorkoutNotification();
    }, minutes * 60 * 1000);
}
