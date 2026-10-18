# 🚀 DevOps Launchpad — From Code to Cloud

A hands-on Cloud & DevOps project demonstrating how a React application moves from local development to containerization, automated CI/CD, Kubernetes orchestration, and AWS cloud deployment.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite |
| Containerization | Docker, Docker Compose |
| Web Server | Nginx |
| CI/CD | GitHub Actions |
| Container Registry | Docker Hub |
| Orchestration | Kubernetes (kind) |
| Cloud Infrastructure | AWS EC2, Amazon Linux 2023 |
| Monitoring | AWS CloudWatch, Amazon SNS |
| Version Control | Git, GitHub |

## 🏗️ Architecture

```text
Developer
   |
   v
GitHub Repository
   |
   v
GitHub Actions (CI/CD)
   |
   +--> ESLint + React Build + Docker Build
   |
   v
Docker Hub (Container Registry)
   |
   +--> Local Kubernetes Cluster (kind)
   |
   v
AWS EC2 Instance
   |
   v
Docker Container
   |
   v
Nginx Web Server
   |
   v
React Application

AWS CloudWatch --> CPU Alarm --> SNS Email Notifications
```

## ✨ Features Implemented

- Responsive React website developed using Vite
- Multi-stage Docker image using Node.js and Nginx
- Docker Compose for local container management
- GitHub Actions workflow for automated validation and Docker builds
- Automated Docker image publishing to Docker Hub
- Local Kubernetes deployment using a single-node kind cluster
- Public website deployment on AWS EC2
- Docker container configured to restart automatically
- AWS CloudWatch monitoring for EC2 CPU utilization
- High-CPU alarm configured at 80% with an SNS email subscription

## 🐳 Run Locally with Docker

```bash
docker build -t devops-launchpad:v1 .
docker run -d --name devops-web -p 8080:80 devops-launchpad:v1
```

Open `http://localhost:8080`.

## ☸️ Kubernetes Deployment

```bash
kubectl apply -f k8s/deployment.yaml
kubectl get deployments
kubectl get pods
```

The application has been deployed successfully on a local Kubernetes cluster using kind.

## ☁️ AWS EC2 Deployment

The application is hosted on an Amazon Linux 2023 EC2 instance using Docker and Nginx.

Docker image:

`tufelkhan2003/devops-launchpad:latest`

```bash
docker pull tufelkhan2003/devops-launchpad:latest

docker run -d \
  --name devops-launchpad \
  --restart unless-stopped \
  -p 80:80 \
  tufelkhan2003/devops-launchpad:latest
```

The application is accessible through the EC2 instance's public IP address while the instance is running.

## 📊 Monitoring

AWS CloudWatch is configured to monitor EC2 CPU utilization.

- Alarm: `DevOps-Launchpad-High-CPU`
- Threshold: CPU utilization greater than 80%
- Alarm state verified: OK
- SNS topic: `devops-launchpad-alerts`
- Email subscription: Confirmed

End-to-end alarm email delivery testing remains optional.

## 🔗 Project Links

- **GitHub:** https://github.com/Tkhan12345/devops-launchpad
- **Docker Hub:** https://hub.docker.com/r/tufelkhan2003/devops-launchpad

## 📌 Project Status

Core application development, Docker containerization, CI/CD, local Kubernetes deployment, AWS EC2 deployment, and basic CloudWatch monitoring are completed.

Potential future improvements include HTTPS, Terraform-based infrastructure provisioning, automated EC2 deployment, and enhanced application monitoring.
