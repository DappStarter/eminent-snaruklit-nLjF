require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth soap slow include prize swallow spring'; 
let testAccounts = [
"0x24fa04057e0f800069d317b086beb614bcb4baaa1478d7e8f98ec2febf192c87",
"0xbc1bc5aa4cb9cef2520956b812d52de80e820227a1fb6998aba84cfe3003dfde",
"0x3ed0b67d0e035f289b17e5940a74f7210b9a961d3b387467d72827919d77ea86",
"0x32869b376dde71002652ab340cb5cf6a7b4b3d84b5d854a41ae0a41323fc3b2b",
"0xeb85b8d1003d508137fc30f1cdc96b007641918348e1625e5a3ae7a92a2350fe",
"0xce30e6a301689a11f701bc7bbdaf2db76bfd38b2ae41bf03f3eede4bcda13082",
"0xbf0c5690d6d78933d5078bd176302bc8f35ac4600b37ccc24948729f031d5647",
"0x4063951d2a74830960eb8da3d390dc6b63582997abdcb5d38f08e351ca335552",
"0x81ac29deb10cff0dd5eaaf25b5226f023cf81419e9824e7cab238c6c034b5b8e",
"0x6d3fa916d649065b98213357980c966715352b0e55e4fbaa6f688a8599d682bb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


