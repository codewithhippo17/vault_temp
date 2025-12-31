---
tags: homepage
---
## Open tasks
```dataview
TASK
FROM ""
WHERE !completed
SORT file.mtime DESC
LIMIT 20
```



---

### 2️⃣ Writing Progress Card


<div class="hp-card">
  
### Writing progress
```dataviewjs
const goal = 1500; // change your daily goal
const dailyFolder = "Daily"; // change to your daily-notes folder name
const todayISO = dv.luxon.DateTime.local().toISODate();
const todayPage = dv.pages(`"${dailyFolder}"`).where(p => p.file.name == todayISO).first();
const todayWords = todayPage ? (todayPage.words || 0) : 0;
const pct = Math.min(100, Math.round((todayWords/goal)*100));
dv.paragraph(`**Today's words:** ${todayWords} / ${goal} (${pct}%)`);
dv.paragraph(`<div class="hp-progress"><div class="hp-progress-fill" style="width:${pct}%"></div></div>`);
```
</div>

<div class="hp-card">

### Shortcuts
- New note: hotkey or New note button  
- Create daily note: use Daily Notes command  

</div>
