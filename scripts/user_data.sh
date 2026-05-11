#!/bin/bash

apt update -y

# Install Docker
apt install -y docker.io

systemctl start docker
systemctl enable docker

usermod -aG docker ubuntu

# Install CloudWatch Agent
wget https://amazoncloudwatch-agent.s3.amazonaws.com/ubuntu/amd64/latest/amazon-cloudwatch-agent.deb

dpkg -i amazon-cloudwatch-agent.deb

mkdir -p /opt/aws/amazon-cloudwatch-agent/etc/

# Placeholder:
# CloudWatch config would be copied here during deployment

# Start sample container
docker run -d -p 80:80 nginx