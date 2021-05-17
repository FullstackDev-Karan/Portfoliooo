import React from "react";
import Card from "./Card";
import html from "./images/index.png";
import django from "./images/django.png";
import bootstrap from "./images/bootstrap.png";
import react from "./images/react.png";
import sql from "./images/sql.webp";

function Projects() {
  return (
    <div className="probody">
      <div>
        <h1>Here is a glimpse of what i can create!</h1>
      </div>
      <div className="Projects">
        <Card
          img={html}
          title="Basic Html Designs"
          desc=" This is about static html page"
        />
        <Card
          img={bootstrap}
          title="Basic Bootstarap Designs"
          desc=" This is about responsive bootstrap page"
        />
        <Card
          img={django}
          title="Basic Django Designs"
          desc=" This is about Django Based Website"
        />
        <Card
          img={sql}
          title="Basic Sql"
          desc=" This is about Database Entries"
        />
        <Card
          img={react}
          title="Basic React Template"
          desc=" This is about React Based Website"
        />
        <Card
          img={django}
          title="Advanced React + Django "
          desc=" This is about connectivity of react and django"
        />
      </div>
    </div>
  );
}

export default Projects;
