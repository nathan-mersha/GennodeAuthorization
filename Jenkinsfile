pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }



        stage('Documentation') {
            steps {
                sh 'npm run apidoc'
            }
        }

        stage('Deploy') {
            steps {
                sh 'npm run start || sudo npm run start'
            }
        }
    }
}