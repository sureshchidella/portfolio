# Projects — Suresh Venkata Chidella

A breakdown of the professional projects I've contributed to, organized from most recent to earliest.

---

## Builder Loan Management System

**Client:** Axis Bank (via Quest Global)  
**Period:** January 2026 – Present  
**Role:** Software Engineer  
**Domain:** Banking / Builder Financing / Loan Management

### Overview
Building microservices for Axis Bank's builder financing platform using Spring Boot and Java 17, handling loan lifecycle management for real-estate builder groups.

### My Contributions
- Built the **admin management module** with single-admin enforcement, role-based user types, and support for bank details and property types (FLAT, PLOT, RHW).
- Resolved **SonarQube violations** and wrote JUnit test suites across multiple services to bring code quality up to threshold.

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
- Added **currency mandate support** for ANG-to-XCG payment flows in CUW (Curacao) and SXM (Sint Maarten) as part of Mastercard's Caribbean rollout.
- Introduced new **transaction purpose types** (Recycling Deposit Return, VAT Payment) to extend payment classification on the Mastercard Send platform.
- Contributed to building the **unified Mastercard Send API**, consolidating multiple legacy Send APIs into one extensible interface.

### Tech Stack
`Java` `Spring Boot` `Microservices` `REST APIs` `PCF` `Jenkins` `SonarQube` `Swagger/OpenAPI`

---

## Unified Money Transfer

**Client:** Mastercard (via Quest Global)  
**Period:** July 2023 – October 2024  
**Role:** Software Engineer  
**Domain:** Cross-Border & Domestic Payments

### Overview
A global Unified Payment API supporting domestic and cross-border transfers across multiple regions at Mastercard scale. The project involved building a high-availability, high-throughput system with a strong focus on testing, performance, and event-driven architecture.

### My Contributions
- Wrote performance and latency benchmarks using **JMeter JMX scripts and BlazeMeter** across MTF and Stage environments, flagging bottlenecks before production.
- Built **CQRS/Event Sourcing POCs** with Axon Framework (Kafka-backed) to validate async transaction processing for high-throughput payment use cases.
- Maintained test suites covering **Karate** (API contracts), **ArchUnit** (architectural rules), and mutation testing to keep the system reliable.
- Built **Jenkins CI/CD pipelines** to automate deployments across lower environments.

### Tech Stack
`Java 17` `Spring Boot` `Microservices` `Karate` `ArchUnit` `JMeter` `BlazeMeter` `Jenkins` `Axon (Kafka)` `PCF` `Dynatrace` `SonarQube`

---

## Small Business Banking

**Client:** Axis Bank (via Quest Global)  
**Period:** March 2023 – June 2023  
**Role:** Software Engineer  
**Domain:** Digital Lending / SME Banking

### Overview
A digital loan application platform for Axis Bank's small business customers, letting them apply for loans without manual paperwork by digitizing document submission, identity verification, and processing workflows.

### My Contributions
- Built **microservices** for the digital loan application platform using Spring Boot and JPA.
- Implemented **document upload and PAN verification** features, reducing manual steps in the loan onboarding flow.
- Tested APIs in **UAT using Postman**, catching integration issues before production release.

### Tech Stack
`Java` `Spring Boot` `JPA` `Hibernate` `MySQL` `REST APIs` `Postman` `Maven` `Git`

---

## Skills Used Across Projects

| Skill Category | Tools & Technologies |
|---|---|
| Languages & Frameworks | Java 17, Spring Boot, Spring Data JPA, Hibernate |
| Architecture | Event-Driven Architecture, CQRS, Event Sourcing, Axon Framework, Kafka |
| Databases & Caching | MySQL, Redis |
| Testing | JUnit 5, Mockito, Karate, ArchUnit, Mutation Testing, JMeter, BlazeMeter, Postman |
| DevOps & CI/CD | Jenkins, PCF (Cloud Foundry), Maven |
| Quality | SonarQube, JaCoCo, Dynatrace |
| API | REST, Swagger/OpenAPI |
| Tools | Git, IntelliJ IDEA, Jira, Agile/Scrum |

---

[← Back to Portfolio](README.md) · [View Full Resume](RESUME.md)
