"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Database } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 px-6 md:px-16 py-12">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Java Backend Developer
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Backend-focused Software Engineer specializing in Java, Spring Boot, and
          scalable REST API development. Strong expertise in system design,
          database architecture, authentication mechanisms, and writing
          production-grade, maintainable code.
        </p>
      </motion.section>

      {/* TECHNICAL EXPERTISE - PRIORITY SECTION */}
      <section className="max-w-6xl mx-auto mt-20 space-y-10">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Database className="text-green-400" /> Core Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Java, OOP, Collections, Multithreading, Exception Handling",
            "Spring Boot, Spring MVC, Spring Data JPA, Hibernate",
            "REST API Design, GraphQL APIs, Microservices Architecture",
            "SQL, Oracle DB, PostgreSQL, Query Optimization, Indexing",
            "JWT Authentication, OAuth2, Okta MFA Integration",
            "JUnit Testing, Maven, Git Version Control"
          ].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-800/60 backdrop-blur-lg p-5 rounded-2xl border border-slate-700 shadow-md"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section className="max-w-6xl mx-auto mt-20 space-y-10">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Briefcase className="text-blue-400" /> Professional Experience
        </h2>

        <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold">Software Engineer – Healthcare Platforms</h3>
          <ul className="list-disc list-inside text-slate-300 space-y-2 leading-relaxed">
            <li>Designed and developed scalable Spring Boot microservices handling critical healthcare workflows.</li>
            <li>Built and maintained RESTful APIs with proper validation, exception handling, and layered architecture.</li>
            <li>Designed optimized relational schemas with indexing and transactional consistency using JPA & Hibernate.</li>
            <li>Implemented secure authentication flows including JWT and MFA-based login systems.</li>
            <li>Improved performance using asynchronous processing and efficient database query tuning.</li>
          </ul>
        </div>
      </section>

      {/* PROJECT SECTION */}
      <section className="max-w-6xl mx-auto mt-20 space-y-10">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Code2 className="text-cyan-400" /> Key Project
        </h2>

        <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold">Medical Store Management System</h3>
          <ul className="list-disc list-inside text-slate-300 space-y-2 leading-relaxed">
            <li>Developing a transactional backend using Spring Boot with layered architecture (Controller-Service-Repository).</li>
            <li>Implemented inventory, billing, supplier, and sales modules with proper business validation.</li>
            <li>Built secure JWT-based role authentication and authorization system.</li>
            <li>Designed stock deduction logic ensuring data consistency during concurrent operations.</li>
            <li>Applied proper entity mapping, indexing, and ACID transaction handling for reliability.</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-24 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} | Java Backend Developer Portfolio
      </footer>
    </div>
  );
}
