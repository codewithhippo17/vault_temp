
```dataviewjs
// Configuration object for the progress bar
const config = {
    progressColor: "#4caf50", // Color of the progressed section
    unprogressedColor: "#d3d3d3", // Color of the unprogressed section
    fadeDuration: 1000 // Fade-in duration in milliseconds
};

// Function to get the current progress of the day
function getDayProgress() {
    const now = DateTime.now();
    return (now.hour / 24) * 100; // Calculate the percentage of the day that has passed
}

// Function to create a fade-in effect for elements
function fadeIn(element, duration) {
    element.style.opacity = 0;
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    element.style.display = 'block'; // Ensure visibility
    setTimeout(() => {
        element.style.opacity = 1; // Set opacity to 1 to fade in
    }, 50); // Slight delay to ensure transition takes effect
}

// Function to render the progress bar
function renderProgressBar() {
    // Create a container for the progress bar
    const progressBarContainer = document.createElement('div');
    progressBarContainer.id = 'progress-bar-container';
    progressBarContainer.style.width = '100%'; // Set container to full width
    progressBarContainer.style.maxWidth = '750px'; // Set a maximum width for larger screens
    progressBarContainer.style.margin = 'auto';
    progressBarContainer.style.textAlign = 'center';

    // Create the progress bar element
    const progressBar = document.createElement('progress');
    progressBar.id = 'daily-progress';
    progressBar.max = 100;
    progressBar.value = parseInt(getDayProgress());
    progressBar.style.width = '100%'; // Set progress bar to full width within container

    // Apply colors to the progress bar using CSS variables
    progressBar.style.setProperty('--progress-color', config.progressColor);
    progressBar.style.setProperty('--unprogressed-color', config.unprogressedColor);

    // Add the progress bar to the container
    progressBarContainer.appendChild(progressBar);
    dv.container.appendChild(progressBarContainer);

    // Apply the fade-in effect
    fadeIn(progressBarContainer, config.fadeDuration);
}

// Initial rendering of the progress bar
renderProgressBar();
```

> [!multi-column]
>> [!homepagetodoiston]+ Tasks from Todoist
>> ```todoist  
>> filter: "#Everyday"
>> project:Inbox limit: 4
>> sorting:
>>  - date
>>  - priority
>> ```
>
>> [!homepagetodoistoff]+ Add Vault Task
>> ```dataviewjs
>> dv.view("SYSTEM/TEMPLATE/CSS/Timeline", {
>>     pages: "", 
>>     inbox: "Inbox.md", 
>>     dailyNoteFolder: "DAILY/DAILY", 
>>     dailyNoteFormat: "YYYY-MM-DD",
>>     section: "# New Tasks",
>>     forward: true,
>>     options: "noYear todayFocus todoFilter noFile"
>> })
>> ```