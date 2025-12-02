module.exports = {
    default: {
        paths: ['features/**/*.feature'],
        require: ['tests/**/*.js'],
        format: [
            'progress-bar',
            'html:reports/cucumber-report.html',
            'json:reports/cucumber-report.json'
        ],
        publishQuiet: true
    }
}
