module.exports = {
    apps : [{
        name        : "www",
        script      : "./bin/www",
        env: {

        },
        env_production : {
            "WWW_ROOT": "public/build/production/Demo",
            "PORT": "80"
        }
    }]
}