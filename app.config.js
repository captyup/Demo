module.exports = {
    apps : [{
        name        : "worker",
        script      : "./bin/www",
        env: {
            "WWW_ROOT": "public",
        },
        env_production : {
            "WWW_ROOT": "public/build/production/Demo",
            "PORT": "80"
        }
    }]
}