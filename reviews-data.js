// Reviews data for Classicalia
// Add new reviews to this array - they will automatically appear in the carousel

const reviewsData = [
    {
        name: "Sacha",
        role: "Freelance Tutor - Latin/Classical Civilisation/English",
        text: "Classicalia has been a fantastic resource to help me navigate teaching Latin GCSE for the first time as a freelance tutor. The website provides an abundance of helpful resources and interactive texts that are incredibly user friendly and laid out in a clear, coherent and engaging way. Lawrence himself has been extremely helpful and generous in his guidance!"
    },

    {
        name: "Rosalind",
        role: "Colchester Royal Grammar School",
        text: "The GCSE Tacitus set text resources are amazing, particularly for SEND students who can refer back to them and go over lessons at home. Lifesaver tbh! [...] Thank you for your hard work!"
    },
    {
        name: "The Classical Association",
        role: "Professional Organisation for Classics Education",
        text: "Lawrence radiates the generous spirit of the Classics teaching community and deserves to be recognised for his significant achievements. He has made syllabus-linked student workbooks for A Level Classical Civilisation and GCSE Latin which he hosts, for free, on his personal website. These are high quality resources which make a real difference to students and teachers alike."
    }
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
