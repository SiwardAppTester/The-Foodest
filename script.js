// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgl3ru_osa2zkGWDaSea-qBb3R_qEvTko",
    authDomain: "thefoodest-cc31a.firebaseapp.com",
    databaseURL: "https://thefoodest-cc31a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "thefoodest-cc31a",
    storageBucket: "thefoodest-cc31a.appspot.com",
    messagingSenderId: "212339724397",
    appId: "1:212339724397:web:a88a270834d26953d2f64",
    measurementId: "G-H4ZS4CLTSM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = firebase.firestore();

// Handle form submission
document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email-input').value;
    const signupMessage = document.getElementById('signup-message');
    
    // Add email to Firestore
    db.collection('emails').add({
        email: email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        signupMessage.textContent = 'Thank you for signing up!';
        signupMessage.style.color = '#ffffff';
        document.getElementById('email-input').value = '';
    })
    .catch((error) => {
        console.error("Error adding email: ", error);
        signupMessage.textContent = 'An error occurred. Please try again.';
        signupMessage.style.color = '#ef4444';
    });
});

document.getElementById('menu-icon').addEventListener('click', function() {
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.classList.toggle('active');
});


// Smooth scroll function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('#earn-while-you-dine .card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});