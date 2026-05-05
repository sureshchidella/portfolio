# Projects — Suresh Venkata Chidella

A breakdown of the professional projects I've contributed to, organized from most recent to earliest.

---

## Builder Loan Management System

**Client:** Axis Bank (via Quest Global)  
**Period:** January 2026 – Present  
**Role:** Software Engineer  
**Domain:** Banking / Builder Financing / Loan Management

### Overview
A microservices-based loan management platform built to support Axis Bank's builder financing operations. The system manages the lifecycle of loans for real estate builders, including group management, property categorization, and bank detail handling.

### My Contributions
- Implemented **admin management functionality** for builder groups, enforcing a single-admin constraint per builder group with full builder group user type handling.
- Worked on the **builder management service** to resolve production-reported issues and added bank detail support for properties.
- Extended property type handling to cover **FLAT, PLOT, and RHW** (Row House) categories.
- Fixed **SonarQube violations** across multiple services and wrote JUnit tests to improve code coverage and maintain quality standards.

### Tech Stack
`Java 17` `Spring Boot` `Microservices` `JUnit` `SonarQube` `JaCoCo` `REST APIs` `JPA`

---

## Mastercard Send

**Client:** Mastercard (via Quest Global)  
**Period:** November 2024 – December 2025  
**Role:** Software Engineer  
**Domain:** Global Payments / Money Transfer

### Overview
Mastercard Send is a global payment platform that enables fast, secure money transfers across various corridors and use cases. The platform supports consumer, commercial, and government disbursement payments.

### My Contributions
- Implemented **currency mandate** to support ANG-to-XCG payment transfers for CUW (Curacao) and SXM (Sint Maarten) regional corridors.
- Added new **transaction purpose types** — Recycling Deposit Return and Value-Added Tax (VAT) Payment — to extend the platform's compliance and categorization support.
- Contributed to building a new **unified version of the Mastercard Send API**, consolidating functionality from multiple existing Send APIs into a single, extensible endpoint.

### Tech Stack
`Java` `Spring Boot` `Microservices` `REST APIs` `PCF` `Jenkins` `SonarQube` `Swagger/OpenAPI`

---

## Unified Money Transfer

**Client:** Mastercard (via Quest Global)  
**Period:** July 2023 – October 2024  
**Role:** Software Engineer  
**Domain:** Cross-Border & Domestic Payments

### Overview
A Unified Payment API designed to handle both domestic and cross-border money transfers globally. The project involved building a high-availability, high-throughput system with a strong focus on testing, performance, and event-driven architecture.

### My Contributions
- Worked on core API development handling **domestic and cross-border money transfer** use cases.
- Wrote and maintained comprehensive test suites using **Karate** (integration/API tests), **ArchUnit** (architectural rules enforcement), and mutation testing to ensure correctness and stability.
- Performed API **performance and latency profiling** using JMeter (JMX scripts) and BlazeMeter against MTF and Stage environments.
- Built **Jenkins CI/CD pipelines** to automate deployments across lower environments — significantly reducing repetitive manual release steps.
- Explored and prototyped **event-driven payment patterns** using Axon (Kafka-based event sourcing/CQRS) through focused POCs.

### Tech Stack
`Java 17` `Spring Boot` `Microservices` `Karate` `ArchUnit` `JMeter` `BlazeMeter` `Jenkins` `Axon (Kafka)` `PCF` `Dynatrace` `SonarQube`

---

## Small Business Banking

**Client:** Axis Bank (via Quest Global)  
**Period:** March 2023 – June 2023  
**Role:** Software Engineer  
**Domain:** Digital Lending / SME Banking

### Overview
A digital loan application platform for Axis Bank's small business customers. The system streamlined the loan application journey by digitizing document submission, identity verification, and processing workflows.

### My Contributions
- Built **microservices** for the digital loan application platform using Spring Boot and JPA.
- Developed the **document upload feature** and integrated **PAN card verification** to simplify and speed up loan processing for applicants.
- Performed **API testing in UAT** using Postman, identifying and helping resolve integration issues before production release.
- Collaborated with QA and design teams to ensure APIs integrated correctly with the frontend and that UX flows were consistent.

### Tech Stack
`Java` `Spring Boot` `JPA` `Hibernate` `MySQL` `REST APIs` `Postman` `Maven` `Git`

---

## Skills Used Across Projects

| Skill Category | Tools & Technologies |
|---|---|
| Languages | Java 17, Java 11 |
| Frameworks | Spring Boot, Spring Data JPA |
| Event-Driven | RabbitMQ, Axon Framework (Kafka) |
| Testing | JUnit, Mockito, Karate, ArchUnit, Mutation Testing, JMeter, BlazeMeter, Postman |
| CI/CD | Jenkins, PCF (Pivotal Cloud Foundry) |
| Quality | SonarQube, JaCoCo, Dynatrace |
| API | REST, Swagger/OpenAPI |
| Infra & Tools | Git, IntelliJ IDEA, Jira, Maven |

---

[← Back to Portfolio](README.md) · [View Full Resume](RESUME.md)

