# Sync Task 📑✨ - Task Management Application

Sync Task is a fully responsive, cross-platform mobile and web task management application built using **React Native**, **JavaScript**, and **Expo**. Engineered with a premium pastel aesthetic, the application integrates **Redux Toolkit** for predictable global state coordination and **AsyncStorage** for persistent local hardware offline storage.

---

## 🎨 Creative Theme Parameters & Specifications
Our interface runs on an elegant pastel style matrix optimized for universal responsiveness on both mobile screens and desktop web browsers:
* **Base Canvas Background:** `#f8fdc7` (Calming Pastel Light Yellow-Green)
* **Containers & Card Borders:** `#ffdae6` (Soft Pastel Pink)
* **Secondary Highlight Elements:** `#b38ecc` (Light Pastel Purple)
* **Primary Interactive Brand Typography:** `#8038af` / `#a366cc` (Deep Pastel Purple)

### Dynamic Urgency Badges
* 🔴 **High Priority Urgency:** `#ffb3ba` (Pastel Red)
* 🟠 **Medium Priority Urgency:** `#ffdfba` (Pastel Orange)
* 🟢 **Low Priority Urgency:** `#bfffba` (Pastel Green)

---

## 👥 Academic Development Roster & Contributions
* **Bisma (Seat No: B23110006022)** — Lead System Architect  
  * *Contribution:* Generated the core framework application skeleton, structured the project directory matrix, and managed cross-platform configuration frameworks.
* **Omaima Fatima (Seat No: B23110006132)** — Lead UI/UX Layout Designer  
  * *Contribution:* Styled all layout elements, customized inputs, and implemented our color palette across all screen views.
* **M. Bilal Shahid (Seat No: B23110006091)** — QA, Testing, & Production Deployment Lead  
  * *Contribution:* Handled file validation testing, cleared pathing conflicts, verified device-to-web viewport scaling, and is fully responsible for final deployment.
* **M. Muzammil Hussain (Seat No: B23110006108)** — State Management Engineer  
  * *Contribution:* Built the global state architecture layers utilizing Redux Toolkit slices.
* **Saad Ahmed (Seat No: B23110006142)** — Data Persistence Specialist  
  * *Contribution:* Designed and connected the local storage data schemas for AsyncStorage persistence and live public REST API integration.

---

## 📂 System Directory Roadmap
* `src/navigation/AppNavigator.js` - Manages combined Bottom Tab & Stack layouts.
* `src/redux/store.js` - Global Redux store context engine.
* `src/redux/tasksSlice.js` - Houses core mutation action reducers and background storage persistence thunks.
* `src/services/quoteService.js` - Custom network service handler performing asynchronous public REST API web queries.
* `src/screens/` - Complete responsive UI layout screen components:
  * `MainScreen.js` - App welcome gate housing the live public REST API quote tray.
  * `HomeScreen.js` - Central dashboard tracking active task items with search filters.
  * `AddTaskScreen.js` - Multi-metadata capture wizard using priority and category selector chips.
  * `CompletedScreen.js` - Separate archive view isolating completed, checked items.
  * `TaskDetailScreen.js` - Expanded analysis panel detailing individual task descriptions.
  * `ProfileScreen.js` - Academic credential panel introducing the development team.

---
