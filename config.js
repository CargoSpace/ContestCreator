module.exports = {
	rpc : {
		port: 80,
		host: process.env.RPC_ENDPOINT || 'csc-dretnan.c9users.io', 
		path: 'rpc/', 
		strict: true,
	},
	port: 3000,
}