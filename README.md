
# Sync Task  - Task Management Application

Sync Task is a fully responsive, cross-platform mobile and web task management application built using **React Native**, **JavaScript**, and **Expo**. Engineered with a premium pastel aesthetic, the application integrates **Redux Toolkit** for predictable global state coordination and **redux-persist** (via **AsyncStorage**) for highly reliable, automated local hardware offline storage.

---

## Recent System Updates & Feature Integrations

* **Automated Data Persistence:** Transitioned state management to `redux-persist`, utilizing a `<PersistGate>` to guarantee zero data loss and seamless offline task retrieval upon application cold boots.
* **Cross-Platform Date Picker:** Integrated a dynamic scheduling interface that automatically serves standard HTML5 `<input type="date">` for web clients and `@react-native-community/datetimepicker` for native mobile users.
* **Dynamic Edit Architecture:** Optimized navigation flow by recycling the task creation screen into a dynamic "Edit Mode" via route parameter passing, ensuring DRY (Don't Repeat Yourself) code principles.
* **Micro-Interaction UI (Celebrations):** Engineered a timed celebration modal triggered upon task completion to enhance user gratification and UX feedback.
* **Expanding Archive Cards:** Upgraded the Completed Archives screen with tap-to-expand task cards, revealing localized "Undo" and "Remove" action buttons to prevent accidental deletions and UI clutter.

---

## Creative Theme Parameters & Specifications

Our interface runs on an elegant pastel style matrix optimized for universal responsiveness on both mobile screens and desktop web browsers:

* **Base Canvas Background:** `#f8fdc7` (Calming Pastel Light Yellow-Green)
* **Containers & Card Borders:** `#ffdae6` (Soft Pastel Pink)
* **Secondary Highlight Elements:** `#b38ecc` (Light Pastel Purple)
* **Primary Interactive Brand Typography:** `#8038af` / `#a366cc` (Deep Pastel Purple)

### Dynamic Urgency Badges

* **High Priority Urgency:** `#ffb3ba` (Pastel Red)
* **Medium Priority Urgency:** `#ffdfba` (Pastel Orange)
* **Low Priority Urgency:** `#bfffba` (Pastel Green)

---

## 👥 Academic Development Roster & Contributions

* **Bisma (Seat No: B23110006022)** — Lead System Architect
* *Contribution:* Generated the core framework application skeleton, structured the project directory matrix, and managed cross-platform configuration frameworks.


* **Omaima Fatima (Seat No: B23110006132)** — Lead UI/UX Layout Engineer
* *Contribution:* Styled all layout elements, customized inputs, and implemented our color palette across all screen views.


* **Muhammad Bilal Shahid (Seat No: B23110006091)** — QA, Feature Integration, & Deployment Lead
* *Contribution:* Handled file validation testing, verified device-to-web viewport scaling, developed the dynamic Edit/Undo UI logic, and successfully resolved state persistence race conditions utilizing `redux-persist` prior to final production deployment.


* **M. Muzammil Hussain (Seat No: B23110006108)** — State Management Engineer
* *Contribution:* Built the global state architecture layers utilizing Redux Toolkit slices.


* **Saad Ahmed (Seat No: B23110006142)** — Data Persistence Specialist
* *Contribution:* Designed and connected the local storage data schemas for AsyncStorage persistence and live public REST API integration.



---

## System Directory Roadmap

* `assets/mainsc.png` - Primary graphic illustration asset rendered on the App Welcome screen.
* `assets/logo.png` - Full application brand logo mark featuring the project tagline context.
* `src/components/Dashboard.js` - Modular tracking component block rendering secondary user layout statistics.
* `src/navigation/AppNavigator.js` - Central interface application routing engine managing combined Bottom Tab & Stack layouts.
* `src/redux/store.js` - Global Redux store context engine configured with `redux-persist` adapters to automatically serialize and cache active states to hardware.
* `src/redux/tasksSlice.js` - Core state slice processing active task mutation action reducers (Add, Edit, Toggle, Delete) and API data payloads.
* `src/service/api.js` - Asynchronous web infrastructure data connector tracking external public REST API endpoint calls.
* `src/screens/` - Complete universal responsive frontend viewport layout modules:
* `MainScreen.js` - App welcome gate displaying prominent branding text, illustration panels, and external quotes.
* `HomeScreen.js` - Central workspace view tracking dynamic item keyword lookups, priority levels, and customized UI celebration modals.
* `AddTaskScreen.js` - Dual-purpose creation and edit component implementing platform-specific date pickers and selector chip modules.
* `CompletedScreen.js` - Dedicated visual filter screen archiving cleared tasks, featuring tap-to-expand cards with localized undo/remove actions.
* `TaskDetailScreen.js` - Full detail analysis panel expanding descriptive text boxes, urgency details, and data-passing edit navigation.
* `ProfileScreen.js` - Formal credential registry displaying academic roles, team contributions, and project identification fields.