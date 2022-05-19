module.exports = {
    target: "serverless",
    images: {
        domains: [process.env.CLOUDINARY_URL],
    },
    webpack: (config, options) => {
        config.module.rules.push({ parser: { amd: false } })
        return config
    }
}