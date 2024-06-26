// Sample data (replace with actual data from backend)
const counselors = [
    { id: 1, name: 'Dr. KK Mohanty', specialization: 'Psychologist', availability: 'Monday, Wednesday, Friday' },
    { id: 2, name: 'Dr. Rajesh Sharma', specialization: 'Therapist', availability: 'Tuesday, Thursday' }
];

const resources = [
    { id: 1, title: 'Managing Stress During COVID-19', url: 'https://example.com/article1' },
    { id: 2, title: 'Mindfulness Exercises for Beginners', url: 'https://example.com/article2' }
];

// Function to populate counselor list
function populateCounselorList() {
    const counselorList = document.querySelector('.counselor-list');
    counselorList.innerHTML = '';

    counselors.forEach(counselor => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${counselor.name}</h3>
            <p><strong>Specialization:</strong> ${counselor.specialization}</p>
            <p><strong>Availability:</strong> ${counselor.availability}</p>
            <a href="#" class="btn">Book Session</a>
        `;
        counselorList.appendChild(card);
    });
}

// Function to populate resource list
function populateResourceList() {
    const resourceList = document.querySelector('.resource-list');
    resourceList.innerHTML = '';

    resources.forEach(resource => {
        const item = document.createElement('div');
        item.classList.add('resource-item');
        item.innerHTML = `
            <h3><a href="${resource.url}" target="_blank">${resource.title}</a></h3>
        `;
        resourceList.appendChild(item);
    });
}

// Call functions to populate lists on page load
document.addEventListener('DOMContentLoaded', () => {
    populateCounselorList();
    populateResourceList();
});

// Sample data for success stories and news
const successStories = [
    { id: 1, name: 'Mr Debasis Sahu', story: 'I found great support on this platform and improved my mental health significantly.' },
    { id: 2, name: 'Miss Sania Dayal', story: 'The resources and counselors here are amazing. Highly recommend it!' }
];

const news = [
    { id: 1, title: 'New Research on Mental Health', url: 'https://example.com/news1' },
    { id: 2, title: 'Mental Health Awareness Month', url: 'https://example.com/news2' }
];

// Function to populate success stories
function populateSuccessStories() {
    const storiesList = document.querySelector('.stories-list');
    storiesList.innerHTML = '';

    successStories.forEach(story => {
        const item = document.createElement('div');
        item.classList.add('story-item');
        item.innerHTML = `
            <h3>${story.name}</h3>
            <p>${story.story}</p>
        `;
        storiesList.appendChild(item);
    });
}

// Function to populate news list
function populateNewsList() {
    const newsList = document.querySelector('.news-list');
    newsList.innerHTML = '';

    news.forEach(article => {
        const item = document.createElement('div');
        item.classList.add('news-item');
        item.innerHTML = `
            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
        `;
        newsList.appendChild(item);
    });
}

// Call functions to populate new sections on page load
document.addEventListener('DOMContentLoaded', () => {
    populateSuccessStories();
    populateNewsList();
});
//medication
function showNote(noteId) {
    const note = document.getElementById(noteId);
    if (note.style.display === "none") {
        note.style.display = "block";
    } else {
        note.style.display = "none";
    }
}