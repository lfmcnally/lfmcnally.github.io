// Reviews data for Classicalia
// Add new reviews to this array - they will automatically appear in the carousel

const reviewsData = [
    {
        name: "Sacha",
        role: "Freelance Tutor - Latin/Classical Civilisation/English",
        text: "Classicalia has been a fantastic resource to help me navigate teaching Latin GCSE for the first time as a freelance tutor. The website provides an abundance of helpful resources and interactive texts that are incredibly user friendly and laid out in a clear, coherent and engaging way. Lawrence himself has been extremely helpful and generous in his guidance!"
    },
    // Add more reviews here following the same format:
    // {
    //     name: "Your Name",
    //     role: "Your Role/Institution", 
    //     text: "Your review text here..."
    // }
];

// Function to get all reviews
function getReviews() {
    return reviewsData;
}

// Function to get total number of reviews
function getTotalReviews() {
    return reviewsData.length;
}
