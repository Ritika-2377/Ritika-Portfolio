# Ritika Garg — Personal Portfolio (local)

Multi-page student portfolio built with **React**, **Vite**, **React Router**, and **Tailwind CSS v4**. Runs on your laptop only — no deployment configured.

The interface uses a dark indigo editorial theme by default, with a floating navigation bar, grouped route menu, violet accents, and responsive project cards. Use the header theme control to switch to light mode; the selected mode is saved locally in your browser.

## Prerequisites

- Node.js **20.19+** or **22.12+** (required by Vite 8)
- npm

## Start the site

```bash
cd ritika-portfolio
npm install
npm run dev
```

Open **http://localhost:5173** (Vite prints the exact URL).

Optional checks:

```bash
npm run lint
npm run build
npm run preview   # usually http://localhost:4173
```

## Routes

| Route | Page |
|-------|------|
| `/` | Welcome / landing portal |
| `/home` | Main portfolio home |
| `/about` | About me |
| `/projects` | Projects (with filters) |
| `/projects/:slug` | Project detail |
| `/skills` | Skills |
| `/education` | Education timeline |
| `/experience` | Experience & journey (also `/journey`) |
| `/certifications` | Microsoft certifications |
| `/achievements` | Achievements & leadership |
| `/gallery` | Photo gallery |
| `/resume` | Resume / CV |
| `/coa` | COA Learning Lab (interactive tools) |
| `/assignments` | College assignments |
| `/contact` | Contact |
| `*` | Custom 404 |

## Edit content (start here)

| File | What to change |
|------|----------------|
| `src/data/profile.js` | Name, introduction/biography, goal, contact details, interests, resume path |
| `src/data/projects.js` | Project titles, descriptions, supported technology labels, detail slugs |
| `src/data/skills.js` | Skill categories and current learning |
| `src/data/education.js` | Degree, specialization, session, CGPA, school percentages |
| `src/data/certifications.js` | Certification names and certificate PDF paths |
| `src/data/achievements.js` | Leadership and milestones |
| `src/data/assignments.js` | Assignment registry |
| `src/data/gallery.js` | Real gallery image entries (only add files that exist) |
| `src/data/coaResources.js` | COA learning notes |

## Assets (local files)

| Path | Purpose |
|------|---------|
| `public/resume/Resume.pdf` | Resume PDF, configured in `src/data/profile.js` |
| `public/certificates/Microsoft Azure Certificate.pdf` | AZ-900 certificate |
| `public/certificates/Microsoft AI Certificate.pdf` | AI-900 certificate |
| `public/gallery/` | Add personal gallery photos, then register in `src/data/gallery.js` |
| `public/assignments/Assignment 1.pdf` | COA Assignment 1 |
| `public/assignments/coa/` | Add future COA assignment PDFs here |
| `public/assignments/dsa/` | DSA assignment PDFs |
| `public/assignments/java/` | Java/OOP assignment PDFs |
| `public/assignments/os/` | OS assignment PDFs |
| `public/assignments/other/` | Other subjects |

### Assignments workflow

1. Copy your file into the subject folder under `public/assignments/`.
2. Register it in `src/data/assignments.js`:

```js
{
  id: 'unique-id',
  title: 'Assignment title',
  number: '1',
  description: 'Short description',
  date: null,
  filePath: '/assignments/coa/your-file.pdf',
  fileAvailable: true,
}
```

Files are served as static assets from `public/` and do not require a database. Register the exact path and filename in `src/data/assignments.js` after adding a file.

Supported formats: any file the browser can open (PDF recommended).

## COA Learning Lab

Client-side tools under `/coa`:

- Number system converter
- Infix → postfix + instruction formats + safe postfix evaluation
- CPU instruction cycle simulator
- Learning notes (placeholders in `coaResources.js`)

## Theme

Header toggle saves preference to `localStorage` key `theme`.

## GitHub (source only)

You may push this folder to GitHub for backup. That does **not** publish the site unless you separately configure hosting.

## License

Personal use — adjust as you like.
