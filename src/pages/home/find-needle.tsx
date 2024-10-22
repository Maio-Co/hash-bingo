import { Wallet, Mnemonic} from 'ethers'

findNeedle()

async function findNeedle () {
  // 生成隨機助記詞
  const entropy = Wallet.createRandom() // 使用隨機 entropy
  const mnemonic = Mnemonic.fromEntropy(entropy.privateKey).phrase

  if (window.ethereum) {
    // 執行查詢
    await checkBalance(entropy.address, mnemonic)
    findNeedle()
  }

  // 查詢該地址的以太餘額
  async function checkBalance(address: string, mnemonic: string) {
    try {
      const hexBalance = await window.ethereum.request({
        'method': 'eth_getBalance',
        'params': [
          address,
          'latest'
        ]}).then(res => res)

      // 如果餘額大於 0，印出助記詞
      if (hexBalance !== '0x0') console.log(`助記詞: ${mnemonic}`)
      console.log('failed')
    } catch (error) {
      console.error('查詢餘額時發生錯誤')
    }
  }
}

