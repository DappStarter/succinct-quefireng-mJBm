require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remind concert grace crew frame skirt'; 
let testAccounts = [
"0xbd9c242a0cc8bdaaa6eb38684230082cee8e2defd1676aa9b5fed3d1b8585e6b",
"0x03dea04aad9488fdcb8814bdc8cda3acd58fe79d0263b1b5f36d0f21b0dc9f37",
"0x55ce0dec3c732f0664ef9a8733f08afa7a078bec2078542db273c47c5c5184af",
"0xb32a8a13a8031f3a229d7a2343d9c263955575ff42a183ecfce903a25ad1db28",
"0xfea13c11fe21b9fc92361af69cd6f90e5cd42331c3499be06439f94a733f6560",
"0x9ea6c9ae133eca5d57bc6e6feaa4a13413349f832045c898aa99e222f01249cc",
"0x9a0fca5ec6d3469f94b270cf4e12fc6ceb872c71e922fa06e990f5fd6ecee56c",
"0xe2f201127bfdb667c15d5521beaedabe593a54578ac8e3f39a3395d87a91beb4",
"0x8a20adaf4e6c1cf51f8df1fccf42a88ff7b7e46c600d40782ae4df7dc5756fa5",
"0x5d32c90f32e1fe341f7cfd0e97a6e144341a34ff5f0aea08e9d1dcb6bbbd5dda"
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


