var Counter = artifacts.require("Counter");

module.exports = async function(callback) {
    var counter = await Counter.deployed();
    await counter.count();
    let value = await counter.count();

    console.log("current counter value is:"+value);
}