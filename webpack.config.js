module.exports = {
    module: {
        rules: [
            {
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            localIdentName: '--[hash:base64: 8]'
                        }
                    }
                ]
            }
        ],
    },
};
