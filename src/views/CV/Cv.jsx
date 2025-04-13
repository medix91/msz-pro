import React from "react";
import "./CV.css";
import { Briefcase, GraduationCap, BadgeCheck } from "lucide-react";

const experiences = [
  {
    entreprise: "GRDF",
    date: "Juin 2024 - Présent",
    poste: "Chef de projet MOE / Référent Technico-Fonctionnel",
    description: "Analyse, conception et suivi du projet. Tests manuels et automatiques, gestion des interactions SI. Reporting et coordination des équipes",
    competences: ["Java", "Spring Boot", "Angular 12", "REST", "Microservices", "Docker", "Kubernetes", "GraphQL", "MySQL", "GitLab", "AWS", "Jira"],
  },
  {
    entreprise: "Bouygues Bâtiment",
    date: "Fév 2022 - Avr 2024",
    poste: "Ingénieur d'études et de développement",
    description: "Développement d’applications internes pour la gestion de projets et le suivi des performances. Intégration d’outils de gestion et optimisation des systèmes existants",
    competences: ["Java", "Spring", "REST", "Oracle", "GitLab", "Jenkins", "AWS", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    entreprise: "Freelance projets divers",
    date: "2019 - 2021",
    poste: "Développeur fullstack",
    description:
      "Développement de solutions web personnalisées pour plusieurs clients avec React, Firebase, PHP et Node.js.",
    competences: ["React", "Firebase", "Node.js", "PHP", "MySQL", "Symfony", "Flask", "Python","Firebase","MongoDB"],
  },
  {
    entreprise: "SACEM",
    date: "Nov 2017 - Juil 2018",
    poste: "Développeur backend freelance",
    description:
      "Refactoring vers Java 8, développement de web services pour la recherche d'artistes avec intégration Elasticsearch.",
    competences: ["Java 8", "ElasticSearch", "Spring", "Oracle", "GitLab"],
  },
  {
    entreprise: "APPWAY TECHNOLOGIES",
    date: "Juin 2017 - Oct 2017",
    poste: "Développeur Fullstack",
    description:
      "Développement d'une interface de monitoring avec backend Node.js et frontend React.",
    competences: ["React", "Node.js", "Express", "MongoDB", "Git", "JWT", "Nginx", "Postman","Jira"],
  },
  {
    entreprise: "AL OMRANE",
    date: "Jan 2014 - Oct 2015",
    poste: "Ingénieur études et développement",
    description:
      "Développement d'APIs et refactoring d'applications en Java (Servlet, JSP) pour le secteur BTP.",
    competences: ["Java", "Spring", "Struts", "Servlet", "JSP", "Oracle",
       "Git", "SVN", "JUnit", "Javadoc", "Hibernate", "RESTful APIs", "SOAP",
      "Apache Tomcat", "Jenkins", "Maven"],
  },
  
];

const diplomas = [
  {
    type: "Master 2",
    etablissement: "FEDE - IRIS | PARIS",
    titre: "Master 2 Chef de projet informatique",
    annee: "2019",
  },
  {
    type: "Diplôme D'ingénieur",
    etablissement: "E.S.I.S.A | MAROC",
    titre: "Diplôme d'ingénierie en sciences appliquées",
    annee: "2013",
  },
  
  {
    type: "Certificat",
    etablissement: "Google Cloud",
    titre: "Digital Marketing",
    annee: "2020",
  },
  {
    type: "Certificat",
    etablissement: "FreeCodeCamp",
    titre: "Responsive Web Desigb",
    annee: "2021",
  },
  {
    type: "Certificat",
    etablissement: "ETS GLOBAL",
    titre: "TOEIC | Score:860",
    annee: "2019",
  },
  {
    type: "Certificat",
    etablissement: "NETACADEMY",
    titre: "CISCO CCNA 1, 2, 3, 4 ",
    annee: "2013",
  },
  
];

const CV = () => {
  return (
    <section id="cv" className="cv-section">
      <h2 className="cv-title">Curriculum Vitae</h2>

      <h3 className="cv-subtitle">Expériences professionnelles</h3>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-left">
              <h4>{exp.entreprise}</h4>
              <p className="exp-date">{exp.date}</p>
            </div>
            <div className="timeline-divider" />
            <div className="timeline-right">
              <h4 className="poste">{exp.poste}</h4>
              <p className="description">{exp.description}</p>
              <div className="skill-badges">
                {exp.competences.map((skill, idx) => (
                  <span key={idx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="cv-subtitle">Diplômes et Certificats</h3>
      <div className="diplomas">
        {diplomas.map((dip, index) => (
          <div key={index} className="diploma-card">
            <div className="icon">
              {dip.type === "Diplôme" ? (
                <GraduationCap size={32} />
              ) : (
                <BadgeCheck size={32} />
              )}
            </div>
            <h4 className="diploma-type">{dip.type}</h4>
            <p className="diploma-etab">{dip.etablissement}</p>
            <p className="diploma-title">{dip.titre}</p>
            <p className="diploma-year">{dip.annee}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CV;
