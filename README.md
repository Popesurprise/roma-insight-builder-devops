# Roma Insight Builder - Production DevOps Deployment

## Overview

This project demonstrates a production-oriented DevOps implementation for deploying the **Roma Insight Builder** application using modern DevOps practices and automation tools.

The solution includes:

- Dockerized frontend application
- Infrastructure as Code using Terraform
- Automated CI/CD pipeline using GitHub Actions
- AWS EC2 deployment architecture
- Nginx reverse proxy configuration
- Monitoring and logging configuration using CloudWatch concepts

The primary goal of this project is to showcase practical DevOps engineering skills, infrastructure automation, deployment strategy, and system design thinking.

---

# Architecture Overview

## High-Level Architecture

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions CI/CD Pipeline
    │
    ├── Build Docker Image
    ├── Save Docker Artifact
    └── Deploy to EC2 via SSH
    │
    ▼
AWS EC2 Instance
    │
    ├── Docker Engine
    ├── Nginx Container
    └── CloudWatch Monitoring
    │
    ▼
End Users
```

---

# Technology Stack

| Component | Technology |
|---|---|
| Frontend Application | Vite + React |
| Containerization | Docker |
| Reverse Proxy | Nginx |
| Infrastructure as Code | Terraform |
| CI/CD | GitHub Actions |
| Cloud Provider | AWS EC2 |
| Monitoring | AWS CloudWatch |
| Version Control | GitHub |

---

# Repository Structure

```text
roma-insight-builder-main/
│
├── app/                         # Application source code
├── docker/                      # Docker and Nginx configuration
├── terraform/                   # Terraform infrastructure code
│   ├── modules/
│   │   ├── ec2/
│   │   └── security_group/
│
├── monitoring/                  # CloudWatch configuration
├── .github/workflows/           # GitHub Actions pipeline
├── docs/                        # Architecture diagrams
└── README.md
```

---

# Docker Implementation

The application was containerized using a multi-stage Docker build approach.

## Why Multi-Stage Builds?

This approach helps:

- Reduce image size
- Separate build and runtime environments
- Improve security and efficiency
- Use Nginx as a lightweight production web server

## Build Flow

1. Application dependencies installed using Node.js
2. Vite production build generated
3. Static files served using Nginx

---

# Infrastructure as Code (Terraform)

Terraform was used to provision reusable and modular infrastructure resources.

## Implemented Modules

### EC2 Module
Responsible for:
- EC2 instance provisioning
- Docker installation
- Bootstrap automation using user data

### Security Group Module
Responsible for:
- HTTP access (Port 80)
- SSH access (Port 22)

## Terraform Features

- Modular design
- Reusable components
- Infrastructure separation
- Automated provisioning logic

---

# CI/CD Pipeline

GitHub Actions was used to automate the deployment workflow.

## Pipeline Workflow

```text
Code Push
   ↓
GitHub Actions Trigger
   ↓
Docker Build
   ↓
Docker Image Packaging
   ↓
Transfer to EC2
   ↓
Container Deployment
```

## Pipeline Features

- Automated builds
- Automated deployment
- Immutable deployment strategy
- SSH-based deployment automation

---

# Monitoring & Logging

Basic observability was implemented using AWS CloudWatch concepts.

## Implemented Monitoring

- EC2 CPU metrics
- EC2 memory metrics
- Docker container logs
- Nginx access logs
- Nginx error logs

## CloudWatch Agent Configuration

Configuration file location:

```text
monitoring/cloudwatch-config.json
```

---

# Local Development & Testing

## Build Docker Image

```bash
docker build -t roma-app -f docker/Dockerfile .
```

## Run Container

```bash
docker run -d -p 8081:80 --name roma-test roma-app
```

## Access Application

```text
http://localhost:8081
```

---

# Terraform Commands

## Initialize Terraform

```bash
terraform init
```

## Validate Configuration

```bash
terraform validate
```

## Format Terraform Files

```bash
terraform fmt
```

---

# Design Decisions

## Why EC2 Instead of ECS/EKS?

EC2 was selected because:

- Simpler deployment architecture
- Faster implementation within assessment timeline
- Sufficient for application requirements
- Easier operational visibility

## Why Nginx?

Nginx was selected because:

- Lightweight and production-grade
- Efficient static file serving
- Reverse proxy capabilities
- Widely adopted in production systems

## Why GitHub Actions?

GitHub Actions was selected because:

- Native GitHub integration
- Simpler CI/CD setup
- Secure secret management
- Fast automation implementation

---

# Challenges Encountered

During implementation, several issues were encountered and resolved:

- Docker container networking conflicts
- Nginx configuration issues
- Port allocation conflicts in local Docker environment
- Runtime container debugging

These issues were resolved through systematic debugging and container inspection techniques.

---

# Limitations

Due to temporary AWS account restrictions:

- Infrastructure could not be fully provisioned in AWS
- CloudWatch metrics could not be validated live
- Final EC2 deployment could not be tested in cloud environment

However:

- Terraform configurations were fully implemented
- Docker deployment was validated locally
- CI/CD workflow logic was completed
- Architecture and automation design remain production-ready

---

# Future Improvements

Potential production improvements include:

- HTTPS using AWS ACM + Load Balancer
- Auto Scaling Group implementation
- Docker image registry integration (ECR)
- Blue-Green deployment strategy
- ECS or EKS migration
- Centralized secrets management
- Monitoring dashboards and alerting

---

# Author

Surprise POPOOLA Isaiah

- GitHub: https://github.com/popesurprise
- LinkedIn: https://linkedin.com/in/surprisepopoola