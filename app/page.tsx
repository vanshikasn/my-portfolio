"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Vanshika Nemmaniwar
        </h1>
        <p className="text-xl font-medium text-gray-600">
          Backend Software Engineer | Java • Spring Boot • AWS
        </p>
        <p className="max-w-3xl mx-auto text-gray-700">
          Backend-focused Software Engineer with 2.7 years of experience
          designing scalable microservices and secure cloud-native applications.
          Strong expertise in Java, Spring Boot, GraphQL, AWS, and Kubernetes.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a
            href="#"
            className="px-6 py-3 bg-black text-white rounded-2xl"
          >
            Download Resume
          </a>

          <a
            href="#"
            className="px-6 py-3 border rounded-2xl flex items-center gap-2"
          >
            <Github size={16} /> GitHub
          </a>

          <a
            href="#"
            className="px-6 py-3 border rounded-2xl flex items-center gap-2"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="font-semibold">Backend & Architecture</h3>
            <p className="mt-2">
              Java, Spring Boot, REST APIs, GraphQL, Hibernate, Spring Data JPA, Microservices
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="font-semibold">Cloud & DevOps</h3>
            <p className="mt-2">
              AWS, Docker, Kubernetes, CI/CD, Git
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="font-semibold">Databases</h3>
            <p className="mt-2">
              PostgreSQL, Oracle DB, MongoDB
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="font-semibold">Security</h3>
            <p className="mt-2">
              Okta, MFA, OAuth2, JWT, Identity Management
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-6">
          Open to backend engineering opportunities and cloud-native system design roles.
        </p>
        <a
          href="mailto:yourmail@email.com"
          className="px-6 py-3 bg-black text-white rounded-2xl inline-flex items-center gap-2"
        >
          <Mail size={16} /> Contact Me
        </a>
      </section>
    </div>
  );
}