---
outline: deep
---

# Payment Settings

## Preparation

Quail currently only supports cryptocurrencies as a payment method. Before enabling payments, you need to set up a cryptocurrency wallet that supports EVM. Next, we will take the desktop version of [Metamask](https://metamask.io/) as an example to introduce how to set up payment.

### Install Metamask to create a wallet

First, you need to install the Metamask browser plugin. You can download the plug-in for your browser on the [Metamask official website](https://metamask.io/).

After installing Metamask, you need to create a wallet. In the Metamask plugin, click "Create a Wallet" and follow the instructions to create a wallet.

Remember your seed phrase, this is the only way to recover your wallet.

## Enable Payment

1. In Quail's "List Settings", find "Payment Settings".
2. Click "Bind Wallet". If Metamask has been installed correctly, an authorization window will pop up. Please complete the authorization.
3. At this point, Quail will read your wallet address and display it under the "Binding Wallet".
4. Please select the cryptocurrency you want to receive payment. Currently supports USDC and pUSD.
5. Please enter the quarterly subscription price and annual subscription price, the price must be greater than 0.
6. Click the "Save" button.

If there are no errors, payment setup is complete. You can click "Visit membership upgrade page" to view the rendering effect of the membership upgrade page.

## View Earnings

Quail does not hold your funds, all funds are transferred directly to your wallet address on the [MVM Network](https://mvm.app).

Receive an email in your inbox when a new subscriber pays for your membership plan. At the same time, you can click the "search" icon button on the right side of "Bind Wallet" in Quail's "List Settings".

This will take you to the block explorer address page of the MVM network where you can view your funds and transactions.

## Withdraw Funds

The MVM Network provides the [MVM Bridge](https://bridge.mvm.app/) app for viewing, depositing and withdrawing funds.

You can select the funds you want to withdraw on the MVM bridge, click "Withdraw", and follow the instructions to withdraw the funds from the MVM network to the corresponding L1 network.

### Deposit some ETH as gas fee

MVM consumes ETH as gas fee when withdrawing funds. Please make sure that your wallet has enough ETH to pay the gas fee. 

If not, you can use Pando's deposit function to deposit ETH to your wallet:

1. Visit [Pando App](https://app.pando.im/) and Connect Wallet.
2. Tap your wallet address at the top right of the page (on mobile, tap the last item in the tabs), and then tap "Deposit".
3. Choose ETH, enter the amount you want to deposit, and then tap "Deposit".
