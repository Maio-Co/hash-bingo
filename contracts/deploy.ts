// deploy contract
import {
  Connection,
  PublicKey,
  Keypair,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';

(async () => {
  // 建立連接
  const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

  // 生成新錢包密鑰對
  const payer = Keypair.generate();
  const mintAuthority = Keypair.generate();
  const freezeAuthority = Keypair.generate();

  // Airdrop SOL到新錢包
  const airdropSignature = await connection.requestAirdrop(payer.publicKey, 2 * 1e9);
  await connection.confirmTransaction(airdropSignature);

  // 創建新的Token
  const mint = await Token.createMint(
    connection,
    payer,
    mintAuthority.publicKey,
    freezeAuthority.publicKey,
    9, // 小數位數
    TOKEN_PROGRAM_ID
  );

  // 創建Token賬戶
  const payerTokenAccount = await mint.getOrCreateAssociatedAccountInfo(payer.publicKey);

  // 鑄造新Token
  await mint.mintTo(payerTokenAccount.address, mintAuthority.publicKey, [], 1000000);

  // 打印Token賬戶餘額
  const balance = await mint.getAccountInfo(payerTokenAccount.address);
  console.log('Token account balance: ', balance.amount.toNumber());
})();
