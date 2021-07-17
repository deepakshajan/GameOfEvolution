const GoeConfig = require("./GoeConfig");

class ConfigCache {

    static _config;

    static getConfig() {
        if(!ConfigCache._config) {
            ConfigCache._config = new GoeConfig();
        }
        return ConfigCache._config;
    }
    static setConfig(value) {
        ConfigCache._config = value;
    }

}

module.exports = ConfigCache;