import "./styles.css";
import React, { useState } from "react";

var my_tech_stack = {
  frontend: [
    {
      name: "HTML5",
      synopsis: "A markup language used to structure the web pages .",
      imgUrl: "https://i.ibb.co/Bfp7GYf/icons8-html-5-480.png "
    },
    {
      name: " CSS3",
      synopsis: "it is being used to style the web pages .",
      imgUrl: "https://i.ibb.co/r7JzDpn/icons8-css3-480.png"
    },
    {
      name: "Javascript ",
      synopsis: "the brain of web applications.",
      imgUrl: "https://i.ibb.co/DbdD2wY/icons8-javascript-480.png "
    },
    {
      name: "bootstarp",
      synopsis: "a frontend framework uses to created cool web apps.",

      imgUrl: "https://i.ibb.co/4NsWb3C/icons8-bootstrap-480.png "
    },
    {
      name: "React JS ",
      synopsis:
        "A Javascript library to create awesome looking front end designs.",

      imgUrl: "https://i.ibb.co/JCjwV87/icons8-react-480-1.png"
    }
  ],

  backend: [
    {
      name: "nodejs",
      synopsis:
        "it is an open-source, cross-platform, back-end JavaScript runtime environment",

      imgUrl: "https://i.ibb.co/Dgx17X7/icons8-nodejs-480.png "
    },
    {
      name: "python ",
      synopsis:
        "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. ",

      imgUrl: "https://i.ibb.co/mb728nY/icons8-python-480-1.png "
    },
    {
      name: "django",
      synopsis:
        "Django is a Python-based free and open-source web framework that follows the model–template–views architectural pattern",

      imgUrl: "https://i.ibb.co/DVd0FN1/icons8-django-500.png"
    },
    {
      name: "SQL database ",
      synopsis:
        "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system",

      imgUrl: "https://i.ibb.co/2dth424/icons8-database-100.png"
    },
    {
      name: "MongoDB",
      synopsis:
        "MongoDB is a source-available cross-platform document-oriented database program.",

      imgUrl: "https://i.ibb.co/C17mP64/icons8-mongodb-480.png "
    }
  ],

  devops: [
    {
      name: "Linux",
      synopsis: "an open source most popular OS ",

      imgUrl: "https://i.ibb.co/fnY1tMB/linux.png "
    },
    {
      name: "AWS",
      synopsis:
        " A cloud service provider help to Build, Deploy, and Manage Websites, Apps or Processes On AWS' Secure, Reliable Network",
      imgUrl: "https://i.ibb.co/KWg6Xy8/icons8-amazon-web-services-480.png"
    },
    {
      name: "Git/Github",
      synopsis: "a team collabrating software ",

      imgUrl: "https://i.ibb.co/cNh0tvz/icons8-git-480.png "
    },
    {
      name: "Jenkins",
      synopsis: "a CI/CD tool",
      IMDBrating: "8.3",
      imgUrl: "https://i.ibb.co/ZM5XvyQ/icons8-jenkins-480.png "
    },
    {
      name: "Docker",
      synopsis:
        "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",

      imgUrl: "https://i.ibb.co/gRy0YWR/icons8-docker-240.png"
    }
  ],
  othertools: [
    {
      name: "The Clean Code",
      synopsis: "A sole survivor to coders..",
      imgUrl: "https://i.ibb.co/7XyhJ3d/cleancode-1.png"
    },
    {
      name: "APIs",
      synopsis:
        "An application programming interface is a connection between computers or between computer programs.",
      imgUrl: "https://i.ibb.co/Zxxg78R/icons8-api-100.png"
    },
    {
      name: "VS Code",
      synopsis:
        "all in one splution for coding environment and integrated IDE.",
      IMDBrating: "8.2",
      imgUrl: "https://i.ibb.co/8dVYtJ7/vscode.png"
    },
    {
      name: "data structure and algorithm",
      synopsis: "the bramhastra to every developer and key to FAANG",

      imgUrl: "https://i.ibb.co/tHM0CvL/dsa.png"
    }
  ]
};

export default function App() {
  var [movies, setMovies] = useState("frontend");
  function clickHandler(event) {
    setMovies(event);
  }
  return (
    <div className="App">
      <div className="head">
        <h2 className="navi">my_tech_stack</h2>

        {Object.keys(my_tech_stack).map((event) => (
          <ul
            style={{ display: "inline-box" }}
            onClick={() => clickHandler(event)}
          >
            {event}
          </ul>
        ))}

        <div style={{ color: "white" }}>
          <ul
            style={{
              listStyleType: "none"
            }}
          >
            {my_tech_stack[movies].map((recomendation) => (
              <li
                key={recomendation.name}
                style={{
                  color: "white"
                }}
              >
                <div
                  style={{
                    width: "40%",
                    padding: "20px",
                    margin: "40px",
                    alignItems: "center"
                  }}
                >
                  <h3 className="title">{recomendation.name}</h3>
                  <img alt="" src={recomendation.imgUrl} />
                  <div className="synopsis">{recomendation.synopsis}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
