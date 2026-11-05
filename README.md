# 📌 Cv Builder

This is a practice project from The Odin Project curriculum. I'm also going to use it to create my CV.

---

## 🎯 Learning Objective  
This project was built as part of The Odin Project curriculum. Its main goal was to practice React and improve my frontend development skills by building a functional CV builder.

I also wanted to create a useful application that I could use to build and manage my own CV.

During development, the focus was on:
- Learn React basics: (state, conditional rendering, events, render list, components).

---

## 🛠️ Technologies Used
- React
- JavaScript
- Tailwind CSS
- HTML
- CSS
- Vite
- Git and GitHub

---

## 📷 Examples / Screenshots
# Layout 
<img width="1366" height="650" alt="layout" src="https://github.com/user-attachments/assets/66f98a2d-053e-48ab-b750-a8722ec432fe" />

# Personal info 
<img width="1366" height="648" alt="info" src="https://github.com/user-attachments/assets/cc10fd05-e53f-431b-ae5b-19a58eb0b54c" />

# Experience
<img width="1366" height="649" alt="experience" src="https://github.com/user-attachments/assets/0039e947-8b21-465b-b21f-bba1ba1d4b0c" />

# Education
<img width="1365" height="648" alt="education" src="https://github.com/user-attachments/assets/8f6f80cf-5a68-49aa-89d1-8d8d5d36def5" />

# Skills
<img width="1366" height="648" alt="skills" src="https://github.com/user-attachments/assets/e7af000e-d1fe-4632-aa43-728643b095ee" />

# PDF Export
<img width="1366" height="647" alt="descargarPDF" src="https://github.com/user-attachments/assets/42af32ac-2d96-44c4-a779-033edea23fcc" />

---

## 📂 Project Structure
```text
src/
├── components/
│   ├── CvEdit/
│   ├── CvPreview/
│   ├── Header/
│   └── Notification/
├── features/
│   ├── cv-edit/
│   ├── cv-preview/
│   ├── json-management/
│   ├── notification/
│   └── pdfExport/
├── helpers/
├── utils/
├── App.jsx
├── Index.css
├── print.css
└── main.jsx
```

---

## 📚 Learnings
During this project, I practiced and improved my understanding of several frontend development concepts:

- React State Management: Managing application state with useState, sharing state between components, and handling temporary and saved data.
- React Hooks: Working with useState, useEffect, and useRef.
- Component Architecture: Breaking down the application into smaller, reusable components and organizing their responsibilities.
- Forms and CRUD Operations: Creating forms and implementing features to add, edit, and delete information.
- Data Management: Working with objects and arrays, updating data without directly modifying the original state.
- Data Persistence: Using localStorage to save data between sessions.
- File Handling: Reading, validating, importing, and exporting JSON files.
- Error Handling: Managing errors and displaying notifications to provide feedback to users.
- CSS and Tailwind: Building layouts, working with Flexbox and Grid, and creating different CV designs.
- Print Styles: Using CSS print rules and window.print() to export CVs as PDF files.
- Git and GitHub: Working with branches, commits, and version control.

---

## 🔮 Possible Improvements

### State Management
- Refactor some state logic using useReducer to make complex state updates easier to manage.
- Improve the separation of responsibilities between components.

### Data Validation
- Use a validation library such as Zod to create more reliable data validation.
- Improve form validation and provide clearer error messages.

### TypeScript
- Migrate the project to TypeScript to improve type safety and make the code easier to maintain.
- 
### Testing
- Add unit and integration tests using Vitest and React Testing Library.
- Test important features such as CRUD operations, data import, and data persistence.

### PDF Export
- Improve page breaks and layout consistency when printing CVs.
- Explore libraries such as @react-pdf/renderer for more control over PDF generation.

### Data Persistence
- Explore IndexedDB for more advanced local data storage.
- onsider adding a backend and database to allow users to save and access their CVs across different devices.
