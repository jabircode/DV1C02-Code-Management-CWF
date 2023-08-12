pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your code from version control
                // Example for Git
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                // Build your project
                // Example for Node.js project with npm
                nodejs(nodeJSInstallationName: 'NodeJS14') {
                    sh 'npm install'  // Install project dependencies
                    sh 'npm run build'  // Build the project
                }
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool name: 'SonarQubeScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                    withSonarQubeEnv('SonarQubeScanner') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
    }
}
