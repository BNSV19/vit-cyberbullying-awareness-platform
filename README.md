# Cyberbullying Awareness and Anonymous Reporting Platform

B.Tech team project (7 members), Vellore Institute of Technology, May 2021.
Contributor: Badrinarayan Nandakumar (19BCT0006)

A website for cyberbullying awareness. Students can share their experiences anonymously, read other people's stories, and find preventive measures and support. The features were shaped by two surveys of students and parents.

## Features

- **Anonymous stories.** Visitors submit a story (`submit.html`), which is stored in MongoDB and shown on the stories page (`index.html`).
- **Awareness posters** (`public/posters/`) and **preventive measures** (`public/preventive-measures/`).
- **Report form** (`report-form/`): a front-end form for reporting incidents, with state selection for India.

## Run locally

Requires Node.js and a local MongoDB server on `mongodb://127.0.0.1:27017`.

```bash
npm install
node index.js
# then open http://localhost:3000
```

API: `GET /stories` returns all stories; `POST /story` adds one (`author`, `date`, `story`).

Note: the original poster images came from third-party awareness campaigns and are not included in this repository, so those image slots will be empty.

## Skills

Node.js · Express · MongoDB (Mongoose) · HTML/CSS · JavaScript · User research (surveys)
