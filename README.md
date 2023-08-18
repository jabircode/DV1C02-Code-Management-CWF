# DV1C02-Code-Management-CWF
# live: https://64df4ec6a6083114ba12d305--dynamic-gumdrop-e41502.netlify.app

# CI/CD Pipeline

This repository contains a GitHub Actions workflow for setting up a CI/CD pipeline that automates various tasks such as building, testing, analyzing code quality using SonarCloud, and deploying to Netlify.

## Workflow Overview

The workflow is triggered on each push to the `main` branch. It consists of the following steps:

1. **Checkout Repository**: This step checks out the repository code for further processing.

2. **Set Up Node.js**: Sets up the Node.js environment with the specified version (Node.js 18 in this case).

3. **Install Dependencies**: Installs project dependencies using `npm install`.

4. **Install Mocha**: Installs the Mocha testing framework globally.

5. **Run Tests with Mocha**: Executes tests using the Mocha framework. You can customize the test command as needed.

6. **Run SonarCloud Analysis**: Analyzes code quality using SonarCloud. The `projectBaseDir` specifies the project directory, and various arguments are provided to configure the analysis.

7. **Deploy to Netlify**: Deploys the project to Netlify using the Netlify GitHub Action. The `publish-dir` specifies the directory to be deployed.

## SonarCloud Analysis

The workflow includes a step for running a SonarCloud analysis. To use this step effectively, make sure to provide the necessary environment variables:

- `SONAR_TOKEN`: A token to authenticate with SonarCloud.
- `SONAR_ORG`: Your SonarCloud organization key.

```yaml
- name: Run SonarCloud Analysis
  uses: sonarsource/sonarcloud-github-action@master
  with:
    projectBaseDir: . # Adjust to your project's base directory
    args: >
      -Dsonar.projectKey=jabircode_DV1C02-Code-Management-CWF
      -Dsonar.organization=${{ secrets.ORGANIZATION }}
  env:
    SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
    SONAR_ORG: ${{ secrets.ORGANIZATION }}
