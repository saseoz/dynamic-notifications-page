let notifications = [
    {
        avatar: "assets/images/avatar-mark-webber.webp",
        name: "Mark Webber",
        action: " reacted to your recent post ",
        descr: "My first tournament today!",
        time: "5m ago",
        condition: "unread"
    },
    {
        avatar: "assets/images/avatar-angela-gray.webp",
        name: "Angela Gray",
        action: " followed you",
        time: "5m ago",
        condition: "unread"
    },
    { 
        avatar: "assets/images/avatar-jacob-thompson.webp",
        name: "Jacob Thompson",
        action: " has joined your group ",
        descr: "Chess Club",
        time: "1 day ago",
        condition: "unread"
    },
    { 
        avatar: "assets/images/avatar-rizky-hasanuddin.webp",
        name: "Rizky Hasanuddin",
        action: " sent you a private message",
        time: "5 days ago",
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."

    },
    { 
        avatar: "assets/images/avatar-kimberly-smith.webp",
        name: "Kimberly Smith",
        action: " commented on your picture",
        time: "1 week ago",
        pic: "assets/images/image-chess.webp"
    },
    { 
        avatar: "assets/images/avatar-nathan-peterson.webp",
        name: "Nathan Peterson",
        action: " reacted to your recent post ",
        descr: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago"
    },
    { 
        avatar: "assets/images/avatar-anna-kim.webp",
        name: "Anna Kim",
        action: " left the group ",
        descr: "Chess Club",
        time: "2 weeks ago"
    }
  ];

let notifContainer = document.getElementById("notifications-container");

notifications.forEach(function(notification) {
    let notifElement = document.createElement("div");
    notifElement.classList.add("notification");
    if (notification.condition === 'unread') {
        notifElement.classList.add("notification--unread");
    }
    notifElement.innerHTML = `
        <div class="notification__avatar-wrap">
            <img src="${notification.avatar}" alt="">
        </div>
        <div class="notification__content-wrap">
            <div class="notification__info-wrap">
                <div class="notification__text">
                    <div>
                    <span class="notification__name"><a href="#">${notification.name}</a></span>
                    ${notification.action ? `<span class="notification__action">${notification.action}</span>` : ''}
                    ${notification.descr ? `<span class="notification__descr"><a href="#">${notification.descr}</a></span>` : ''}
                    ${notification.condition ? `<div class="notification__dot"></div>` : ''}
                    <div class="notification__time">${notification.time}</div>
                    </div>
                </div>
                ${notification.pic ? `<div class="notification__picture-wrap"><img src="${notification.pic}" alt=""></div>` : ''}
            </div>
            
            ${notification.message ? `<a href="#"><div class="notification__message-wrap"><p class="notification__message">${notification.message}</p></div></a>` : ''}
        </div>
    `;

    notifContainer.appendChild(notifElement);
})
const readBtn = document.getElementById("read-btn");
const count = document.getElementById("count");
const dots = document.querySelectorAll(".notification__dot");
const notif = document.querySelectorAll(".notification");
const unreadNotif = document.querySelectorAll(".notification--unread");


readBtn.addEventListener("click", function() {
    count.innerText = 0;
    dots.forEach(dot => {
        dot.classList.add("hide");
    });

    notif.forEach(function(n) {
        n.classList.remove("notification--unread");
    });
    
})

unreadNotif.forEach(function(unread) {
    unread.addEventListener("click", function() {
        
        if (unread.classList.contains("notification--unread") && !unread.classList.contains("notification--clicked")) {
            
            let currentCount = parseInt(count.innerText);
            currentCount -= 1;
            if (currentCount < 0) {
                currentCount = 0;
            }
            count.innerText = currentCount;

            unread.classList.remove("notification--unread");
            
            const dot = unread.querySelector(".notification__dot");
            dot.classList.add("hide");
            
            unread.classList.add("notification--clicked");
        }
    });
});
