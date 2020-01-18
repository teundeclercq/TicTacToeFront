pipeline {
  agent any
  stages {
    stage('Initialize') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh '''echo $PWD
              $!/bin/bash
              ng build --prod'''
      }
    }
    stage('Test') {
      steps {
        sh 'ng test --watch=false --codeCoverage=true --browsers PhantomJS --code-coverage'
      }
    }
    stage('Sonarqube analyses') {
      steps {
        sh '''sonar-scanner'''
      }
    }
    stage('Clean') {
      steps {
        sh '''if [ -d  "/var/www/tictactoe.teun-school.nl/html/dist"]; then rm -r /var/www/tictactoe.teun-school.nl/html/dist; fi'''
      }
    }
    stage('Deploy') {
      steps {
        sh '''cp -r /var/lib/jenkins/workspace/TicTacToe_FrontEnd/dist /var/www/tictactoe.teun-school.nl/html/dist'''
      }
    }
  }
}
