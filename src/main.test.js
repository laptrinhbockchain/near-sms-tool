beforeAll(async function () {
    // NOTE: nearlib and nearConfig are made available by near-cli/test_environment
    const near = await nearlib.connect(nearConfig);
    window.accountId = nearConfig.contractName;
    window.contract = await near.loadContract(nearConfig.contractName, {
        viewMethods: ['getSentMessages', 'getInboxMessages', 'getSentMsgNum', 'getInboxMsgNum'],
        changeMethods: ['sendMessage'],
        sender: window.accountId
    })
    console.log("nearConfig.contractName:", nearConfig.contractName);
})

test('Send Message', async () => {
    let fromAccount = window.accountId;
    let toAccount = 'a.testnet';
    console.log("fromAccount:", fromAccount);
    // await window.contract.sendMessage({
    //     to: toAccount,
    //     title: 'Testing',
    //     content: "Only for testing"
    // });
    console.log(`sentMsgNum of ${fromAccount}: ${await window.contract.getSentMsgNum({accountId: fromAccount})}`);
    console.log(`inboxMsgNum of ${toAccount}: ${await window.contract.getInboxMsgNum({accountId: toAccount})}`);
    // const message = await window.contract.getMessage({
    //     index: 0
    // })
    // console.log("Message", message);
})